/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  CompoundExpRewardNovel,
  CompoundExpRewardNovelInterface,
} from "../CompoundExpRewardNovel";

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
  "0x60806040523480156200001157600080fd5b506040516200239938038062002399833981016040819052620000349162000989565b6200003f33620000fb565b600d80546001600160a01b0383166001600160a01b031991821617909155436004556006805482167370997970c51812dc3a010c7d01b50e0d17dc79c8179055600780548216733c44cdddb6a900fa2b585dd299e03d12fa4293bc179055600880549091167390f79bf6eb2c4f870365e785982e1f101e93b906179055620000f4620000d36000546001600160a01b031690565b620000e160126008620009ca565b620000ee90600a62000aef565b6200014b565b5062000bea565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b60408051808201909152600c81526b5a65726f206164647265737360a01b60208201526001600160a01b038316620001a15760405162461bcd60e51b815260040162000198919062000b00565b60405180910390fd5b50620001b082826001620001b4565b5050565b6001600160a01b0383166000908152600260205260408120546009805491929091620001e290849062000b58565b9091555050600c5460045460009190620001fd904362000b58565b62000209919062000b58565b600d5490915060009081906001600160a01b0316635aff34dc62000233610309620186a062000b72565b6040516001600160e01b031960e084901b1681526004810191909152620186a0602482015260448101869052600a60648201526084016040805180830381865afa15801562000286573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620002ac919062000b8d565b6001600160a01b03881660009081526005602052604090206001015460045492945090925090620002de904362000b58565b620002ea919062000b58565b600d5490935060009081906001600160a01b0316635aff34dc62000314610309620186a062000b72565b6040516001600160e01b031960e084901b1681526004810191909152620186a0602482015260448101889052600a60648201526084016040805180830381865afa15801562000367573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200038d919062000b8d565b91509150620003ce600260008a6001600160a01b03166001600160a01b031681526020019081526020016000205483836200059560201b620008561760201c565b620003e8600a5486866200059560201b620008561760201c565b620003f4919062000b58565b600a5560045462000406904362000b58565b600c5550600093506200041e925086915050620005dd565b9050801562000472576001600160a01b038416600090815260026020526040812080548392906200045190849062000b72565b9250508190555080600b60008282546200046c919062000b72565b90915550505b60045462000481904362000b58565b6001600160a01b0385166000908152600560205260409020600101558115620004f5576001600160a01b03841660009081526002602052604081208054859290620004ce90849062000b72565b925050819055508260036000828254620004e9919062000b72565b90915550620005409050565b6001600160a01b038416600090815260026020526040812080548592906200051f90849062000b58565b9250508190555082600360008282546200053a919062000b58565b90915550505b6001600160a01b03841660009081526002602052604081205460098054919283926200056e90849062000b72565b9250508190555080600a600082825462000589919062000b72565b90915550505050505050565b600080620005a58585856200070d565b90506000620005b686868662000803565b1115620005d357620005ca81600162000821565b915050620005d6565b90505b9392505050565b6001600160a01b0381166000908152600560205260408120600101546004548291906200060b904362000b58565b62000617919062000b58565b600d5490915060009081906001600160a01b0316635aff34dc62000641610309620186a062000b72565b6040516001600160e01b031960e084901b1681526004810191909152620186a0602482015260448101869052600a60648201526084016040805180830381865afa15801562000694573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620006ba919062000b8d565b6001600160a01b03871660009081526002602090815260408220549395509193509190620006f790829086908690620008946200070d821b17901c565b62000703919062000b58565b9695505050505050565b600080806200071d868662000838565b915091508160000362000747578381816200073c576200073c62000bb2565b0492505050620005d6565b83821015620007fe5760006200075f87878762000803565b9050600080620007718585856200088c565b91509150816000036200079e5786818162000790576200079062000bb2565b0495505050505050620005d6565b600087620007ad8282620008c2565b1690506000620007bf848484620008d0565b90506000620007e0838b81620007d957620007d962000bb2565b0462000927565b9050620007ee82826200096c565b98505050505050505050620005d6565b600080fd5b6000818062000816576200081662000bb2565b838509949350505050565b60006200082f828462000b72565b90505b92915050565b600080806200084885856200097a565b905060006200085886866200096c565b90508082106200087057908190039250905062000885565b60016200087e8383620008c2565b0393509150505b9250929050565b600080828410620008a45750839050818303620008ba565b6000198501620008b58585620008c2565b915091505b935093915050565b60006200082f828462000b58565b600080620008fc83620008e48382620008c2565b81620008f457620008f462000bb2565b506000919050565b905082848162000910576200091062000bb2565b046200091d86836200096c565b1795945050505050565b60006001815b600881101562000965576200095a826200095460026200094e83896200096c565b620008c2565b6200096c565b91506001016200092d565b5092915050565b60006200082f828462000bc8565b60006000198284099392505050565b6000602082840312156200099c57600080fd5b81516001600160a01b0381168114620005d657600080fd5b634e487b7160e01b600052601160045260246000fd5b600060ff821660ff84168060ff03821115620009ea57620009ea620009b4565b019392505050565b600181815b8085111562000a3357816000190482111562000a175762000a17620009b4565b8085161562000a2557918102915b93841c9390800290620009f7565b509250929050565b60008262000a4c5750600162000832565b8162000a5b5750600062000832565b816001811462000a74576002811462000a7f5762000a9f565b600191505062000832565b60ff84111562000a935762000a93620009b4565b50506001821b62000832565b5060208310610133831016604e8410600b841016171562000ac4575081810a62000832565b62000ad08383620009f2565b806000190482111562000ae75762000ae7620009b4565b029392505050565b60006200082f60ff84168362000a3b565b600060208083528351808285015260005b8181101562000b2f5785810183015185820160400152820162000b11565b8181111562000b42576000604083870101525b50601f01601f1916929092016040019392505050565b60008282101562000b6d5762000b6d620009b4565b500390565b6000821982111562000b885762000b88620009b4565b500190565b6000806040838503121562000ba157600080fd5b505080516020909101519092909150565b634e487b7160e01b600052601260045260246000fd5b600081600019048311821515161562000be55762000be5620009b4565b500290565b61179f8062000bfa6000396000f3fe608060405234801561001057600080fd5b506004361061014d5760003560e01c806370a08231116100c3578063a150da2a1161007c578063a150da2a14610308578063a457c2d71461031b578063a9059cbb1461032e578063bdfeb1e514610341578063dd62ed3e14610376578063f2fde38b146103af57600080fd5b806370a0823114610276578063715018a61461028957806373957289146102915780638da5cb5b146102b957806395d89b41146102d45780639dc29fac146102f557600080fd5b80632ff2e9dc116101155780632ff2e9dc146101fc578063313ce5671461020457806332cb6b0c1461020b578063395093511461021357806340c10f1914610226578063416ae7681461023b57600080fd5b806306fdde0314610152578063095ea7b31461019657806318160ddd146101b957806323b872dd146101cf5780632e0f2625146101e2575b600080fd5b60408051808201909152601681527510dbdb5c1bdd5b99115e1c14995dd85c99139bdd995b60521b60208201525b60405161018d9190611437565b60405180910390f35b6101a96101a43660046114a8565b6103c2565b604051901515815260200161018d565b6101c16103d9565b60405190815260200161018d565b6101a96101dd3660046114d2565b6103e8565b6101ea601281565b60405160ff909116815260200161018d565b6101c161048b565b60126101ea565b6101c16104a5565b6101a96102213660046114a8565b6104c8565b6102396102343660046114a8565b6104d5565b005b61024e61024936600461150e565b61050d565b604080519586526020860194909452928401919091526060830152608082015260a00161018d565b6101c161028436600461150e565b610571565b61023961057c565b6102996105b2565b60408051948552602085019390935291830152606082015260800161018d565b6000546040516001600160a01b03909116815260200161018d565b60408051808201909152600581526421a2a92ba760d91b6020820152610180565b6102396103033660046114a8565b6106ab565b6101a96103163660046114d2565b6106df565b6101a96103293660046114a8565b61076b565b6101a961033c3660046114a8565b610778565b610349610785565b604080519687526020870195909552938501929092526060840152608083015260a082015260c00161018d565b6101c1610384366004611529565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6102396103bd36600461150e565b6107bb565b60006103cf33848461096a565b5060015b92915050565b60006103e3610a2c565b905090565b60006001600160a01b0384163314610475576001600160a01b0384166000908152600160209081526040808320338452909152902054828110156104735760405162461bcd60e51b815260206004820152601a60248201527f5472616e73666572206578636565647320616c6c6f77616e636500000000000060448201526064015b60405180910390fd5b505b610480848484610a43565b5060015b9392505050565b61049760126008611572565b6104a290600a61167b565b81565b6104b160126008611572565b6104bc90600a61167b565b6104a2906103e861168a565b6000610484338484610b4f565b6000546001600160a01b031633146104ff5760405162461bcd60e51b815260040161046a906116a9565b6105098282610bd6565b5050565b6001600160a01b03811660009081526002602052604081205460045490919081908190819061053c90436116de565b925061054786610c2d565b6001600160a01b039096166000908152600560205260409020600101549496939592949293915050565b60006103d382610d40565b6000546001600160a01b031633146105a65760405162461bcd60e51b815260040161046a906116a9565b6105b06000610d6e565b565b6000806000806105c0610dbe565b93506105dc6105d76000546001600160a01b031690565b610c2d565b6105e690846116f5565b6006549093506105fe906001600160a01b0316610c2d565b61060890846116f5565b600754909350610620906001600160a01b0316610c2d565b61062a90846116f5565b600854909350610642906001600160a01b0316610c2d565b61064c90846116f5565b925060008385101561066c5761066285856116de565b925083905061067c565b61067684866116de565b92508490505b80156106a457806106978469d3c21bcecceda100000061168a565b6106a19190611723565b91505b5090919293565b6000546001600160a01b031633146106d55760405162461bcd60e51b815260040161046a906116a9565b6105098282610ea0565b60408051808201909152600c81526b5a65726f206164647265737360a01b60208201526000906001600160a01b03851661072c5760405162461bcd60e51b815260040161046a9190611437565b506001600160a01b0380851660009081526001602090815260408083209387168352929052205461048090859085906107669086906116de565b61096a565b60006104843384846106df565b60006103cf338484610a43565b600354600954600a54600454600090819081906107a290436116de565b92506107ac610dbe565b9150600b549050909192939495565b6000546001600160a01b031633146107e55760405162461bcd60e51b815260040161046a906116a9565b6001600160a01b03811661084a5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b606482015260840161046a565b61085381610d6e565b50565b600080610864858585610894565b90506000610873868686610f54565b111561088c57610884816001610f6f565b915050610484565b949350505050565b60008060006108a38686610f7b565b91509150816000036108c8578381816108be576108be61170d565b0492505050610484565b8382101561014d5760006108dd878787610f54565b90506000806108ed858585610fc8565b9150915081600003610915578681816109085761090861170d565b0495505050505050610484565b60008761092360008a610ff9565b1690506000610933848484611005565b9050600061094f838b816109495761094961170d565b04611052565b905061095b828261108f565b98505050505050505050610484565b60408051808201909152600c81526b5a65726f206164647265737360a01b60208201526001600160a01b0384166109b45760405162461bcd60e51b815260040161046a9190611437565b5060408051808201909152600c81526b5a65726f206164647265737360a01b60208201526001600160a01b0383166109ff5760405162461bcd60e51b815260040161046a9190611437565b506001600160a01b0392831660009081526001602090815260408083209490951682529290925291902055565b6000610a36610dbe565b6003546103e391906116f5565b60408051808201909152600c81526b5a65726f206164647265737360a01b60208201526001600160a01b038416610a8d5760405162461bcd60e51b815260040161046a9190611437565b5060408051808201909152600c81526b5a65726f206164647265737360a01b60208201526001600160a01b038316610ad85760405162461bcd60e51b815260040161046a9190611437565b506000610ae484610d40565b9050818110156040518060400160405280600f81526020016e457863656564732062616c616e636560881b81525090610b305760405162461bcd60e51b815260040161046a9190611437565b50610b3d8483600061109b565b610b498383600161109b565b50505050565b60408051808201909152600c81526b5a65726f206164647265737360a01b60208201526000906001600160a01b038516610b9c5760405162461bcd60e51b815260040161046a9190611437565b506001600160a01b0380851660009081526001602090815260408083209387168352929052205461048090859085906107669086906116f5565b60408051808201909152600c81526b5a65726f206164647265737360a01b60208201526001600160a01b038316610c205760405162461bcd60e51b815260040161046a9190611437565b506105098282600161109b565b6001600160a01b038116600090815260056020526040812060010154600454829190610c5990436116de565b610c6391906116de565b600d5490915060009081906001600160a01b0316635aff34dc610c8b610309620186a06116f5565b6040516001600160e01b031960e084901b1681526004810191909152620186a0602482015260448101869052600a60648201526084016040805180830381865afa158015610cdd573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d019190611745565b6001600160a01b03871660009081526002602052604081205492945090925090610d2c818585610894565b610d3691906116de565b9695505050505050565b6000610d4b82610c2d565b6001600160a01b0383166000908152600260205260409020546103d391906116f5565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b600080600c5460045443610dd291906116de565b610ddc91906116de565b600d5490915060009081906001600160a01b0316635aff34dc610e04610309620186a06116f5565b6040516001600160e01b031960e084901b1681526004810191909152620186a0602482015260448101869052600a60648201526084016040805180830381865afa158015610e56573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e7a9190611745565b91509150600954610e8e600a548484610894565b610e9891906116de565b935050505090565b60408051808201909152600c81526b5a65726f206164647265737360a01b60208201526001600160a01b038316610eea5760405162461bcd60e51b815260040161046a9190611437565b506000610ef683610d40565b9050818110156040518060400160405280600f81526020016e457863656564732062616c616e636560881b81525090610f425760405162461bcd60e51b815260040161046a9190611437565b50610f4f8383600061109b565b505050565b60008180610f6457610f6461170d565b838509949350505050565b600061048482846116f5565b6000806000610f8a8585611428565b90506000610f98868661108f565b9050808210610fae579081900392509050610fc1565b6001610fba8383610ff9565b0393509150505b9250929050565b600080828410610fde5750839050818303610ff1565b60018503610fec8585610ff9565b915091505b935093915050565b600061048482846116de565b60008061102c83611017600086610ff9565b816110245761102461170d565b506000919050565b905082848161103d5761103d61170d565b04611048868361108f565b1795945050505050565b60006001815b60088110156110885761107e826110796002611074868961108f565b610ff9565b61108f565b9150600101611058565b5092915050565b6000610484828461168a565b6001600160a01b03831660009081526002602052604081205460098054919290916110c79084906116de565b9091555050600c54600454600091906110e090436116de565b6110ea91906116de565b600d5490915060009081906001600160a01b0316635aff34dc611112610309620186a06116f5565b6040516001600160e01b031960e084901b1681526004810191909152620186a0602482015260448101869052600a60648201526084016040805180830381865afa158015611164573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111889190611745565b6001600160a01b038816600090815260056020526040902060010154600454929450909250906111b890436116de565b6111c291906116de565b600d5490935060009081906001600160a01b0316635aff34dc6111ea610309620186a06116f5565b6040516001600160e01b031960e084901b1681526004810191909152620186a0602482015260448101889052600a60648201526084016040805180830381865afa15801561123c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112609190611745565b6001600160a01b038a166000908152600260205260409020549193509150611289908383610856565b611296600a548686610856565b6112a091906116de565b600a556004546112b090436116de565b600c81905550505050505060006112c684610c2d565b90508015611315576001600160a01b038416600090815260026020526040812080548392906112f69084906116f5565b9250508190555080600b600082825461130f91906116f5565b90915550505b60045461132290436116de565b6001600160a01b0385166000908152600560205260409020600101558115611390576001600160a01b0384166000908152600260205260408120805485929061136c9084906116f5565b92505081905550826003600082825461138591906116f5565b909155506113d79050565b6001600160a01b038416600090815260026020526040812080548592906113b89084906116de565b9250508190555082600360008282546113d191906116de565b90915550505b6001600160a01b03841660009081526002602052604081205460098054919283926114039084906116f5565b9250508190555080600a600082825461141c91906116f5565b90915550505050505050565b60006000198284099392505050565b600060208083528351808285015260005b8181101561146457858101830151858201604001528201611448565b81811115611476576000604083870101525b50601f01601f1916929092016040019392505050565b80356001600160a01b03811681146114a357600080fd5b919050565b600080604083850312156114bb57600080fd5b6114c48361148c565b946020939093013593505050565b6000806000606084860312156114e757600080fd5b6114f08461148c565b92506114fe6020850161148c565b9150604084013590509250925092565b60006020828403121561152057600080fd5b6104848261148c565b6000806040838503121561153c57600080fd5b6115458361148c565b91506115536020840161148c565b90509250929050565b634e487b7160e01b600052601160045260246000fd5b600060ff821660ff84168060ff0382111561158f5761158f61155c565b019392505050565b600181815b808511156115d25781600019048211156115b8576115b861155c565b808516156115c557918102915b93841c939080029061159c565b509250929050565b6000826115e9575060016103d3565b816115f6575060006103d3565b816001811461160c576002811461161657611632565b60019150506103d3565b60ff8411156116275761162761155c565b50506001821b6103d3565b5060208310610133831016604e8410600b8410161715611655575081810a6103d3565b61165f8383611597565b80600019048211156116735761167361155c565b029392505050565b600061048460ff8416836115da565b60008160001904831182151516156116a4576116a461155c565b500290565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b6000828210156116f0576116f061155c565b500390565b600082198211156117085761170861155c565b500190565b634e487b7160e01b600052601260045260246000fd5b60008261174057634e487b7160e01b600052601260045260246000fd5b500490565b6000806040838503121561175857600080fd5b50508051602090910151909290915056fea2646970667358221220508aeec7e85507a0d0df49e6e4eca95d7a63a7335fb8d40397631491f9c69e1564736f6c634300080e0033";

export class CompoundExpRewardNovel__factory extends ContractFactory {
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
  ): Promise<CompoundExpRewardNovel> {
    return super.deploy(
      _analyticMath,
      overrides || {}
    ) as Promise<CompoundExpRewardNovel>;
  }
  getDeployTransaction(
    _analyticMath: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_analyticMath, overrides || {});
  }
  attach(address: string): CompoundExpRewardNovel {
    return super.attach(address) as CompoundExpRewardNovel;
  }
  connect(signer: Signer): CompoundExpRewardNovel__factory {
    return super.connect(signer) as CompoundExpRewardNovel__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CompoundExpRewardNovelInterface {
    return new utils.Interface(_abi) as CompoundExpRewardNovelInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CompoundExpRewardNovel {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as CompoundExpRewardNovel;
  }
}
