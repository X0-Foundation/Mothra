/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { DistTypeF, DistTypeFInterface } from "../DistTypeF";

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
  "0x60806040523480156200001157600080fd5b5060405162002263380380620022638339810160408190526200003491620007a4565b6200003f33620000fb565b600c80546001600160a01b0383166001600160a01b031991821617909155436004556009805482167370997970c51812dc3a010c7d01b50e0d17dc79c8179055600a80548216733c44cdddb6a900fa2b585dd299e03d12fa4293bc179055600b80549091167390f79bf6eb2c4f870365e785982e1f101e93b906179055620000f4620000d36000546001600160a01b031690565b620000e160126006620007e5565b620000ee90600a6200090a565b6200014b565b5062000a28565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b60408051808201909152600c81526b5a65726f206164647265737360a01b60208201526001600160a01b038316620001a15760405162461bcd60e51b81526004016200019891906200091b565b60405180910390fd5b50620001b082826001620001b4565b5050565b620001be6200034e565b6001600160a01b038316600090815260086020908152604080832054600290925282205460075464e8d4a510009291620001f89162000973565b62000204919062000995565b620002109190620009c5565b90506200022660065482620004bb60201b60201c565b6006556001600160a01b0384166000908152600860205260408120600101805483929062000256908490620009e8565b90915550508115620002b3576001600160a01b038416600090815260026020526040812080548592906200028c908490620009e8565b925050819055508260036000828254620002a79190620009e8565b90915550620003049050565b6001600160a01b038416600090815260026020526040902054620002d89084620004bb565b6001600160a01b038516600090815260026020526040902055600354620003009084620004bb565b6003555b6001600160a01b0384166000908152600260205260409020546007546200032c919062000973565b6001600160a01b03909416600090815260086020526040902093909355505050565b60006004544362000360919062000995565b905060006005548262000374919062000995565b90508015620001b0576005829055600c5460009081906001600160a01b0316635aff34dc620003a9610309620186a062000995565b6040516001600160e01b031960e084901b1681526004810191909152620186a0602482015260448101869052601e60648201526084016040805180830381865afa158015620003fc573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000422919062000a03565b915091506000620004426003548484620004e460201b62000a641760201c565b60035462000451919062000995565b90508060066000828254620004679190620009e8565b925050819055506200048b64e8d4a510008484620005e160201b62000b3a1760201c565b6200049c9064e8d4a5100062000995565b60076000828254620004af9190620009e8565b90915550505050505050565b600081831115620004da57620004d2828462000995565b9050620004de565b5060005b92915050565b60008080620004f4868662000627565b91509150816000036200051e57838181620005135762000513620009af565b0492505050620005da565b83821015620005d5576000620005368787876200067b565b90506000806200054885858562000699565b91509150816000036200057557868181620005675762000567620009af565b0495505050505050620005da565b600087620005848282620006cf565b169050600062000596848484620006dd565b90506000620005b7838b81620005b057620005b0620009af565b0462000734565b9050620005c5828262000779565b98505050505050505050620005da565b600080fd5b9392505050565b600080620005f1858585620004e4565b90506000620006028686866200067b565b11156200061f576200061681600162000787565b915050620005da565b949350505050565b6000808062000637858562000795565b9050600062000647868662000779565b90508082106200065f57908190039250905062000674565b60016200066d8383620006cf565b0393509150505b9250929050565b600081806200068e576200068e620009af565b838509949350505050565b600080828410620006b15750839050818303620006c7565b6000198501620006c28585620006cf565b915091505b935093915050565b6000620005da828462000995565b6000806200070983620006f18382620006cf565b81620007015762000701620009af565b506000919050565b90508284816200071d576200071d620009af565b046200072a868362000779565b1795945050505050565b60006001815b6008811015620007725762000767826200076160026200075b838962000779565b620006cf565b62000779565b91506001016200073a565b5092915050565b6000620005da828462000973565b6000620005da8284620009e8565b60006000198284099392505050565b600060208284031215620007b757600080fd5b81516001600160a01b0381168114620005da57600080fd5b634e487b7160e01b600052601160045260246000fd5b600060ff821660ff84168060ff03821115620008055762000805620007cf565b019392505050565b600181815b808511156200084e578160001904821115620008325762000832620007cf565b808516156200084057918102915b93841c939080029062000812565b509250929050565b6000826200086757506001620004de565b816200087657506000620004de565b81600181146200088f57600281146200089a57620008ba565b6001915050620004de565b60ff841115620008ae57620008ae620007cf565b50506001821b620004de565b5060208310610133831016604e8410600b8410161715620008df575081810a620004de565b620008eb83836200080d565b8060001904821115620009025762000902620007cf565b029392505050565b6000620005da60ff84168362000856565b600060208083528351808285015260005b818110156200094a578581018301518582016040015282016200092c565b818111156200095d576000604083870101525b50601f01601f1916929092016040019392505050565b6000816000190483118215151615620009905762000990620007cf565b500290565b600082821015620009aa57620009aa620007cf565b500390565b634e487b7160e01b600052601260045260246000fd5b600082620009e357634e487b7160e01b600052601260045260246000fd5b500490565b60008219821115620009fe57620009fe620007cf565b500190565b6000806040838503121562000a1757600080fd5b505080516020909101519092909150565b61182b8062000a386000396000f3fe608060405234801561001057600080fd5b50600436106101c45760003560e01c806370a08231116100f9578063a457c2d711610097578063d1daefb411610071578063d1daefb4146103cb578063db1d0fd5146103d4578063dd62ed3e146103dc578063f2fde38b1461041557600080fd5b8063a457c2d714610375578063a9059cbb14610388578063bdfeb1e51461039b57600080fd5b80638da5cb5b116100d35780638da5cb5b1461031457806395d89b411461032f5780639dc29fac1461034f578063a150da2a1461036257600080fd5b806370a08231146102f1578063715018a614610304578063739572891461030c57600080fd5b806332cb6b0c11610166578063416ae76811610140578063416ae768146102a557806357627e93146102d857806366666aa9146102e05780636863909e146102e957600080fd5b806332cb6b0c14610275578063395093511461027d57806340c10f191461029057600080fd5b806323b872dd116101a257806323b872dd146102395780632e0f26251461024c5780632ff2e9dc14610266578063313ce5671461026e57600080fd5b806306fdde03146101c9578063095ea7b31461020057806318160ddd14610223575b600080fd5b6040805180820190915260098152682234b9ba2a3cb832a360b91b60208201525b6040516101f791906114c3565b60405180910390f35b61021361020e366004611534565b610428565b60405190151581526020016101f7565b61022b61043f565b6040519081526020016101f7565b61021361024736600461155e565b61044f565b610254601281565b60405160ff90911681526020016101f7565b61022b6104f2565b6012610254565b61022b61050c565b61021361028b366004611534565b61052e565b6102a361029e366004611534565b61053b565b005b6102b86102b336600461159a565b6105eb565b6040805194855260208501939093529183015260608201526080016101f7565b61022b601e81565b61022b60065481565b6102a361062c565b61022b6102ff36600461159a565b61076c565b6102a361078a565b6102b86107c0565b6000546040516001600160a01b0390911681526020016101f7565b6040805180820190915260048152632a2cafa360e11b60208201526101ea565b6102a361035d366004611534565b6108d0565b61021361037036600461155e565b610904565b610213610383366004611534565b610990565b610213610396366004611534565b61099d565b6103a36109aa565b604080519586526020860194909452928401919091526060830152608082015260a0016101f7565b61022b60075481565b61022b600c81565b61022b6103ea3660046115b5565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6102a361042336600461159a565b6109c9565b6000610435338484610b78565b5060015b92915050565b600061044a60035490565b905090565b60006001600160a01b03841633146104dc576001600160a01b0384166000908152600160209081526040808320338452909152902054828110156104da5760405162461bcd60e51b815260206004820152601a60248201527f5472616e73666572206578636565647320616c6c6f77616e636500000000000060448201526064015b60405180910390fd5b505b6104e7848484610c3a565b5060015b9392505050565b6104fe601260066115fe565b61050990600a611707565b81565b610518601260066115fe565b61052390600a611707565b61050990600a611716565b60006104eb338484610d54565b6000546001600160a01b031633146105655760405162461bcd60e51b81526004016104d190611735565b610571601260066115fe565b61057c90600a611707565b61058790600a611716565b8161059160035490565b61059b919061176a565b11156105dd5760405162461bcd60e51b8152602060048201526011602482015270457863656564204d617820537570706c7960781b60448201526064016104d1565b6105e78282610ddb565b5050565b6001600160a01b0381166000908152600260209081526040808320546008909252822060018101549054919290919061062385610e32565b90509193509193565b60006004544361063c9190611782565b905060006005548261064e9190611782565b905080156105e7576005829055600c5460009081906001600160a01b0316635aff34dc610680610309620186a0611782565b6040516001600160e01b031960e084901b1681526004810191909152620186a0602482015260448101869052601e60648201526084016040805180830381865afa1580156106d2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106f69190611799565b9150915060006107096003548484610a64565b6003546107169190611782565b9050806006600082825461072a919061176a565b90915550610740905064e8d4a510008484610b3a565b61074f9064e8d4a51000611782565b60076000828254610760919061176a565b90915550505050505050565b6001600160a01b038116600090815260026020526040812054610439565b6000546001600160a01b031633146107b45760405162461bcd60e51b81526004016104d190611735565b6107be6000610fd0565b565b6000806000806006546107d1611020565b6107db919061176a565b935060006107f96107f46000546001600160a01b031690565b610e32565b9050610805818561176a565b60095490945061081d906001600160a01b0316610e32565b9050610829818561176a565b600a54909450610841906001600160a01b0316610e32565b905061084d818561176a565b600b54909450610865906001600160a01b0316610e32565b9050610871818561176a565b93508385101561088c576108858585611782565b9250610899565b6108968486611782565b92505b84848110156108a55750835b80156108c857806108bb8564e8d4a51000611716565b6108c591906117d3565b92505b505090919293565b6000546001600160a01b031633146108fa5760405162461bcd60e51b81526004016104d190611735565b6105e7828261110b565b60408051808201909152600c81526b5a65726f206164647265737360a01b60208201526000906001600160a01b0385166109515760405162461bcd60e51b81526004016104d191906114c3565b506001600160a01b038085166000908152600160209081526040808320938716835292905220546104e7908590859061098b908690611782565b610b78565b60006104eb338484610904565b6000610435338484610c3a565b60035460055460075460065460006109c0611020565b90509091929394565b6000546001600160a01b031633146109f35760405162461bcd60e51b81526004016104d190611735565b6001600160a01b038116610a585760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016104d1565b610a6181610fd0565b50565b6000806000610a7386866111cd565b9150915081600003610a9857838181610a8e57610a8e6117bd565b04925050506104eb565b838210156101c4576000610aad87878761121a565b9050600080610abd858585611235565b9150915081600003610ae557868181610ad857610ad86117bd565b04955050505050506104eb565b600087610af360008a611266565b1690506000610b03848484611272565b90506000610b1f838b81610b1957610b196117bd565b046112bf565b9050610b2b82826112fc565b985050505050505050506104eb565b600080610b48858585610a64565b90506000610b5786868661121a565b1115610b7057610b68816001611308565b9150506104eb565b949350505050565b60408051808201909152600c81526b5a65726f206164647265737360a01b60208201526001600160a01b038416610bc25760405162461bcd60e51b81526004016104d191906114c3565b5060408051808201909152600c81526b5a65726f206164647265737360a01b60208201526001600160a01b038316610c0d5760405162461bcd60e51b81526004016104d191906114c3565b506001600160a01b0392831660009081526001602090815260408083209490951682529290925291902055565b60408051808201909152600c81526b5a65726f206164647265737360a01b60208201526001600160a01b038416610c845760405162461bcd60e51b81526004016104d191906114c3565b5060408051808201909152600c81526b5a65726f206164647265737360a01b60208201526001600160a01b038316610ccf5760405162461bcd60e51b81526004016104d191906114c3565b506001600160a01b0383166000908152600260205260408120549050818110156040518060400160405280600f81526020016e457863656564732062616c616e636560881b81525090610d355760405162461bcd60e51b81526004016104d191906114c3565b50610d4284836000611314565b610d4e83836001611314565b50505050565b60408051808201909152600c81526b5a65726f206164647265737360a01b60208201526000906001600160a01b038516610da15760405162461bcd60e51b81526004016104d191906114c3565b506001600160a01b038085166000908152600160209081526040808320938716835292905220546104e7908590859061098b90869061176a565b60408051808201909152600c81526b5a65726f206164647265737360a01b60208201526001600160a01b038316610e255760405162461bcd60e51b81526004016104d191906114c3565b506105e782826001611314565b6001600160a01b03811660009081526008602052604081205464e8d4a5100090811015610e7457506001600160a01b0382166000908152600860205260409020545b6001600160a01b038316600090815260086020908152604080832054600290925282205460075464e8d4a510009291610eac91611716565b610eb69190611782565b610ec091906117d3565b9050600060045443610ed29190611782565b9050600060055482610ee49190611782565b600c5490915060009081906001600160a01b0316635aff34dc610f0c610309620186a061176a565b6040516001600160e01b031960e084901b1681526004810191909152620186a0602482015260448101869052601e60648201526084016040805180830381865afa158015610f5e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f829190611799565b6001600160a01b038a1660009081526002602052604081205492945090925090610fad818585610b3a565b610fb79190611782565b9050610fc3818761176a565b9998505050505050505050565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b600080600454436110319190611782565b90506000600554826110439190611782565b600c5490915060009081906001600160a01b0316635aff34dc61106b610309620186a061176a565b6040516001600160e01b031960e084901b1681526004810191909152620186a0602482015260448101869052601e60648201526084016040805180830381865afa1580156110bd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110e19190611799565b9150915060006003546110f76003548585610a64565b6111019190611782565b9695505050505050565b60408051808201909152600c81526b5a65726f206164647265737360a01b60208201526001600160a01b0383166111555760405162461bcd60e51b81526004016104d191906114c3565b506001600160a01b0382166000908152600260205260408120549050818110156040518060400160405280600f81526020016e457863656564732062616c616e636560881b815250906111bb5760405162461bcd60e51b81526004016104d191906114c3565b506111c883836000611314565b505050565b60008060006111dc8585611490565b905060006111ea86866112fc565b9050808210611200579081900392509050611213565b600161120c8383611266565b0393509150505b9250929050565b6000818061122a5761122a6117bd565b838509949350505050565b60008082841061124b575083905081830361125e565b600185036112598585611266565b915091505b935093915050565b60006104eb8284611782565b60008061129983611284600086611266565b81611291576112916117bd565b506000919050565b90508284816112aa576112aa6117bd565b046112b586836112fc565b1795945050505050565b60006001815b60088110156112f5576112eb826112e660026112e186896112fc565b611266565b6112fc565b91506001016112c5565b5092915050565b60006104eb8284611716565b60006104eb828461176a565b61131c61062c565b6001600160a01b038316600090815260086020908152604080832054600290925282205460075464e8d4a51000929161135491611716565b61135e9190611782565b61136891906117d3565b90506113766006548261149f565b6006556001600160a01b038416600090815260086020526040812060010180548392906113a490849061176a565b909155505081156113fb576001600160a01b038416600090815260026020526040812080548592906113d790849061176a565b9250508190555082600360008282546113f0919061176a565b909155506114489050565b6001600160a01b03841660009081526002602052604090205461141e908461149f565b6001600160a01b038516600090815260026020526040902055600354611444908461149f565b6003555b6001600160a01b03841660009081526002602052604090205460075461146e9190611716565b6001600160a01b03909416600090815260086020526040902093909355505050565b60006000198284099392505050565b6000818311156114ba576114b38284611782565b9050610439565b50600092915050565b600060208083528351808285015260005b818110156114f0578581018301518582016040015282016114d4565b81811115611502576000604083870101525b50601f01601f1916929092016040019392505050565b80356001600160a01b038116811461152f57600080fd5b919050565b6000806040838503121561154757600080fd5b61155083611518565b946020939093013593505050565b60008060006060848603121561157357600080fd5b61157c84611518565b925061158a60208501611518565b9150604084013590509250925092565b6000602082840312156115ac57600080fd5b6104eb82611518565b600080604083850312156115c857600080fd5b6115d183611518565b91506115df60208401611518565b90509250929050565b634e487b7160e01b600052601160045260246000fd5b600060ff821660ff84168060ff0382111561161b5761161b6115e8565b019392505050565b600181815b8085111561165e578160001904821115611644576116446115e8565b8085161561165157918102915b93841c9390800290611628565b509250929050565b60008261167557506001610439565b8161168257506000610439565b816001811461169857600281146116a2576116be565b6001915050610439565b60ff8411156116b3576116b36115e8565b50506001821b610439565b5060208310610133831016604e8410600b84101617156116e1575081810a610439565b6116eb8383611623565b80600019048211156116ff576116ff6115e8565b029392505050565b60006104eb60ff841683611666565b6000816000190483118215151615611730576117306115e8565b500290565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b6000821982111561177d5761177d6115e8565b500190565b600082821015611794576117946115e8565b500390565b600080604083850312156117ac57600080fd5b505080516020909101519092909150565b634e487b7160e01b600052601260045260246000fd5b6000826117f057634e487b7160e01b600052601260045260246000fd5b50049056fea2646970667358221220c4c5e2cb0ab7781be7fe1838e56d322046498cce7503e74fd4e96b03928d2d7164736f6c634300080e0033";

export class DistTypeF__factory extends ContractFactory {
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
  ): Promise<DistTypeF> {
    return super.deploy(_analyticMath, overrides || {}) as Promise<DistTypeF>;
  }
  getDeployTransaction(
    _analyticMath: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_analyticMath, overrides || {});
  }
  attach(address: string): DistTypeF {
    return super.attach(address) as DistTypeF;
  }
  connect(signer: Signer): DistTypeF__factory {
    return super.connect(signer) as DistTypeF__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DistTypeFInterface {
    return new utils.Interface(_abi) as DistTypeFInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DistTypeF {
    return new Contract(address, _abi, signerOrProvider) as DistTypeF;
  }
}