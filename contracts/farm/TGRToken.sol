// SPDX-License-Identifier: GPL-2.0-or-later
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";

import "./interfaces/ITGRToken.sol";
import "../session/interfaces/IConstants.sol";
import "../session/SessionRegistrar.sol";
import "../session/SessionManager.sol";
import "../session/SessionFees.sol";
import "../session/Node.sol";
import "../libraries/WireLibrary.sol";
import "../periphery/interfaces/IXMaker.sol";
import "../periphery/interfaces/IXTaker.sol";
import "../core/interfaces/IXFactory.sol"; 
import "../core/interfaces/IXPair.sol";
import "../libraries/math/SafeMath.sol";
import "../libraries/math/AnalyticMath.sol";
import "../libraries/GovLib.sol";

import "hardhat/console.sol";

// TGRToken with Governance.
contract TGRToken is Node, Ownable, ITGRToken, SessionRegistrar, SessionFees, SessionManager {

    using SafeMath for uint256;

    //==================== Constants ====================
    string private constant sForbidden = "Forbidden";
    string private constant sZeroAddress = "Zero address";
    string private constant sExceedsBalance = "Exceeds balance";
    uint256 public constant override maxSupply = 50 * 1e6 * 10**_decimals;
    address constant zero_address = 0x0000000000000000000000000000000000000000;

    //====================

    receive() external payable {}

    //==================== ERC20 core data ====================
    string private constant _name = "TGR Token";
    string private constant _symbol = "TGR";
    uint8 private constant _decimals = 18;
    mapping(address => mapping(address => uint256)) private _allowances;
    uint256 private _totalSupply;
    mapping(address => uint256) private _balances;

    //====================== Pulse core data ============================

    // The non-user TGR accounts, not limited to the below items.
    // address tgrFtm; // Decleared in node. The address of TGR_FTM pool, which has TGR and WFTM balances.
    // address tgrHtz; // Decleared in node. The address of TGR_HTZ pool, which has TGR and HTZ balances.
    address votes;  // The address of the share-based, TGR staking account in the Agency dapp.

    Pulse public lp_reward;
    Pulse public vote_burn;
    Pulse public user_burn;

    mapping(address => User) Users;
    uint256 nonUserSumTokens;

    uint256 buysell_burn_rate;
    uint256 shift_burn_rate;

    // test accounts
    address admin; address alice; address bob; address carol;

    //====================== Pulse internal functions ============================

    function _isUserAccount(address account) internal view returns (bool) {
        return pairs[account].token0 == address(0) && account != votes;
    }

    function _pendingBurn(address account) internal view returns (uint256 pendingBurn) {
        pendingBurn = _balances[account] * user_burn.accDecayPerShare / 1e12 - Users[account].debtToPendingBurn;
    }

    function _settleWithPendingBurn(address account) internal { // user account only
        uint256 pendingBurn = _pendingBurn(account);
        if (pendingBurn > 0) {
            _balances[account] -= pendingBurn; // not less than its real value
            _totalSupply -= pendingBurn; // not less than its real value
            user_burn.sum_tokens -= pendingBurn; // larger
            user_burn.pending_burn -= pendingBurn; // larger
            Users[account].debtToPendingBurn =  _balances[account] * user_burn.accDecayPerShare / 1e12;
        }
    }

    function _changeBalance(address account, uint256 amount, bool addNotSubtract) internal {
        if (_isUserAccount(account)) {
            _settleWithPendingBurn(account);
            if (addNotSubtract) {
                _balances[account] += amount;
                user_burn.sum_tokens += amount;
            } else {
                _balances[account] -= amount;
                user_burn.sum_tokens -= amount;
            }
            Users[account].debtToPendingBurn =  _balances[account] * user_burn.accDecayPerShare / 1e12;

        } else {
            if (addNotSubtract) {
                _balances[account] += amount;
                nonUserSumTokens += amount;
            } else {
                _balances[account] -= amount;
                nonUserSumTokens -= amount;
            }
        }
    }

    AnalyticMath analyticMath;

    constructor(address _analyticMath) Ownable() Node(NodeType.Token) {
        analyticMath = AnalyticMath(_analyticMath);

        //--------- test ---------
        admin = _msgSender();
        alice = 0x70997970C51812dc3A010C7d01b50e0d17dc79C8;
        bob = 0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC;
        carol = 0x90F79bf6EB2c4f870365E785982E1f101E93b906;

        votes = 0x976EA74026E726554dB657fA54763abd0C3a0aa9;

        lp_reward = Pulse(block.timestamp, 2 seconds, 690, tgrFtm, 0, 0, 0, block.timestamp / (2 seconds));
        // 0.69% of XDAO/FTM LP has the XDAO side sold for FTM, 
        // then the FTM is used to buy HTZ which is added to XDAO lps airdrop rewards every 12 hours.        
        
        vote_burn = Pulse(block.timestamp, 2 seconds, 70, votes, 0, 0, 0, block.timestamp / (2 seconds));
        // 0.07% of tokens in the Agency dapp actively being used for voting burned every 12 hours.

        user_burn = Pulse(block.timestamp, 4 seconds, 777, zero_address, 0, 0, 0, block.timestamp / (4 seconds));
        // 0.777% of tokens(not in Cyberswap/Agency dapp) burned each 24 hours from users wallets. 

        // ------------ What to do with this requirement ?
        // 1–55% Fee sold to HTZ and added to XDAO lps airdrop rewards depending on how much you are purchasing or selling. 
        // This is to punish large buyers/sellers but add large rewards for our dedicated DAO members.


        buysell_burn_rate = 31415; // 31.4159265359% Fee burned on buys and sells.
        shift_burn_rate = 13374; // 13.37420% fee on transfers burned.

        trackFeeStores = true;
        trackFeeRates = true;
        trackPairStatus = true;

        _mint(_msgSender(), 1e6 * 10 ** _decimals);

    }

    //==================== ERC20 internal functions ====================

    function _balanceOf(address account) internal view returns (uint256 balance) {
        if (_isUserAccount(account)) {
            // This line of code produces dust, due to numerical error. pendingBurn becomes less than its real value.
            uint256 pendingBurn = _pendingBurn(account);
            // so, balance becomes greater than its real value.
            balance = _balances[account] - pendingBurn; // not less than its real value
        } else {
            balance = _balances[account];
        }
    }

    function _getTotalSupply() internal view returns (uint256) {
        return _totalSupply - user_burn.pending_burn;
    }

    function _beforeTokenTransfer(address from, address to, uint256 amount) internal virtual {}

    function _afterTokenTransfer(address from, address to, uint256 amount) internal virtual {}

    function _mint(address to, uint256 amount) internal virtual {
        require(to != address(0), sZeroAddress);

        _beforeTokenTransfer(address(0), to, amount);
        _totalSupply += amount;
        _changeBalance(to, amount, true);
        _afterTokenTransfer(address(0), to, amount);

        emit Transfer(address(0), to, amount);
    }

    function _burn(address from, uint256 amount) internal virtual {
        require(from != address(0), sZeroAddress);
        uint256 accountBalance = _balanceOf(from);
        require(accountBalance >= amount, sExceedsBalance);

        _beforeTokenTransfer(from, address(0), amount);
        _changeBalance(from, amount, false);
        _totalSupply -= amount;
        _afterTokenTransfer(from, address(0), amount);
        

        emit Transfer(from, address(0), amount);
    }

    function _bury(address from, uint256 amount) internal virtual {
        require(from != address(0), sZeroAddress);
        uint256 accountBalance = _balanceOf(from);
        require(accountBalance >= amount, sExceedsBalance);

        _beforeTokenTransfer(from, address(0), amount);
        _changeBalance(from, amount, false);
        _afterTokenTransfer(from, address(0), amount);

        emit Transfer(from, address(0), amount);
    }

    function _transfer(
        address sender,
        address recipient,
        uint256 amount
    ) internal virtual {
        require(sender != address(0), sZeroAddress);
        require(recipient != address(0), sZeroAddress);
        uint256 senderBalance = _balanceOf(sender);
        require(senderBalance >= amount, sExceedsBalance);
        //_beforeTokenTransfer(sender, recipient, amount);
        _changeBalance(sender, amount, false);
        _changeBalance(recipient, amount, true);
        //_afterTokenTransfer(sender, recipient, amount);

        emit Transfer(sender, recipient, amount);
    }

    function _transferHub(address sender, address recipient, uint256 amount) internal virtual {
        _openAction(ActionType.Transfer, true);

        if (amount > 0) {
            if (actionParams.isUserAction) {  // Shift transfer
                uint256 burn = amount * buysell_burn_rate / FeeMagnifier;
                _burn(sender, burn);
                amount -= burn;
            }
            _transfer(sender, recipient, amount);
        }

        _closeAction();
    }

    function _approve(
        address _owner,
        address _spender,
        uint256 _amount
    ) internal virtual {
        require(_owner != address(0), sZeroAddress);
        require(_spender != address(0), sZeroAddress);
        _allowances[_owner][_spender] = _amount;
        emit Approval(_owner, _spender, _amount);
    }

   function _increaseAllowance(address _owner, address _spender, uint256 addedValue) internal virtual returns (bool) {
        require(_owner != address(0), sZeroAddress);
        _approve(_owner, _spender, _allowances[_owner][_spender] + addedValue);
        return true;
    }

    function _decreaseAllowance(address _owner, address _spender, uint256 subtractedValue) public virtual returns (bool) {
        require(_owner != address(0), sZeroAddress);
        _approve(_owner, _spender, _allowances[_owner][_spender] - subtractedValue);
        return true;
    }


    //==================== ERC20 public funcitons ====================

    function name() public view virtual returns (string memory) {
        return _name;
    }

    function symbol() public view virtual returns (string memory) {
        return _symbol;
    }

    function decimals() public view virtual returns (uint8) {
        return _decimals;
    }

    function totalSupply() public view override virtual returns (uint256) {
        return _getTotalSupply();
    }

    function balanceOf(address account) public view override virtual returns (uint256) {
        return _balanceOf(account); // not less than its real value
    }

    function mint(address to, uint256 amount) public override onlyOwner {
        require(_getTotalSupply() + amount <= maxSupply, "Exceed Max Supply");
        _mint(to, amount);
    }

    function burn(address from, uint256 amount) public override onlyOwner {
        _burn(from, amount);
    }

    function bury(address from, uint256 amount) public override onlyOwner {
        _bury(from, amount);
    }

    function transfer(address recipient, uint256 amount) public override virtual returns (bool) {
        _transferHub(_msgSender(), recipient, amount);
        return true;
    }

    function transferFrom(
        address sender,
        address recipient,
        uint256 amount
    ) public override virtual returns (bool) {
        if (sender != _msgSender()) {
            uint256 currentAllowance = _allowances[sender][_msgSender()];
            require(currentAllowance >= amount, "Transfer exceeds allowance");
            _approve(sender, _msgSender(), currentAllowance - amount);
        }
        _transferHub(sender, recipient, amount); // No guarentee it doesn't make a change to _allowances. Revert if it fails.

        return true;
    }

    function allowance(address _owner, address _spender) public view override virtual returns (uint256) {
        return _allowances[_owner][_spender];
    }

    function approve(address spender, uint256 amount) public override virtual returns (bool) {
        _approve(_msgSender(), spender, amount);
        return true;
    }

    function increaseAllowance(address spender, uint256 addedValue) public virtual returns (bool) {
        return _increaseAllowance(_msgSender(), spender, addedValue);
    }

    function decreaseAllowance(address spender, uint256 subtractedValue) public virtual returns (bool) {
        return _decreaseAllowance(_msgSender(), spender, subtractedValue);
    }

    //==================== Pulse public functions ====================

    function _getDecayPer1e12(Pulse storage pulse) internal returns (uint256 decayPer1e12) {
        // pulse.lastTime, pulse.cycle, pulse.decayRate

        uint256 round = block.timestamp / pulse.cycle;
        if (round > pulse.latestRound) {
            uint256 missingRounds = round - pulse.latestRound;
            pulse.latestRound = round;
            pulse.latestTime = block.timestamp; // Not used.

            //require(missingRounds <= 30, "Beyond math library capability");
            if (missingRounds > 5) missingRounds = 5; // No trust in analyticMath.

            decayPer1e12 = 1e12;
            if (missingRounds <= 5) { // 5 optimized
                uint256 remain = FeeMagnifier - pulse.decayRate;
                uint256 numerator = remain; 
                uint256 denominator = FeeMagnifier;
                for(uint256 i = 1; i < missingRounds; i++) { // note it starts from 1.
                    numerator *= remain;
                    denominator *= FeeMagnifier;
                }
                decayPer1e12 = 1e12 - 1e12 * numerator / denominator;
            } else {
                // !!! This function appears not to work properly.
                (uint256 P, uint256 Q) = analyticMath.pow(FeeMagnifier - pulse.decayRate, FeeMagnifier, missingRounds, uint256(1));
                // Function pow(a, b, c, d) approximates the power of a / b by c / d.
                // When a >= b, the output of this function is guaranteed to be not greater than or equal to the actual value of (a / b) ^ (c / d).
                // When a <= b, the output of this function is guaranteed to be not less than or equal to the actual value of (a / b) ^ (c / d).
                // As a <= b, the output is not less than its real value.
                decayPer1e12 = 1e12 - 1e12 * P / Q;
                // Now, decayPer1e12 is not greater than its real value.
            }
        }
    }

    function pulse_lp_reward() external {
        // 0.69% of XDAO/FTM LP has the XDAO side sold for FTM, 
        // then the FTM is used to buy HTZ which is added to XDAO lps airdrop rewards every 12 hours.

        uint256 decayPer1e12 = _getDecayPer1e12(lp_reward); // not greater than its real value.
        // Delute by decayPar1e12 (ie, remove decayPer1e12 portion from tgrFtm pool), use the TGR part to buy FTM, 
        // and use the FTM tokens to buy HTZ tokens at the htzftm pool, 
        // then add them to airdrop rewards.
        
        uint256 decay = IERC20(tgrFtm).totalSupply() * decayPer1e12 / 1e12;
        uint256 amountETH = IXMaker(nodes.maker).diluteLiquidityForETH(
            address(this), decay, 0, address(this), block.timestamp
        );
        console.log("FTM gaind by LP dilution -----", amountETH);
        address[] memory path = new address[](2);
        path[0] = WBNB; path[1] = HTZ;
        uint256 amountHertz = IERC20(HTZ).balanceOf(address(this));

        // We may need to get this swap free from the price change control.
        IXTaker(nodes.taker).swapExactETHForTokens {value: amountETH} (0, path, address(this), block.timestamp);
        amountHertz = IERC20(HTZ).balanceOf(address(this)) - amountHertz;
        console.log("HTZ gaind by swap -----", amountHertz);
        IERC20(HTZ).transfer(HTZRewards, amountHertz);

        lp_reward.latestTime = block.timestamp;
    }

    function pulse_vote_burn() external {
        // 0.07% of tokens in the Agency dapp actively being used for voting burned every 12 hours.

        uint256 decayPer1e12 = _getDecayPer1e12(vote_burn); // not greater than its real value.
        // burn decayPer1e12 portion of votes account's TRG balance.
        _burn(vote_burn.account, _balances[vote_burn.account] * decayPer1e12 / 1e12);

        vote_burn.latestTime = block.timestamp;
    }

    function pulse_user_burn() external {
        // 0.777% of tokens(not in Cyberswap/Agency dapp) burned each 24 hours from users wallets.
        // Interpretation: TGR tokens not in Cyberswap accounts (tgrFtm and tgrHtz), and not in Agency account (votes account), 
        // will be burned at the above rate and interval.

        uint256 decayPer1e12 = _getDecayPer1e12(user_burn); // not greater than its real value.
        if (decayPer1e12 > 0) {
            uint256 net_value = user_burn.sum_tokens - user_burn.pending_burn;
            uint256 new_burn = net_value * decayPer1e12 / 1e12;  // not greater than its real value
            user_burn.pending_burn += new_burn;
            user_burn.accDecayPerShare += new_burn * 1e12 / user_burn.sum_tokens;   // not greater than its real value

            user_burn.latestTime = block.timestamp;
        }
    }

    function checkForConsistency() external view {

        // Defines user_burn attributes, based on the ERC20 core data.
        require(user_burn.sum_tokens + nonUserSumTokens == _totalSupply, "sum_tokens + nonUserSumTokens != _totalSupply");
        require(user_burn.sum_tokens - user_burn.pending_burn + nonUserSumTokens == totalSupply(), "pending_burn incorrct");

        // Be careful, there are more userAccounts. Look at _isUserAccount().
        if (_balances[admin] + _balances[alice] + _balances[bob] + _balances[carol] != user_burn.sum_tokens) {
            console.log(_balances[admin] + _balances[alice] + _balances[bob] + _balances[carol], user_burn.sum_tokens);
        }

        // console.log(_balances[admin], _balances[alice], _balances[bob], _balances[carol]);
        // console.log(user_burn.sum_tokens);   
        // require(_balances[admin] + _balances[alice] + _balances[bob] + _balances[carol] == user_burn.sum_tokens,
        // "_bal[admin] + _bal[alice] + _bal[bob] + _bal[carol] != sum_tokens");

        // This requirement cannot be met due to numerical errors.
        // require(user_burn.sum_tokens - user_burn.pending_burn == balanceOf(admin) + balanceOf(alice) + balanceOf(bob) + balanceOf(carol),
        // "sum_tokens - pending_burn != balOf(admin) + balOf(alice) + balOf(bob) + balOf(carol)");
        // Instead, 

        uint256 net_collective = user_burn.sum_tokens - user_burn.pending_burn;
        uint256 sum_net_of_users = balanceOf(admin) + balanceOf(alice) + balanceOf(bob) + balanceOf(carol);
        uint256 abs_error;
        if (net_collective < sum_net_of_users) {
            abs_error = sum_net_of_users - net_collective;
        } else {
            abs_error = net_collective - sum_net_of_users;
        }
        require( 1e6 * abs_error < net_collective, "Error exceeds a million-th");
    }

    //======================= DEX cooperations ===============================


    function transferDirectSafe(
        address sender,
        address recipient,
        uint256 amount
    ) external virtual override {
        address msgSender = _msgSender();

        require(
        msgSender == nodes.taker 
        || msgSender == nodes.maker 
        || pairs[msgSender].token0 != address(0),    // coming from a pair
        sForbidden);

        if (msgSender == nodes.maker) { // Add/Dilute/Remove TGR liquidity.
            if (pairs[recipient].token0 != address(0)) {  // Add
                ActionType action = _getCurrentActionType();
                if (action == ActionType.AddLiquidity) {
                    console.log("Add");
                } else if (action == ActionType.Dilute) {
                    console.log("Dilute");
                }
            } else if (sender == nodes.maker) {  // Remove
                console.log("Remove");
            } // no else
        } else if (msgSender == nodes.taker) { // Buy/Sell TGR tokens
            if (pairs[recipient].token0 != address(0)) {  // Sell, as Taker sends tokens (from any) to a pool.
                console.log("Sell");
            } else if (sender == nodes.taker) {  // Buy, as Taker sends tokens from Taker to a non-pool.
                console.log("Buy");
            } // no else

            uint256 burn = amount * buysell_burn_rate / FeeMagnifier;
            _burn(sender, burn);
            amount -= burn;

        } else if (pairs[msgSender].token0 != address(0)) { // Remove/Buy/Dilute
            require( msgSender == sender, "Inconsistent1" );

            if (recipient == nodes.maker) { // No fee or burn, as it's a midway transfer to Maker.
            } else if (recipient == nodes.taker) { // No fee or burn, as it's a midway transfer to Taker.
            } else {
                ActionType action = _getCurrentActionType();

                if(action == ActionType.Swap) { // Buy
                    uint256 burn = amount * buysell_burn_rate / FeeMagnifier;
                    _burn(sender, burn);
                    amount -= burn;
                    console.log("Buy");
                } else if (action == ActionType.RemoveLiquidity) { // Remove
                    console.log("Remove");
                } else if (action == ActionType.Dilute) { // Dilute
                    console.log("Dilute");
                } else {
                    console.log("??????????????");
                }
            }
        } else {
                revert("Inconsistent2");
        }

        if (amount > _balances[sender]) amount = _balances[sender];
        if (amount > 0) {
            _transfer(sender, recipient, amount);
            //_moveDelegates(_delegates[sender], _delegates[recipient], amount);
        }
    }

    function changeBurnRates(uint256 _buysell_burn_rate, uint256 _shift_burn_rate) external onlyOwner {
        require(_buysell_burn_rate <= FeeMagnifier && _shift_burn_rate <= FeeMagnifier, "Invalid burn rates");
        buysell_burn_rate = _buysell_burn_rate;
        shift_burn_rate = _shift_burn_rate;
    }

    //==================== Base contracts ====================

    modifier onlySessionManager() virtual override(SessionFees, SessionRegistrar) {
        address msgSender = _msgSender();
        require(
            msgSender == nodes.token ||
                msgSender == nodes.maker ||
                msgSender == nodes.taker,
            "Not a session manager"
        );
        _;
    }

    modifier ownerOnly() virtual override {
        require(_msgSender() == owner(), "Not owner");
        _;
    }

    function getOwner() public view override returns (address) {
        return owner();
    }

    function setNode(
        NodeType nodeType,
        address node,
        address caller
    ) public virtual override wired {
        super.setNode(nodeType, node, caller);
        if (nodeType == NodeType.Token) {
            sessionRegistrar = ISessionRegistrar(node);
            sessionFees = ISessionFees(node);
        }
    }

    //================== Agency-related ====================
}
