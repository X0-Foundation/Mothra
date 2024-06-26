// SPDX-License-Identifier: BUSL-1.1
pragma solidity ^0.8.0;

import "./IConstants.sol";
interface ISessionFees {
    function payFeeTgrLogic(address account, uint principal, FeeRates calldata rates, bool fromAllowance) external returns (uint feesPaid);
}
