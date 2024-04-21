/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  SimpleSharedLinearReward,
  SimpleSharedLinearRewardInterface,
} from "../SimpleSharedLinearReward";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_analyticMath",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "DECIMALS",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "INITIAL_SUPPLY",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MAX_SUPPLY",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "_spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "_decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "accRewardPerShare12",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "_spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "alpha",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "checkForConsistency",
    outputs: [
      {
        internalType: "uint256",
        name: "pending_collective",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "pending_marginal",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "abs_error",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "error_rate",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "distCycle",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getTotalState",
    outputs: [
      {
        internalType: "uint256",
        name: "totalSupply",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_latestBlock",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_accRewardPerShare12",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_rewordPool",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_totalPendingReward",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "getUserState",
    outputs: [
      {
        internalType: "uint256",
        name: "_share",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_reward",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_rewardDebt",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_userPendingReward",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "rewardPool",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "upadateWithTotalShare",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620019c1380380620019c1833981016040819052620000349162000407565b6200003f33620000fb565b600c80546001600160a01b0383166001600160a01b031991821617909155436004556009805482167370997970c51812dc3a010c7d01b50e0d17dc79c8179055600a80548216733c44cdddb6a900fa2b585dd299e03d12fa4293bc179055600b80549091167390f79bf6eb2c4f870365e785982e1f101e93b906179055620000f4620000d36000546001600160a01b031690565b620000e1601260086200044f565b620000ee90600a62000576565b6200014b565b5062000659565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b60408051808201909152600c81526b5a65726f206164647265737360a01b60208201526001600160a01b038316620001a15760405162461bcd60e51b815260040162000198919062000587565b60405180910390fd5b50620001b082826001620001b4565b5050565b620001be6200035b565b6001600160a01b038316600090815260086020908152604080832054600290925282205460075464e8d4a5100091620001f791620005df565b62000203919062000601565b6200020f919062000624565b9050806006600082825462000225919062000624565b90915550506001600160a01b03841660009081526008602052604081206001018054839290620002579084906200063e565b90915550508115620002b4576001600160a01b038416600090815260026020526040812080548592906200028d9084906200063e565b925050819055508260036000828254620002a891906200063e565b90915550620002ff9050565b6001600160a01b03841660009081526002602052604081208054859290620002de90849062000624565b925050819055508260036000828254620002f9919062000624565b90915550505b6001600160a01b03841660009081526002602052604090205460075464e8d4a51000916200032d91620005df565b62000339919062000601565b6001600160a01b03909416600090815260086020526040902093909355505050565b60006005546004544362000370919062000624565b6200037c919062000624565b90508015620004045760006200039d8269021e19e0c9bab2400000620005df565b90508060066000828254620003b391906200063e565b9091555050600354620003cc8264e8d4a51000620005df565b620003d8919062000601565b60076000828254620003eb91906200063e565b9091555050600454620003ff904362000624565b600555505b50565b6000602082840312156200041a57600080fd5b81516001600160a01b03811681146200043257600080fd5b9392505050565b634e487b7160e01b600052601160045260246000fd5b600060ff821660ff84168060ff038211156200046f576200046f62000439565b019392505050565b600181815b80851115620004b85781600019048211156200049c576200049c62000439565b80851615620004aa57918102915b93841c93908002906200047c565b509250929050565b600082620004d15750600162000570565b81620004e05750600062000570565b8160018114620004f95760028114620005045762000524565b600191505062000570565b60ff84111562000518576200051862000439565b50506001821b62000570565b5060208310610133831016604e8410600b841016171562000549575081810a62000570565b62000555838362000477565b80600019048211156200056c576200056c62000439565b0290505b92915050565b60006200043260ff841683620004c0565b600060208083528351808285015260005b81811015620005b65785810183015185820160400152820162000598565b81811115620005c9576000604083870101525b50601f01601f1916929092016040019392505050565b6000816000190483118215151615620005fc57620005fc62000439565b500290565b6000826200061f57634e487b7160e01b600052601260045260246000fd5b500490565b60008282101562000639576200063962000439565b500390565b6000821982111562000654576200065462000439565b500190565b61135880620006696000396000f3fe608060405234801561001057600080fd5b50600436106101c45760003560e01c806370a08231116100f9578063a457c2d711610097578063d1daefb411610071578063d1daefb4146103df578063db1d0fd5146103e8578063dd62ed3e146103f9578063f2fde38b1461043257600080fd5b8063a457c2d714610389578063a9059cbb1461039c578063bdfeb1e5146103af57600080fd5b80638da5cb5b116100d35780638da5cb5b1461032857806395d89b41146103435780639dc29fac14610363578063a150da2a1461037657600080fd5b806370a0823114610305578063715018a614610318578063739572891461032057600080fd5b806332cb6b0c11610166578063416ae76811610140578063416ae768146102b957806357627e93146102ec57806366666aa9146102f45780636863909e146102fd57600080fd5b806332cb6b0c14610289578063395093511461029157806340c10f19146102a457600080fd5b806323b872dd116101a257806323b872dd1461024d5780632e0f2625146102605780632ff2e9dc1461027a578063313ce5671461028257600080fd5b806306fdde03146101c9578063095ea7b31461021457806318160ddd14610237575b600080fd5b60408051808201909152601881527f53696d706c655368617265644c696e656172526577617264000000000000000060208201525b60405161020b919061102a565b60405180910390f35b61022761022236600461109b565b610445565b604051901515815260200161020b565b61023f61045c565b60405190815260200161020b565b61022761025b3660046110c5565b61046c565b610268601281565b60405160ff909116815260200161020b565b61023f61050e565b6012610268565b61023f610528565b61022761029f36600461109b565b61054a565b6102b76102b236600461109b565b61055e565b005b6102cc6102c7366004611101565b61060e565b60408051948552602085019390935291830152606082015260800161020b565b61023f600a81565b61023f60065481565b6102b761064f565b61023f610313366004611101565b6106ea565b6102b7610708565b6102cc61073e565b6000546040516001600160a01b03909116815260200161020b565b6040805180820190915260048152635346525760e01b60208201526101fe565b6102b761037136600461109b565b61083f565b6102276103843660046110c5565b610873565b61022761039736600461109b565b6108ff565b6102276103aa36600461109b565b61090c565b6103b7610919565b604080519586526020860194909452928401919091526060830152608082015260a00161020b565b61023f60075481565b61023f69021e19e0c9bab240000081565b61023f61040736600461111c565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6102b7610440366004611101565b610938565b60006104523384846109d0565b5060015b92915050565b600061046760035490565b905090565b60006001600160a01b03841633146104f9576001600160a01b0384166000908152600160209081526040808320338452909152902054828110156104f75760405162461bcd60e51b815260206004820152601a60248201527f5472616e73666572206578636565647320616c6c6f77616e636500000000000060448201526064015b60405180910390fd5b505b610504848484610a92565b5060019392505050565b61051a60126008611165565b61052590600a61126e565b81565b61053460126008611165565b61053f90600a61126e565b61052590600a61127d565b6000610557338484610bac565b9392505050565b6000546001600160a01b031633146105885760405162461bcd60e51b81526004016104ee9061129c565b61059460126008611165565b61059f90600a61126e565b6105aa90600a61127d565b816105b460035490565b6105be91906112d1565b11156106005760405162461bcd60e51b8152602060048201526011602482015270457863656564204d617820537570706c7960781b60448201526064016104ee565b61060a8282610c33565b5050565b6001600160a01b0381166000908152600260209081526040808320546008909252822060018101549054919290919061064685610c8a565b90509193509193565b60006005546004544361066291906112e9565b61066c91906112e9565b905080156106e757600061068a8269021e19e0c9bab240000061127d565b9050806006600082825461069e91906112d1565b90915550506003546106b58264e8d4a5100061127d565b6106bf9190611300565b600760008282546106d091906112d1565b90915550506004546106e290436112e9565b600555505b50565b6001600160a01b038116600090815260026020526040812054610456565b6000546001600160a01b031633146107325760405162461bcd60e51b81526004016104ee9061129c565b61073c6000610d55565b565b60008060008060065461074f610da5565b61075991906112d1565b93506107756107706000546001600160a01b031690565b610c8a565b61077f90846112d1565b600954909350610797906001600160a01b0316610c8a565b6107a190846112d1565b600a549093506107b9906001600160a01b0316610c8a565b6107c390846112d1565b600b549093506107db906001600160a01b0316610c8a565b6107e590846112d1565b9250600083851015610805576107fb85856112e9565b9250839050610815565b61080f84866112e9565b92508490505b8015610838578061082b8464e8d4a5100061127d565b6108359190611300565b91505b5090919293565b6000546001600160a01b031633146108695760405162461bcd60e51b81526004016104ee9061129c565b61060a8282610ddb565b60408051808201909152600c81526b5a65726f206164647265737360a01b60208201526000906001600160a01b0385166108c05760405162461bcd60e51b81526004016104ee919061102a565b506001600160a01b0380851660009081526001602090815260408083209387168352929052205461050490859085906108fa9086906112e9565b6109d0565b6000610557338484610873565b6000610452338484610a92565b600354600554600754600654600061092f610da5565b90509091929394565b6000546001600160a01b031633146109625760405162461bcd60e51b81526004016104ee9061129c565b6001600160a01b0381166109c75760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016104ee565b6106e781610d55565b60408051808201909152600c81526b5a65726f206164647265737360a01b60208201526001600160a01b038416610a1a5760405162461bcd60e51b81526004016104ee919061102a565b5060408051808201909152600c81526b5a65726f206164647265737360a01b60208201526001600160a01b038316610a655760405162461bcd60e51b81526004016104ee919061102a565b506001600160a01b0392831660009081526001602090815260408083209490951682529290925291902055565b60408051808201909152600c81526b5a65726f206164647265737360a01b60208201526001600160a01b038416610adc5760405162461bcd60e51b81526004016104ee919061102a565b5060408051808201909152600c81526b5a65726f206164647265737360a01b60208201526001600160a01b038316610b275760405162461bcd60e51b81526004016104ee919061102a565b506001600160a01b0383166000908152600260205260408120549050818110156040518060400160405280600f81526020016e457863656564732062616c616e636560881b81525090610b8d5760405162461bcd60e51b81526004016104ee919061102a565b50610b9a84836000610e9d565b610ba683836001610e9d565b50505050565b60408051808201909152600c81526b5a65726f206164647265737360a01b60208201526000906001600160a01b038516610bf95760405162461bcd60e51b81526004016104ee919061102a565b506001600160a01b0380851660009081526001602090815260408083209387168352929052205461050490859085906108fa9086906112d1565b60408051808201909152600c81526b5a65726f206164647265737360a01b60208201526001600160a01b038316610c7d5760405162461bcd60e51b81526004016104ee919061102a565b5061060a82826001610e9d565b6001600160a01b038116600090815260086020908152604080832054600290925282205460075483929164e8d4a5100091610cc5919061127d565b610ccf9190611300565b610cd991906112e9565b9050600060055460045443610cee91906112e9565b610cf891906112e9565b6003546001600160a01b03861660009081526002602052604081205492935091610d2c8469021e19e0c9bab240000061127d565b610d36919061127d565b610d409190611300565b9050610d4c81846112d1565b95945050505050565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b60008060055460045443610db991906112e9565b610dc391906112e9565b905060006105578269021e19e0c9bab240000061127d565b60408051808201909152600c81526b5a65726f206164647265737360a01b60208201526001600160a01b038316610e255760405162461bcd60e51b81526004016104ee919061102a565b506001600160a01b0382166000908152600260205260408120549050818110156040518060400160405280600f81526020016e457863656564732062616c616e636560881b81525090610e8b5760405162461bcd60e51b81526004016104ee919061102a565b50610e9883836000610e9d565b505050565b610ea561064f565b6001600160a01b038316600090815260086020908152604080832054600290925282205460075464e8d4a5100091610edc9161127d565b610ee69190611300565b610ef091906112e9565b90508060066000828254610f0491906112e9565b90915550506001600160a01b03841660009081526008602052604081206001018054839290610f349084906112d1565b90915550508115610f8b576001600160a01b03841660009081526002602052604081208054859290610f679084906112d1565b925050819055508260036000828254610f8091906112d1565b90915550610fd29050565b6001600160a01b03841660009081526002602052604081208054859290610fb39084906112e9565b925050819055508260036000828254610fcc91906112e9565b90915550505b6001600160a01b03841660009081526002602052604090205460075464e8d4a5100091610ffe9161127d565b6110089190611300565b6001600160a01b03909416600090815260086020526040902093909355505050565b600060208083528351808285015260005b818110156110575785810183015185820160400152820161103b565b81811115611069576000604083870101525b50601f01601f1916929092016040019392505050565b80356001600160a01b038116811461109657600080fd5b919050565b600080604083850312156110ae57600080fd5b6110b78361107f565b946020939093013593505050565b6000806000606084860312156110da57600080fd5b6110e38461107f565b92506110f16020850161107f565b9150604084013590509250925092565b60006020828403121561111357600080fd5b6105578261107f565b6000806040838503121561112f57600080fd5b6111388361107f565b91506111466020840161107f565b90509250929050565b634e487b7160e01b600052601160045260246000fd5b600060ff821660ff84168060ff038211156111825761118261114f565b019392505050565b600181815b808511156111c55781600019048211156111ab576111ab61114f565b808516156111b857918102915b93841c939080029061118f565b509250929050565b6000826111dc57506001610456565b816111e957506000610456565b81600181146111ff576002811461120957611225565b6001915050610456565b60ff84111561121a5761121a61114f565b50506001821b610456565b5060208310610133831016604e8410600b8410161715611248575081810a610456565b611252838361118a565b80600019048211156112665761126661114f565b029392505050565b600061055760ff8416836111cd565b60008160001904831182151516156112975761129761114f565b500290565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b600082198211156112e4576112e461114f565b500190565b6000828210156112fb576112fb61114f565b500390565b60008261131d57634e487b7160e01b600052601260045260246000fd5b50049056fea26469706673582212205c8f08c662a857f7e12c1f9867b27bd2a1afc200f231b4b6d7191ec292d25e4264736f6c634300080e0033";

export class SimpleSharedLinearReward__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    _analyticMath: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<SimpleSharedLinearReward> {
    return super.deploy(
      _analyticMath,
      overrides || {}
    ) as Promise<SimpleSharedLinearReward>;
  }
  getDeployTransaction(
    _analyticMath: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_analyticMath, overrides || {});
  }
  attach(address: string): SimpleSharedLinearReward {
    return super.attach(address) as SimpleSharedLinearReward;
  }
  connect(signer: Signer): SimpleSharedLinearReward__factory {
    return super.connect(signer) as SimpleSharedLinearReward__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SimpleSharedLinearRewardInterface {
    return new utils.Interface(_abi) as SimpleSharedLinearRewardInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SimpleSharedLinearReward {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as SimpleSharedLinearReward;
  }
}
