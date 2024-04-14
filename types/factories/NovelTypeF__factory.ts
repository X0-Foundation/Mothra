/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { NovelTypeF, NovelTypeFInterface } from "../NovelTypeF";

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
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200235638038062002356833981016040819052620000349162000911565b6200003f33620000fb565b600f80546001600160a01b0383166001600160a01b031991821617909155436004556009805482167370997970c51812dc3a010c7d01b50e0d17dc79c8179055600a80548216733c44cdddb6a900fa2b585dd299e03d12fa4293bc179055600b80549091167390f79bf6eb2c4f870365e785982e1f101e93b906179055620000f4620000d36000546001600160a01b031690565b620000e16012600662000952565b620000ee90600a62000a77565b6200014b565b5062000b95565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b60408051808201909152600c81526b5a65726f206164647265737360a01b60208201526001600160a01b038316620001a15760405162461bcd60e51b815260040162000198919062000a88565b60405180910390fd5b50620001b082826001620001b4565b5050565b600c546001600160a01b038416600090815260026020526040902054620001dc9190620004d1565b600c55600d546001600160a01b0384166000908152600860205260409020600101546200020a9190620004d1565b600d5560006200021a84620004fa565b9050801562000290576001600160a01b038416600090815260026020526040902054620002489082620004d1565b6001600160a01b038516600090815260026020526040902055600354620002709082620004d1565b60038190555080600e60008282546200028a919062000ae0565b90915550505b8115620002e8576001600160a01b03841660009081526002602052604081208054859290620002c190849062000ae0565b925050819055508260036000828254620002dc919062000ae0565b90915550620003399050565b6001600160a01b0384166000908152600260205260409020546200030d9084620004d1565b6001600160a01b038516600090815260026020526040902055600354620003359084620004d1565b6003555b6001600160a01b038416600090815260026020526040812054600c8054919290916200036790849062000ae0565b90915550506004546000906200037e904362000afb565b6001600160a01b03861660009081526008602052604081205491925090620003a7908362000afb565b600f5490915060009081906001600160a01b0316635aff34dc620186a0620003d26103098262000afb565b6040516001600160e01b031960e085901b1681526004810192909252602482015260448101869052601e60648201526084016040805180830381865afa15801562000421573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000447919062000b15565b9150915060006200048a600260008b6001600160a01b03166001600160a01b031681526020019081526020016000205484846200065660201b620008e21760201c565b905080600d6000828254620004a0919062000ae0565b90915550506001600160a01b0390981660009081526008602052604090206001810198909855505050909355505050565b600081831115620004f057620004e8828462000afb565b9050620004f4565b5060005b92915050565b600080600454436200050d919062000afb565b6001600160a01b0384166000908152600860205260408120549192509062000536908362000afb565b600f5490915060009081906001600160a01b0316635aff34dc62000560610309620186a062000afb565b6040516001600160e01b031960e084901b1681526004810191909152620186a0602482015260448101869052601e60648201526084016040805180830381865afa158015620005b3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620005d9919062000b15565b915091506000620005fc64e8d4a5100084846200065660201b620008e21760201c565b6200060d9064e8d4a5100062000afb565b6001600160a01b0388166000908152600260205260408120549192509064e8d4a51000906200063e90849062000b3a565b6200064a919062000b72565b98975050505050505050565b600080620006668585856200069e565b905060006200067786868662000794565b111562000694576200068b816001620007b2565b91505062000697565b90505b9392505050565b60008080620006ae8686620007c0565b9150915081600003620006d857838181620006cd57620006cd62000b5c565b049250505062000697565b838210156200078f576000620006f087878762000794565b90506000806200070285858562000814565b91509150816000036200072f5786818162000721576200072162000b5c565b049550505050505062000697565b6000876200073e82826200084a565b16905060006200075084848462000858565b9050600062000771838b816200076a576200076a62000b5c565b04620008af565b90506200077f8282620008f4565b9850505050505050505062000697565b600080fd5b60008180620007a757620007a762000b5c565b838509949350505050565b600062000697828462000ae0565b60008080620007d0858562000902565b90506000620007e08686620008f4565b9050808210620007f85790819003925090506200080d565b60016200080683836200084a565b0393509150505b9250929050565b6000808284106200082c575083905081830362000842565b60001985016200083d85856200084a565b915091505b935093915050565b600062000697828462000afb565b60008062000884836200086c83826200084a565b816200087c576200087c62000b5c565b506000919050565b905082848162000898576200089862000b5c565b04620008a58683620008f4565b1795945050505050565b60006001815b6008811015620008ed57620008e282620008dc6002620008d68389620008f4565b6200084a565b620008f4565b9150600101620008b5565b5092915050565b600062000697828462000b3a565b60006000198284099392505050565b6000602082840312156200092457600080fd5b81516001600160a01b03811681146200069757600080fd5b634e487b7160e01b600052601160045260246000fd5b600060ff821660ff84168060ff038211156200097257620009726200093c565b019392505050565b600181815b80851115620009bb5781600019048211156200099f576200099f6200093c565b80851615620009ad57918102915b93841c93908002906200097f565b509250929050565b600082620009d457506001620004f4565b81620009e357506000620004f4565b8160018114620009fc576002811462000a075762000a27565b6001915050620004f4565b60ff84111562000a1b5762000a1b6200093c565b50506001821b620004f4565b5060208310610133831016604e8410600b841016171562000a4c575081810a620004f4565b62000a5883836200097a565b806000190482111562000a6f5762000a6f6200093c565b029392505050565b60006200069760ff841683620009c3565b600060208083528351808285015260005b8181101562000ab75785810183015185820160400152820162000a99565b8181111562000aca576000604083870101525b50601f01601f1916929092016040019392505050565b6000821982111562000af65762000af66200093c565b500190565b60008282101562000b105762000b106200093c565b500390565b6000806040838503121562000b2957600080fd5b505080516020909101519092909150565b600081600019048311821515161562000b575762000b576200093c565b500290565b634e487b7160e01b600052601260045260246000fd5b60008262000b9057634e487b7160e01b600052601260045260246000fd5b500490565b6117b18062000ba56000396000f3fe608060405234801561001057600080fd5b50600436106101a95760003560e01c806370a08231116100f9578063a457c2d711610097578063d1daefb411610071578063d1daefb4146103a9578063db1d0fd5146103b2578063dd62ed3e146103ba578063f2fde38b146103f357600080fd5b8063a457c2d714610353578063a9059cbb14610366578063bdfeb1e51461037957600080fd5b80638da5cb5b116100d35780638da5cb5b146102f257806395d89b411461030d5780639dc29fac1461032d578063a150da2a1461034057600080fd5b806370a08231146102cf578063715018a6146102e257806373957289146102ea57600080fd5b8063313ce5671161016657806340c10f191161014057806340c10f1914610276578063416ae7681461028b57806357627e93146102be57806366666aa9146102c657600080fd5b8063313ce5671461025457806332cb6b0c1461025b578063395093511461026357600080fd5b806306fdde03146101ae578063095ea7b3146101e657806318160ddd1461020957806323b872dd1461021f5780632e0f2625146102325780632ff2e9dc1461024c575b600080fd5b60408051808201909152600a8152692737bb32b62a3cb832a360b11b60208201525b6040516101dd9190611449565b60405180910390f35b6101f96101f43660046114ba565b610406565b60405190151581526020016101dd565b61021161041d565b6040519081526020016101dd565b6101f961022d3660046114e4565b61042d565b61023a601281565b60405160ff90911681526020016101dd565b6102116104d0565b601261023a565b6102116104ea565b6101f96102713660046114ba565b61050c565b6102896102843660046114ba565b610519565b005b61029e610299366004611520565b6105c9565b6040805194855260208501939093529183015260608201526080016101dd565b610211601e81565b61021160065481565b6102116102dd366004611520565b6105f7565b610289610615565b61029e61064b565b6000546040516001600160a01b0390911681526020016101dd565b604080518082019091526004815263272a2fa360e11b60208201526101d0565b61028961033b3660046114ba565b61074e565b6101f961034e3660046114e4565b610782565b6101f96103613660046114ba565b61080e565b6101f96103743660046114ba565b61081b565b610381610828565b604080519586526020860194909452928401919091526060830152608082015260a0016101dd565b61021160075481565b610211600c81565b6102116103c836600461153b565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b610289610401366004611520565b610847565b6000610413338484610920565b5060015b92915050565b600061042860035490565b905090565b60006001600160a01b03841633146104ba576001600160a01b0384166000908152600160209081526040808320338452909152902054828110156104b85760405162461bcd60e51b815260206004820152601a60248201527f5472616e73666572206578636565647320616c6c6f77616e636500000000000060448201526064015b60405180910390fd5b505b6104c58484846109e2565b5060015b9392505050565b6104dc60126006611584565b6104e790600a61168d565b81565b6104f660126006611584565b61050190600a61168d565b6104e790600a61169c565b60006104c9338484610afc565b6000546001600160a01b031633146105435760405162461bcd60e51b81526004016104af906116bb565b61054f60126006611584565b61055a90600a61168d565b61056590600a61169c565b8161056f60035490565b61057991906116f0565b11156105bb5760405162461bcd60e51b8152602060048201526011602482015270457863656564204d617820537570706c7960781b60448201526064016104af565b6105c58282610b83565b5050565b6001600160a01b0381166000908152600260205260408120549080806105ee85610bda565b90509193509193565b6001600160a01b038116600090815260026020526040812054610417565b6000546001600160a01b0316331461063f5760405162461bcd60e51b81526004016104af906116bb565b6106496000610d1a565b565b600080600080610659610d6a565b935060006106776106726000546001600160a01b031690565b610bda565b905061068381856116f0565b60095490945061069b906001600160a01b0316610bda565b90506106a781856116f0565b600a549094506106bf906001600160a01b0316610bda565b90506106cb81856116f0565b600b549094506106e3906001600160a01b0316610bda565b90506106ef81856116f0565b93508385101561070a576107038585611708565b9250610717565b6107148486611708565b92505b84848110156107235750835b801561074657806107398564e8d4a5100061169c565b6107439190611735565b92505b505090919293565b6000546001600160a01b031633146107785760405162461bcd60e51b81526004016104af906116bb565b6105c58282610e56565b60408051808201909152600c81526b5a65726f206164647265737360a01b60208201526000906001600160a01b0385166107cf5760405162461bcd60e51b81526004016104af9190611449565b506001600160a01b038085166000908152600160209081526040808320938716835292905220546104c59085908590610809908690611708565b610920565b60006104c9338484610782565b60006104133384846109e2565b600354600554600754600654600061083e610d6a565b90509091929394565b6000546001600160a01b031633146108715760405162461bcd60e51b81526004016104af906116bb565b6001600160a01b0381166108d65760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016104af565b6108df81610d1a565b50565b6000806108f0858585610f18565b905060006108ff868686610fee565b111561091857610910816001611009565b9150506104c9565b949350505050565b60408051808201909152600c81526b5a65726f206164647265737360a01b60208201526001600160a01b03841661096a5760405162461bcd60e51b81526004016104af9190611449565b5060408051808201909152600c81526b5a65726f206164647265737360a01b60208201526001600160a01b0383166109b55760405162461bcd60e51b81526004016104af9190611449565b506001600160a01b0392831660009081526001602090815260408083209490951682529290925291902055565b60408051808201909152600c81526b5a65726f206164647265737360a01b60208201526001600160a01b038416610a2c5760405162461bcd60e51b81526004016104af9190611449565b5060408051808201909152600c81526b5a65726f206164647265737360a01b60208201526001600160a01b038316610a775760405162461bcd60e51b81526004016104af9190611449565b506001600160a01b0383166000908152600260205260408120549050818110156040518060400160405280600f81526020016e457863656564732062616c616e636560881b81525090610add5760405162461bcd60e51b81526004016104af9190611449565b50610aea84836000611015565b610af683836001611015565b50505050565b60408051808201909152600c81526b5a65726f206164647265737360a01b60208201526000906001600160a01b038516610b495760405162461bcd60e51b81526004016104af9190611449565b506001600160a01b038085166000908152600160209081526040808320938716835292905220546104c590859085906108099086906116f0565b60408051808201909152600c81526b5a65726f206164647265737360a01b60208201526001600160a01b038316610bcd5760405162461bcd60e51b81526004016104af9190611449565b506105c582826001611015565b60008060045443610beb9190611708565b6001600160a01b03841660009081526008602052604081205491925090610c129083611708565b600f5490915060009081906001600160a01b0316635aff34dc610c3a610309620186a0611708565b6040516001600160e01b031960e084901b1681526004810191909152620186a0602482015260448101869052601e60648201526084016040805180830381865afa158015610c8c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cb09190611757565b915091506000610cc664e8d4a5100084846108e2565b610cd59064e8d4a51000611708565b6001600160a01b0388166000908152600260205260408120549192509064e8d4a5100090610d0490849061169c565b610d0e9190611735565b98975050505050505050565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b60008060045443610d7b9190611708565b9050600060055482610d8d9190611708565b600f5490915060009081906001600160a01b0316635aff34dc610db5610309620186a0611708565b6040516001600160e01b031960e084901b1681526004810191909152620186a0602482015260448101869052601e60648201526084016040805180830381865afa158015610e07573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e2b9190611757565b915091506000610e3e600d5484846108e2565b9050610e4c600c54826112f6565b9550505050505090565b60408051808201909152600c81526b5a65726f206164647265737360a01b60208201526001600160a01b038316610ea05760405162461bcd60e51b81526004016104af9190611449565b506001600160a01b0382166000908152600260205260408120549050818110156040518060400160405280600f81526020016e457863656564732062616c616e636560881b81525090610f065760405162461bcd60e51b81526004016104af9190611449565b50610f1383836000611015565b505050565b6000806000610f27868661131a565b9150915081600003610f4c57838181610f4257610f4261171f565b04925050506104c9565b838210156101a9576000610f61878787610fee565b9050600080610f71858585611367565b9150915081600003610f9957868181610f8c57610f8c61171f565b04955050505050506104c9565b600087610fa760008a611398565b1690506000610fb78484846113a4565b90506000610fd3838b81610fcd57610fcd61171f565b046113f1565b9050610fdf828261142e565b985050505050505050506104c9565b60008180610ffe57610ffe61171f565b838509949350505050565b60006104c982846116f0565b600c546001600160a01b03841660009081526002602052604090205461103b91906112f6565b600c55600d546001600160a01b03841660009081526008602052604090206001015461106791906112f6565b600d55600061107584610bda565b905080156110e4576001600160a01b0384166000908152600260205260409020546110a090826112f6565b6001600160a01b0385166000908152600260205260409020556003546110c690826112f6565b60038190555080600e60008282546110de91906116f0565b90915550505b8115611136576001600160a01b038416600090815260026020526040812080548592906111129084906116f0565b92505081905550826003600082825461112b91906116f0565b909155506111839050565b6001600160a01b03841660009081526002602052604090205461115990846112f6565b6001600160a01b03851660009081526002602052604090205560035461117f90846112f6565b6003555b6001600160a01b038416600090815260026020526040812054600c8054919290916111af9084906116f0565b90915550506004546000906111c49043611708565b6001600160a01b038616600090815260086020526040812054919250906111eb9083611708565b600f5490915060009081906001600160a01b0316635aff34dc620186a061121461030982611708565b6040516001600160e01b031960e085901b1681526004810192909252602482015260448101869052601e60648201526084016040805180830381865afa158015611262573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112869190611757565b6001600160a01b038a16600090815260026020526040812054929450909250906112b19084846108e2565b905080600d60008282546112c591906116f0565b90915550506001600160a01b0390981660009081526008602052604090206001810198909855505050909355505050565b6000818311156113115761130a8284611708565b9050610417565b50600092915050565b6000806000611329858561143a565b90506000611337868661142e565b905080821061134d579081900392509050611360565b60016113598383611398565b0393509150505b9250929050565b60008082841061137d5750839050818303611390565b6001850361138b8585611398565b915091505b935093915050565b60006104c98284611708565b6000806113cb836113b6600086611398565b816113c3576113c361171f565b506000919050565b90508284816113dc576113dc61171f565b046113e7868361142e565b1795945050505050565b60006001815b60088110156114275761141d826114186002611413868961142e565b611398565b61142e565b91506001016113f7565b5092915050565b60006104c9828461169c565b60006000198284099392505050565b600060208083528351808285015260005b818110156114765785810183015185820160400152820161145a565b81811115611488576000604083870101525b50601f01601f1916929092016040019392505050565b80356001600160a01b03811681146114b557600080fd5b919050565b600080604083850312156114cd57600080fd5b6114d68361149e565b946020939093013593505050565b6000806000606084860312156114f957600080fd5b6115028461149e565b92506115106020850161149e565b9150604084013590509250925092565b60006020828403121561153257600080fd5b6104c98261149e565b6000806040838503121561154e57600080fd5b6115578361149e565b91506115656020840161149e565b90509250929050565b634e487b7160e01b600052601160045260246000fd5b600060ff821660ff84168060ff038211156115a1576115a161156e565b019392505050565b600181815b808511156115e45781600019048211156115ca576115ca61156e565b808516156115d757918102915b93841c93908002906115ae565b509250929050565b6000826115fb57506001610417565b8161160857506000610417565b816001811461161e576002811461162857611644565b6001915050610417565b60ff8411156116395761163961156e565b50506001821b610417565b5060208310610133831016604e8410600b8410161715611667575081810a610417565b61167183836115a9565b80600019048211156116855761168561156e565b029392505050565b60006104c960ff8416836115ec565b60008160001904831182151516156116b6576116b661156e565b500290565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b600082198211156117035761170361156e565b500190565b60008282101561171a5761171a61156e565b500390565b634e487b7160e01b600052601260045260246000fd5b60008261175257634e487b7160e01b600052601260045260246000fd5b500490565b6000806040838503121561176a57600080fd5b50508051602090910151909290915056fea2646970667358221220150910e8ecdbf24d97f9bdd037d3d39c6c0deeacad0740d3e816f31a8572ba7464736f6c634300080e0033";

export class NovelTypeF__factory extends ContractFactory {
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
  ): Promise<NovelTypeF> {
    return super.deploy(_analyticMath, overrides || {}) as Promise<NovelTypeF>;
  }
  getDeployTransaction(
    _analyticMath: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_analyticMath, overrides || {});
  }
  attach(address: string): NovelTypeF {
    return super.attach(address) as NovelTypeF;
  }
  connect(signer: Signer): NovelTypeF__factory {
    return super.connect(signer) as NovelTypeF__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): NovelTypeFInterface {
    return new utils.Interface(_abi) as NovelTypeFInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): NovelTypeF {
    return new Contract(address, _abi, signerOrProvider) as NovelTypeF;
  }
}