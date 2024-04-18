/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  SimpleExpRewardNovel,
  SimpleExpRewardNovelInterface,
} from "../SimpleExpRewardNovel";

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
    name: "getTotalState",
    outputs: [
      {
        internalType: "uint256",
        name: "totalSupply",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_latestNet",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_VIRTUAL",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "nowBlock",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_totalPendingReward",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_burnDone",
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
        name: "_VIRTUAL",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "nowBlock",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_userPendingReward",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_latestBlock",
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
  "0x60806040523480156200001157600080fd5b50604051620024853803806200248583398101604081905262000034916200093a565b6200003f33620000fb565b600d80546001600160a01b0383166001600160a01b031991821617909155436004556006805482167370997970c51812dc3a010c7d01b50e0d17dc79c8179055600780548216733c44cdddb6a900fa2b585dd299e03d12fa4293bc179055600880549091167390f79bf6eb2c4f870365e785982e1f101e93b906179055620000f4620000d36000546001600160a01b031690565b620000e1601260086200097b565b620000ee90600a62000aa0565b6200014b565b5062000b9b565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b60408051808201909152600c81526b5a65726f206164647265737360a01b60208201526001600160a01b038316620001a15760405162461bcd60e51b815260040162000198919062000ab1565b60405180910390fd5b50620001b082826001620001b4565b5050565b6001600160a01b0383166000908152600260205260408120546009805491929091620001e290849062000b09565b9091555050600c5460045460009190620001fd904362000b09565b62000209919062000b09565b600d5490915060009081906001600160a01b0316635aff34dc62000233610309620186a062000b23565b6040516001600160e01b031960e084901b1681526004810191909152620186a0602482015260448101869052600a60648201526084016040805180830381865afa15801562000286573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620002ac919062000b3e565b6001600160a01b03881660009081526005602052604090206001015460045492945090925090620002de904362000b09565b620002ea919062000b09565b600d5490935060009081906001600160a01b0316635aff34dc62000314610309620186a062000b23565b6040516001600160e01b031960e084901b1681526004810191909152620186a0602482015260448101889052600a60648201526084016040805180830381865afa15801562000367573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200038d919062000b3e565b91509150620003ce600260008a6001600160a01b03166001600160a01b031681526020019081526020016000205483836200059560201b620009971760201c565b620003e8600a5486866200059560201b620009971760201c565b620003f4919062000b09565b600a5560045462000406904362000b09565b600c5550600093506200041e92508691505062000692565b9050801562000472576001600160a01b038416600090815260056020526040812080548392906200045190849062000b23565b9250508190555080600b60008282546200046c919062000b23565b90915550505b60045462000481904362000b09565b6001600160a01b0385166000908152600560205260409020600101558115620004f5576001600160a01b03841660009081526002602052604081208054859290620004ce90849062000b23565b925050819055508260036000828254620004e9919062000b23565b90915550620005409050565b6001600160a01b038416600090815260026020526040812080548592906200051f90849062000b09565b9250508190555082600360008282546200053a919062000b09565b90915550505b6001600160a01b03841660009081526002602052604081205460098054919283926200056e90849062000b23565b9250508190555080600a600082825462000589919062000b23565b90915550505050505050565b60008080620005a58686620007c2565b9150915081600003620005cf57838181620005c457620005c462000b63565b04925050506200068b565b8382101562000686576000620005e787878762000816565b9050600080620005f985858562000834565b9150915081600003620006265786818162000618576200061862000b63565b04955050505050506200068b565b6000876200063582826200086a565b16905060006200064784848462000881565b9050600062000668838b8162000661576200066162000b63565b04620008d8565b90506200067682826200091d565b985050505050505050506200068b565b600080fd5b9392505050565b6001600160a01b038116600090815260056020526040812060010154600454829190620006c0904362000b09565b620006cc919062000b09565b600d5490915060009081906001600160a01b0316635aff34dc620006f6610309620186a062000b23565b6040516001600160e01b031960e084901b1681526004810191909152620186a0602482015260448101869052600a60648201526084016040805180830381865afa15801562000749573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200076f919062000b3e565b6001600160a01b03871660009081526002602090815260408220549395509193509190620007ac908290869086906200099762000595821b17901c565b620007b8919062000b09565b9695505050505050565b60008080620007d285856200092b565b90506000620007e286866200091d565b9050808210620007fa5790819003925090506200080f565b60016200080883836200086a565b0393509150505b9250929050565b6000818062000829576200082962000b63565b838509949350505050565b6000808284106200084c575083905081830362000862565b60001985016200085d85856200086a565b915091505b935093915050565b600062000878828462000b09565b90505b92915050565b600080620008ad836200089583826200086a565b81620008a557620008a562000b63565b506000919050565b9050828481620008c157620008c162000b63565b04620008ce86836200091d565b1795945050505050565b60006001815b600881101562000916576200090b82620009056002620008ff83896200091d565b6200086a565b6200091d565b9150600101620008de565b5092915050565b600062000878828462000b79565b60006000198284099392505050565b6000602082840312156200094d57600080fd5b81516001600160a01b03811681146200068b57600080fd5b634e487b7160e01b600052601160045260246000fd5b600060ff821660ff84168060ff038211156200099b576200099b62000965565b019392505050565b600181815b80851115620009e4578160001904821115620009c857620009c862000965565b80851615620009d657918102915b93841c9390800290620009a8565b509250929050565b600082620009fd575060016200087b565b8162000a0c575060006200087b565b816001811462000a25576002811462000a305762000a50565b60019150506200087b565b60ff84111562000a445762000a4462000965565b50506001821b6200087b565b5060208310610133831016604e8410600b841016171562000a75575081810a6200087b565b62000a818383620009a3565b806000190482111562000a985762000a9862000965565b029392505050565b60006200087860ff841683620009ec565b600060208083528351808285015260005b8181101562000ae05785810183015185820160400152820162000ac2565b8181111562000af3576000604083870101525b50601f01601f1916929092016040019392505050565b60008282101562000b1e5762000b1e62000965565b500390565b6000821982111562000b395762000b3962000965565b500190565b6000806040838503121562000b5257600080fd5b505080516020909101519092909150565b634e487b7160e01b600052601260045260246000fd5b600081600019048311821515161562000b965762000b9662000965565b500290565b6118da8062000bab6000396000f3fe608060405234801561001057600080fd5b506004361061014d5760003560e01c806370a08231116100c3578063a150da2a1161007c578063a150da2a14610306578063a457c2d714610319578063a9059cbb1461032c578063bdfeb1e51461033f578063dd62ed3e14610374578063f2fde38b146103ad57600080fd5b806370a0823114610274578063715018a614610287578063739572891461028f5780638da5cb5b146102b757806395d89b41146102d25780639dc29fac146102f357600080fd5b80632ff2e9dc116101155780632ff2e9dc146101fa578063313ce5671461020257806332cb6b0c14610209578063395093511461021157806340c10f1914610224578063416ae7681461023957600080fd5b806306fdde0314610152578063095ea7b31461019457806318160ddd146101b757806323b872dd146101cd5780632e0f2625146101e0575b600080fd5b60408051808201909152601481527314da5b5c1b19515e1c14995dd85c99139bdd995b60621b60208201525b60405161018b9190611572565b60405180910390f35b6101a76101a23660046115e3565b6103c0565b604051901515815260200161018b565b6101bf6103d7565b60405190815260200161018b565b6101a76101db36600461160d565b6103e7565b6101e8601281565b60405160ff909116815260200161018b565b6101bf61048a565b60126101e8565b6101bf6104a4565b6101a761021f3660046115e3565b6104c7565b6102376102323660046115e3565b6104d4565b005b61024c610247366004611649565b610585565b604080519586526020860194909452928401919091526060830152608082015260a00161018b565b6101bf610282366004611649565b6105e9565b610237610607565b61029761063d565b60408051948552602085019390935291830152606082015260800161018b565b6000546040516001600160a01b03909116815260200161018b565b60408051808201909152600581526429a2a92ba760d91b602082015261017e565b6102376103013660046115e3565b6107ec565b6101a761031436600461160d565b610820565b6101a76103273660046115e3565b6108ac565b6101a761033a3660046115e3565b6108b9565b6103476108c6565b604080519687526020870195909552938501929092526060840152608083015260a082015260c00161018b565b6101bf610382366004611664565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6102376103bb366004611649565b6108fc565b60006103cd338484610a6d565b5060015b92915050565b60006103e260035490565b905090565b60006001600160a01b0384163314610474576001600160a01b0384166000908152600160209081526040808320338452909152902054828110156104725760405162461bcd60e51b815260206004820152601a60248201527f5472616e73666572206578636565647320616c6c6f77616e636500000000000060448201526064015b60405180910390fd5b505b61047f848484610b2f565b5060015b9392505050565b610496601260086116ad565b6104a190600a6117b6565b81565b6104b0601260086116ad565b6104bb90600a6117b6565b6104a1906103e86117c5565b6000610483338484610c49565b6000546001600160a01b031633146104fe5760405162461bcd60e51b8152600401610469906117e4565b61050a601260086116ad565b61051590600a6117b6565b610521906103e86117c5565b8161052b60035490565b6105359190611819565b11156105775760405162461bcd60e51b8152602060048201526011602482015270457863656564204d617820537570706c7960781b6044820152606401610469565b6105818282610cd0565b5050565b6001600160a01b0381166000908152600260205260408120546004549091908190819081906105b49043611831565b92506105bf86610d27565b6001600160a01b039096166000908152600560205260409020600101549496939592949293915050565b6001600160a01b0381166000908152600260205260408120546103d1565b6000546001600160a01b031633146106315760405162461bcd60e51b8152600401610469906117e4565b61063b6000610e3a565b565b60008060008061064b610e8a565b93506106676106626000546001600160a01b031690565b610d27565b6106719084611819565b600654909350610689906001600160a01b0316610d27565b6106939084611819565b6007549093506106ab906001600160a01b0316610d27565b6106b59084611819565b6008549093506106cd906001600160a01b0316610d27565b6106d79084611819565b9250600083851015610735576106ed8585611831565b92508390506107306040518060400160405280601a81526020017f636865636b202d2d2d206d617267696e616c2067726561746572000000000000815250610f6c565b6107bd565b61073f8486611831565b92508490508385111561078a576107306040518060400160405280601c81526020017f636865636b202d2d2d20636f6c6c656374697665206772656174657200000000815250610f6c565b6107bd6040518060400160405280601281526020017118da1958dac80b4b4b4818985b185b98d95960721b815250610f6c565b80156107e557806107d88469d3c21bcecceda10000006117c5565b6107e2919061185e565b91505b5090919293565b6000546001600160a01b031633146108165760405162461bcd60e51b8152600401610469906117e4565b6105818282610faf565b60408051808201909152600c81526b5a65726f206164647265737360a01b60208201526000906001600160a01b03851661086d5760405162461bcd60e51b81526004016104699190611572565b506001600160a01b0380851660009081526001602090815260408083209387168352929052205461047f90859085906108a7908690611831565b610a6d565b6000610483338484610820565b60006103cd338484610b2f565b600354600954600a54600454600090819081906108e39043611831565b92506108ed610e8a565b9150600b549050909192939495565b6000546001600160a01b031633146109265760405162461bcd60e51b8152600401610469906117e4565b6001600160a01b03811661098b5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610469565b61099481610e3a565b50565b60008060006109a68686611071565b91509150816000036109cb578381816109c1576109c1611848565b0492505050610483565b8382101561014d5760006109e08787876110be565b90506000806109f08585856110d9565b9150915081600003610a1857868181610a0b57610a0b611848565b0495505050505050610483565b600087610a2660008a61110a565b1690506000610a36848484611116565b90506000610a52838b81610a4c57610a4c611848565b04611163565b9050610a5e82826111a0565b98505050505050505050610483565b60408051808201909152600c81526b5a65726f206164647265737360a01b60208201526001600160a01b038416610ab75760405162461bcd60e51b81526004016104699190611572565b5060408051808201909152600c81526b5a65726f206164647265737360a01b60208201526001600160a01b038316610b025760405162461bcd60e51b81526004016104699190611572565b506001600160a01b0392831660009081526001602090815260408083209490951682529290925291902055565b60408051808201909152600c81526b5a65726f206164647265737360a01b60208201526001600160a01b038416610b795760405162461bcd60e51b81526004016104699190611572565b5060408051808201909152600c81526b5a65726f206164647265737360a01b60208201526001600160a01b038316610bc45760405162461bcd60e51b81526004016104699190611572565b506001600160a01b0383166000908152600260205260408120549050818110156040518060400160405280600f81526020016e457863656564732062616c616e636560881b81525090610c2a5760405162461bcd60e51b81526004016104699190611572565b50610c37848360006111ac565b610c43838360016111ac565b50505050565b60408051808201909152600c81526b5a65726f206164647265737360a01b60208201526000906001600160a01b038516610c965760405162461bcd60e51b81526004016104699190611572565b506001600160a01b0380851660009081526001602090815260408083209387168352929052205461047f90859085906108a7908690611819565b60408051808201909152600c81526b5a65726f206164647265737360a01b60208201526001600160a01b038316610d1a5760405162461bcd60e51b81526004016104699190611572565b50610581828260016111ac565b6001600160a01b038116600090815260056020526040812060010154600454829190610d539043611831565b610d5d9190611831565b600d5490915060009081906001600160a01b0316635aff34dc610d85610309620186a0611819565b6040516001600160e01b031960e084901b1681526004810191909152620186a0602482015260448101869052600a60648201526084016040805180830381865afa158015610dd7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610dfb9190611880565b6001600160a01b03871660009081526002602052604081205492945090925090610e26818585610997565b610e309190611831565b9695505050505050565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b600080600c5460045443610e9e9190611831565b610ea89190611831565b600d5490915060009081906001600160a01b0316635aff34dc610ed0610309620186a0611819565b6040516001600160e01b031960e084901b1681526004810191909152620186a0602482015260448101869052600a60648201526084016040805180830381865afa158015610f22573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f469190611880565b91509150600954610f5a600a548484610997565b610f649190611831565b935050505090565b61099481604051602401610f809190611572565b60408051601f198184030181529190526020810180516001600160e01b031663104c13eb60e21b179052611539565b60408051808201909152600c81526b5a65726f206164647265737360a01b60208201526001600160a01b038316610ff95760405162461bcd60e51b81526004016104699190611572565b506001600160a01b0382166000908152600260205260408120549050818110156040518060400160405280600f81526020016e457863656564732062616c616e636560881b8152509061105f5760405162461bcd60e51b81526004016104699190611572565b5061106c838360006111ac565b505050565b60008060006110808585611542565b9050600061108e86866111a0565b90508082106110a45790819003925090506110b7565b60016110b0838361110a565b0393509150505b9250929050565b600081806110ce576110ce611848565b838509949350505050565b6000808284106110ef5750839050818303611102565b600185036110fd858561110a565b915091505b935093915050565b60006104838284611831565b60008061113d8361112860008661110a565b8161113557611135611848565b506000919050565b905082848161114e5761114e611848565b0461115986836111a0565b1795945050505050565b60006001815b60088110156111995761118f8261118a600261118586896111a0565b61110a565b6111a0565b9150600101611169565b5092915050565b600061048382846117c5565b6001600160a01b03831660009081526002602052604081205460098054919290916111d8908490611831565b9091555050600c54600454600091906111f19043611831565b6111fb9190611831565b600d5490915060009081906001600160a01b0316635aff34dc611223610309620186a0611819565b6040516001600160e01b031960e084901b1681526004810191909152620186a0602482015260448101869052600a60648201526084016040805180830381865afa158015611275573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112999190611880565b6001600160a01b038816600090815260056020526040902060010154600454929450909250906112c99043611831565b6112d39190611831565b600d5490935060009081906001600160a01b0316635aff34dc6112fb610309620186a0611819565b6040516001600160e01b031960e084901b1681526004810191909152620186a0602482015260448101889052600a60648201526084016040805180830381865afa15801561134d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113719190611880565b6001600160a01b038a16600090815260026020526040902054919350915061139a908383610997565b6113a7600a548686610997565b6113b19190611831565b600a556004546113c19043611831565b600c81905550505050505060006113d784610d27565b90508015611426576001600160a01b03841660009081526005602052604081208054839290611407908490611819565b9250508190555080600b60008282546114209190611819565b90915550505b6004546114339043611831565b6001600160a01b03851660009081526005602052604090206001015581156114a1576001600160a01b0384166000908152600260205260408120805485929061147d908490611819565b9250508190555082600360008282546114969190611819565b909155506114e89050565b6001600160a01b038416600090815260026020526040812080548592906114c9908490611831565b9250508190555082600360008282546114e29190611831565b90915550505b6001600160a01b0384166000908152600260205260408120546009805491928392611514908490611819565b9250508190555080600a600082825461152d9190611819565b90915550505050505050565b61099481611551565b60006000198284099392505050565b60006a636f6e736f6c652e6c6f679050600080835160208501845afa505050565b600060208083528351808285015260005b8181101561159f57858101830151858201604001528201611583565b818111156115b1576000604083870101525b50601f01601f1916929092016040019392505050565b80356001600160a01b03811681146115de57600080fd5b919050565b600080604083850312156115f657600080fd5b6115ff836115c7565b946020939093013593505050565b60008060006060848603121561162257600080fd5b61162b846115c7565b9250611639602085016115c7565b9150604084013590509250925092565b60006020828403121561165b57600080fd5b610483826115c7565b6000806040838503121561167757600080fd5b611680836115c7565b915061168e602084016115c7565b90509250929050565b634e487b7160e01b600052601160045260246000fd5b600060ff821660ff84168060ff038211156116ca576116ca611697565b019392505050565b600181815b8085111561170d5781600019048211156116f3576116f3611697565b8085161561170057918102915b93841c93908002906116d7565b509250929050565b600082611724575060016103d1565b81611731575060006103d1565b816001811461174757600281146117515761176d565b60019150506103d1565b60ff84111561176257611762611697565b50506001821b6103d1565b5060208310610133831016604e8410600b8410161715611790575081810a6103d1565b61179a83836116d2565b80600019048211156117ae576117ae611697565b029392505050565b600061048360ff841683611715565b60008160001904831182151516156117df576117df611697565b500290565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b6000821982111561182c5761182c611697565b500190565b60008282101561184357611843611697565b500390565b634e487b7160e01b600052601260045260246000fd5b60008261187b57634e487b7160e01b600052601260045260246000fd5b500490565b6000806040838503121561189357600080fd5b50508051602090910151909290915056fea264697066735822122079b68437c14e6e50706a77f99097fd906efb7851c78002df23abd712198d268a64736f6c634300080e0033";

export class SimpleExpRewardNovel__factory extends ContractFactory {
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
  ): Promise<SimpleExpRewardNovel> {
    return super.deploy(
      _analyticMath,
      overrides || {}
    ) as Promise<SimpleExpRewardNovel>;
  }
  getDeployTransaction(
    _analyticMath: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_analyticMath, overrides || {});
  }
  attach(address: string): SimpleExpRewardNovel {
    return super.attach(address) as SimpleExpRewardNovel;
  }
  connect(signer: Signer): SimpleExpRewardNovel__factory {
    return super.connect(signer) as SimpleExpRewardNovel__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SimpleExpRewardNovelInterface {
    return new utils.Interface(_abi) as SimpleExpRewardNovelInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SimpleExpRewardNovel {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as SimpleExpRewardNovel;
  }
}
