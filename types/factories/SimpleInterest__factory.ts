/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  SimpleInterest,
  SimpleInterestInterface,
} from "../SimpleInterest";

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
  "0x60806040523480156200001157600080fd5b50604051620019e7380380620019e783398101604081905262000034916200042e565b6200003f33620000fb565b600c80546001600160a01b0383166001600160a01b031991821617909155436004556009805482167370997970c51812dc3a010c7d01b50e0d17dc79c8179055600a80548216733c44cdddb6a900fa2b585dd299e03d12fa4293bc179055600b80549091167390f79bf6eb2c4f870365e785982e1f101e93b906179055620000f4620000d36000546001600160a01b031690565b620000e16012600862000476565b620000ee90600a6200059d565b6200014b565b5062000680565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b60408051808201909152600c81526b5a65726f206164647265737360a01b60208201526001600160a01b038316620001a15760405162461bcd60e51b8152600401620001989190620005ae565b60405180910390fd5b50620001b082826001620001b4565b5050565b620001be620002f1565b6000620001cb846200038c565b905080156200021d578060066000828254620001e8919062000606565b90915550506001600160a01b038416600090815260086020526040812080548392906200021790849062000620565b90915550505b6004546200022c904362000606565b6001600160a01b0385166000908152600860205260409020600101558115620002a0576001600160a01b038416600090815260026020526040812080548592906200027990849062000620565b92505081905550826003600082825462000294919062000620565b90915550620002eb9050565b6001600160a01b03841660009081526002602052604081208054859290620002ca90849062000606565b925050819055508260036000828254620002e5919062000606565b90915550505b50505050565b60006005546004544362000306919062000606565b62000312919062000606565b9050801562000389576000600a620f42408361058e6003546200033691906200063b565b6200034291906200063b565b6200034e91906200065d565b6200035a91906200065d565b9050806006600082825462000370919062000620565b909155505060045462000384904362000606565b600555505b50565b6001600160a01b038116600090815260086020526040812060010154600454829190620003ba904362000606565b620003c6919062000606565b9050801562000428576001600160a01b038316600090815260026020526040902054600a90620f4240908390620004019061058e906200063b565b6200040d91906200063b565b6200041991906200065d565b6200042591906200065d565b91505b50919050565b6000602082840312156200044157600080fd5b81516001600160a01b03811681146200045957600080fd5b9392505050565b634e487b7160e01b600052601160045260246000fd5b600060ff821660ff84168060ff0382111562000496576200049662000460565b019392505050565b600181815b80851115620004df578160001904821115620004c357620004c362000460565b80851615620004d157918102915b93841c9390800290620004a3565b509250929050565b600082620004f85750600162000597565b81620005075750600062000597565b81600181146200052057600281146200052b576200054b565b600191505062000597565b60ff8411156200053f576200053f62000460565b50506001821b62000597565b5060208310610133831016604e8410600b841016171562000570575081810a62000597565b6200057c83836200049e565b806000190482111562000593576200059362000460565b0290505b92915050565b60006200045960ff841683620004e7565b600060208083528351808285015260005b81811015620005dd57858101830151858201604001528201620005bf565b81811115620005f0576000604083870101525b50601f01601f1916929092016040019392505050565b6000828210156200061b576200061b62000460565b500390565b6000821982111562000636576200063662000460565b500190565b600081600019048311821515161562000658576200065862000460565b500290565b6000826200067b57634e487b7160e01b600052601260045260246000fd5b500490565b61135780620006906000396000f3fe608060405234801561001057600080fd5b50600436106101c45760003560e01c806370a08231116100f9578063a457c2d711610097578063d1daefb411610071578063d1daefb4146103d0578063db1d0fd5146103d9578063dd62ed3e146103e1578063f2fde38b1461041a57600080fd5b8063a457c2d71461037a578063a9059cbb1461038d578063bdfeb1e5146103a057600080fd5b80638da5cb5b116100d35780638da5cb5b1461031957806395d89b41146103345780639dc29fac14610354578063a150da2a1461036757600080fd5b806370a08231146102f6578063715018a614610309578063739572891461031157600080fd5b806332cb6b0c11610166578063416ae76811610140578063416ae768146102aa57806357627e93146102dd57806366666aa9146102e55780636863909e146102ee57600080fd5b806332cb6b0c1461027a578063395093511461028257806340c10f191461029557600080fd5b806323b872dd116101a257806323b872dd1461023e5780632e0f2625146102515780632ff2e9dc1461026b578063313ce5671461027357600080fd5b806306fdde03146101c9578063095ea7b31461020557806318160ddd14610228575b600080fd5b60408051808201909152600e81526d14da5b5c1b19525b9d195c995cdd60921b60208201525b6040516101fc9190611029565b60405180910390f35b61021861021336600461109a565b61042d565b60405190151581526020016101fc565b610230610444565b6040519081526020016101fc565b61021861024c3660046110c4565b610454565b610259601281565b60405160ff90911681526020016101fc565b6102306104f6565b6012610259565b610230610510565b61021861029036600461109a565b610532565b6102a86102a336600461109a565b610546565b005b6102bd6102b8366004611100565b6105f6565b6040805194855260208501939093529183015260608201526080016101fc565b610230601e81565b61023060065481565b6102a861062f565b610230610304366004611100565b6106b9565b6102a86106d7565b6102bd61070d565b6000546040516001600160a01b0390911681526020016101fc565b6040805180820190915260048152635345525760e01b60208201526101ef565b6102a861036236600461109a565b61083a565b6102186103753660046110c4565b61086e565b61021861038836600461109a565b6108fa565b61021861039b36600461109a565b610907565b6103a8610914565b604080519586526020860194909452928401919091526060830152608082015260a0016101fc565b61023060075481565b610230600c81565b6102306103ef36600461111b565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6102a8610428366004611100565b610932565b600061043a3384846109ca565b5060015b92915050565b600061044f60035490565b905090565b60006001600160a01b03841633146104e1576001600160a01b0384166000908152600160209081526040808320338452909152902054828110156104df5760405162461bcd60e51b815260206004820152601a60248201527f5472616e73666572206578636565647320616c6c6f77616e636500000000000060448201526064015b60405180910390fd5b505b6104ec848484610a8c565b5060019392505050565b61050260126008611164565b61050d90600a61126d565b81565b61051c60126008611164565b61052790600a61126d565b61050d90600a61127c565b600061053f338484610ba6565b9392505050565b6000546001600160a01b031633146105705760405162461bcd60e51b81526004016104d69061129b565b61057c60126008611164565b61058790600a61126d565b61059290600a61127c565b8161059c60035490565b6105a691906112d0565b11156105e85760405162461bcd60e51b8152602060048201526011602482015270457863656564204d617820537570706c7960781b60448201526064016104d6565b6105f28282610c2d565b5050565b6001600160a01b038116600090815260026020908152604080832054600890925282205490918061062685610c84565b90509193509193565b60006005546004544361064291906112e8565b61064c91906112e8565b905080156106b6576000600a620f42408361058e60035461066d919061127c565b610677919061127c565b61068191906112ff565b61068b91906112ff565b9050806006600082825461069f91906112d0565b90915550506004546106b190436112e8565b600555505b50565b6001600160a01b03811660009081526002602052604081205461043e565b6000546001600160a01b031633146107015760405162461bcd60e51b81526004016104d69061129b565b61070b6000610d19565b565b60008060008061071b610d69565b93506107376107326000546001600160a01b031690565b610c84565b61074190846112d0565b600954909350610759906001600160a01b0316610c84565b61076390846112d0565b600a5490935061077b906001600160a01b0316610c84565b61078590846112d0565b600b5490935061079d906001600160a01b0316610c84565b6107a790846112d0565b92506000838510156107c7576107bd85856112e8565b92508390506107d7565b6107d184866112e8565b92508490505b801561080357806107f28469d3c21bcecceda100000061127c565b6107fc91906112ff565b9150610833565b6108336040518060400160405280600f81526020016e070656e6469675f6d6178203d3d203608c1b815250610dd8565b5090919293565b6000546001600160a01b031633146108645760405162461bcd60e51b81526004016104d69061129b565b6105f28282610e1b565b60408051808201909152600c81526b5a65726f206164647265737360a01b60208201526000906001600160a01b0385166108bb5760405162461bcd60e51b81526004016104d69190611029565b506001600160a01b038085166000908152600160209081526040808320938716835292905220546104ec90859085906108f59086906112e8565b6109ca565b600061053f33848461086e565b600061043a338484610a8c565b60035460055460065460009081610929610d69565b90509091929394565b6000546001600160a01b0316331461095c5760405162461bcd60e51b81526004016104d69061129b565b6001600160a01b0381166109c15760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016104d6565b6106b681610d19565b60408051808201909152600c81526b5a65726f206164647265737360a01b60208201526001600160a01b038416610a145760405162461bcd60e51b81526004016104d69190611029565b5060408051808201909152600c81526b5a65726f206164647265737360a01b60208201526001600160a01b038316610a5f5760405162461bcd60e51b81526004016104d69190611029565b506001600160a01b0392831660009081526001602090815260408083209490951682529290925291902055565b60408051808201909152600c81526b5a65726f206164647265737360a01b60208201526001600160a01b038416610ad65760405162461bcd60e51b81526004016104d69190611029565b5060408051808201909152600c81526b5a65726f206164647265737360a01b60208201526001600160a01b038316610b215760405162461bcd60e51b81526004016104d69190611029565b506001600160a01b0383166000908152600260205260408120549050818110156040518060400160405280600f81526020016e457863656564732062616c616e636560881b81525090610b875760405162461bcd60e51b81526004016104d69190611029565b50610b9484836000610edd565b610ba083836001610edd565b50505050565b60408051808201909152600c81526b5a65726f206164647265737360a01b60208201526000906001600160a01b038516610bf35760405162461bcd60e51b81526004016104d69190611029565b506001600160a01b038085166000908152600160209081526040808320938716835292905220546104ec90859085906108f59086906112d0565b60408051808201909152600c81526b5a65726f206164647265737360a01b60208201526001600160a01b038316610c775760405162461bcd60e51b81526004016104d69190611029565b506105f282826001610edd565b6001600160a01b038116600090815260086020526040812060010154600454829190610cb090436112e8565b610cba91906112e8565b90508015610d13576001600160a01b038316600090815260026020526040902054600a90620f4240908390610cf29061058e9061127c565b610cfc919061127c565b610d0691906112ff565b610d1091906112ff565b91505b50919050565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b60065460055460045460009190610d8090436112e8565b610d8a91906112e8565b90508015610dd457600a620f42408261058e600354610da9919061127c565b610db3919061127c565b610dbd91906112ff565b610dc791906112ff565b610dd190836112d0565b91505b5090565b6106b681604051602401610dec9190611029565b60408051601f198184030181529190526020810180516001600160e01b031663104c13eb60e21b179052611004565b60408051808201909152600c81526b5a65726f206164647265737360a01b60208201526001600160a01b038316610e655760405162461bcd60e51b81526004016104d69190611029565b506001600160a01b0382166000908152600260205260408120549050818110156040518060400160405280600f81526020016e457863656564732062616c616e636560881b81525090610ecb5760405162461bcd60e51b81526004016104d69190611029565b50610ed883836000610edd565b505050565b610ee561062f565b6000610ef084610c84565b90508015610f3d578060066000828254610f0a91906112e8565b90915550506001600160a01b03841660009081526008602052604081208054839290610f379084906112d0565b90915550505b600454610f4a90436112e8565b6001600160a01b0385166000908152600860205260409020600101558115610fb8576001600160a01b03841660009081526002602052604081208054859290610f949084906112d0565b925050819055508260036000828254610fad91906112d0565b90915550610ba09050565b6001600160a01b03841660009081526002602052604081208054859290610fe09084906112e8565b925050819055508260036000828254610ff991906112e8565b909155505050505050565b6106b68160006a636f6e736f6c652e6c6f679050600080835160208501845afa505050565b600060208083528351808285015260005b818110156110565785810183015185820160400152820161103a565b81811115611068576000604083870101525b50601f01601f1916929092016040019392505050565b80356001600160a01b038116811461109557600080fd5b919050565b600080604083850312156110ad57600080fd5b6110b68361107e565b946020939093013593505050565b6000806000606084860312156110d957600080fd5b6110e28461107e565b92506110f06020850161107e565b9150604084013590509250925092565b60006020828403121561111257600080fd5b61053f8261107e565b6000806040838503121561112e57600080fd5b6111378361107e565b91506111456020840161107e565b90509250929050565b634e487b7160e01b600052601160045260246000fd5b600060ff821660ff84168060ff038211156111815761118161114e565b019392505050565b600181815b808511156111c45781600019048211156111aa576111aa61114e565b808516156111b757918102915b93841c939080029061118e565b509250929050565b6000826111db5750600161043e565b816111e85750600061043e565b81600181146111fe576002811461120857611224565b600191505061043e565b60ff8411156112195761121961114e565b50506001821b61043e565b5060208310610133831016604e8410600b8410161715611247575081810a61043e565b6112518383611189565b80600019048211156112655761126561114e565b029392505050565b600061053f60ff8416836111cc565b60008160001904831182151516156112965761129661114e565b500290565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b600082198211156112e3576112e361114e565b500190565b6000828210156112fa576112fa61114e565b500390565b60008261131c57634e487b7160e01b600052601260045260246000fd5b50049056fea26469706673582212202f0419b3f15119113049d872a377a8a607848cf574e5e779f312964cfc2ab98764736f6c634300080e0033";

export class SimpleInterest__factory extends ContractFactory {
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
  ): Promise<SimpleInterest> {
    return super.deploy(
      _analyticMath,
      overrides || {}
    ) as Promise<SimpleInterest>;
  }
  getDeployTransaction(
    _analyticMath: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_analyticMath, overrides || {});
  }
  attach(address: string): SimpleInterest {
    return super.attach(address) as SimpleInterest;
  }
  connect(signer: Signer): SimpleInterest__factory {
    return super.connect(signer) as SimpleInterest__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SimpleInterestInterface {
    return new utils.Interface(_abi) as SimpleInterestInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SimpleInterest {
    return new Contract(address, _abi, signerOrProvider) as SimpleInterest;
  }
}
