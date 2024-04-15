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
  "0x60806040523480156200001157600080fd5b50604051620022cf380380620022cf8339810160408190526200003491620008af565b6200003f33620000fb565b600c80546001600160a01b0383166001600160a01b031991821617909155436004556006805482167370997970c51812dc3a010c7d01b50e0d17dc79c8179055600780548216733c44cdddb6a900fa2b585dd299e03d12fa4293bc179055600880549091167390f79bf6eb2c4f870365e785982e1f101e93b906179055620000f4620000d36000546001600160a01b031690565b620000e160126006620008f0565b620000ee90600a62000a15565b6200014b565b5062000b33565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b60408051808201909152600c81526b5a65726f206164647265737360a01b60208201526001600160a01b038316620001a15760405162461bcd60e51b815260040162000198919062000a26565b60405180910390fd5b50620001b082826001620001b4565b5050565b6001600160a01b0383166000908152600260205260408120546009805491929091620001e290849062000a7e565b90915550506001600160a01b038316600090815260056020526040812060010154600a8054919290916200021890849062000a7e565b90915550600090506200022b84620004c2565b90508015620002c2576001600160a01b038416600090815260026020526040812080548392906200025e90849062000a98565b92505081905550806003600082825462000279919062000a98565b9250508190555080600b600082825462000294919062000a98565b9091555050600454620002a8904362000a7e565b6001600160a01b0385166000908152600560205260409020555b81156200031a576001600160a01b03841660009081526002602052604081208054859290620002f390849062000a98565b9250508190555082600360008282546200030e919062000a98565b90915550620003659050565b6001600160a01b038416600090815260026020526040812080548592906200034490849062000a7e565b9250508190555082600360008282546200035f919062000a7e565b90915550505b6001600160a01b03808516600090815260056020526040812054600c549092829116635aff34dc620186a06200039e6103098262000a98565b6040516001600160e01b031960e085901b1681526004810192909252602482015260448101869052600a60648201526084016040805180830381865afa158015620003ed573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000413919062000ab3565b91509150600062000456600260008a6001600160a01b03166001600160a01b03168152602001908152602001600020548484620005eb60201b620008e01760201c565b6001600160a01b038916600090815260056020908152604080832060010184905560029091528120546009805493945090929091906200049890849062000a98565b9250508190555080600a6000828254620004b3919062000a98565b90915550505050505050505050565b6001600160a01b038116600090815260056020526040812054600454829190620004ed904362000a7e565b620004f9919062000a7e565b600c5490915060009081906001600160a01b0316635aff34dc62000523610309620186a062000a98565b6040516001600160e01b031960e084901b1681526004810191909152620186a0602482015260448101869052600a60648201526084016040805180830381865afa15801562000576573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200059c919062000ab3565b6001600160a01b0387166000908152600260205260408120549294509092509082620005c9858362000ad8565b620005d5919062000b10565b620005e1919062000a7e565b9695505050505050565b600080620005fb85858562000633565b905060006200060c86868662000729565b111562000629576200062081600162000747565b9150506200062c565b90505b9392505050565b600080806200064386866200075e565b91509150816000036200066d5783818162000662576200066262000afa565b04925050506200062c565b83821015620007245760006200068587878762000729565b905060008062000697858585620007b2565b9150915081600003620006c457868181620006b657620006b662000afa565b04955050505050506200062c565b600087620006d38282620007e8565b1690506000620006e5848484620007f6565b9050600062000706838b81620006ff57620006ff62000afa565b046200084d565b905062000714828262000892565b985050505050505050506200062c565b600080fd5b600081806200073c576200073c62000afa565b838509949350505050565b600062000755828462000a98565b90505b92915050565b600080806200076e8585620008a0565b905060006200077e868662000892565b905080821062000796579081900392509050620007ab565b6001620007a48383620007e8565b0393509150505b9250929050565b600080828410620007ca5750839050818303620007e0565b6000198501620007db8585620007e8565b915091505b935093915050565b600062000755828462000a7e565b60008062000822836200080a8382620007e8565b816200081a576200081a62000afa565b506000919050565b905082848162000836576200083662000afa565b0462000843868362000892565b1795945050505050565b60006001815b60088110156200088b5762000880826200087a600262000874838962000892565b620007e8565b62000892565b915060010162000853565b5092915050565b600062000755828462000ad8565b60006000198284099392505050565b600060208284031215620008c257600080fd5b81516001600160a01b03811681146200062c57600080fd5b634e487b7160e01b600052601160045260246000fd5b600060ff821660ff84168060ff03821115620009105762000910620008da565b019392505050565b600181815b80851115620009595781600019048211156200093d576200093d620008da565b808516156200094b57918102915b93841c93908002906200091d565b509250929050565b600082620009725750600162000758565b81620009815750600062000758565b81600181146200099a5760028114620009a557620009c5565b600191505062000758565b60ff841115620009b957620009b9620008da565b50506001821b62000758565b5060208310610133831016604e8410600b8410161715620009ea575081810a62000758565b620009f6838362000918565b806000190482111562000a0d5762000a0d620008da565b029392505050565b60006200075560ff84168362000961565b600060208083528351808285015260005b8181101562000a555785810183015185820160400152820162000a37565b8181111562000a68576000604083870101525b50601f01601f1916929092016040019392505050565b60008282101562000a935762000a93620008da565b500390565b6000821982111562000aae5762000aae620008da565b500190565b6000806040838503121562000ac757600080fd5b505080516020909101519092909150565b600081600019048311821515161562000af55762000af5620008da565b500290565b634e487b7160e01b600052601260045260246000fd5b60008262000b2e57634e487b7160e01b600052601260045260246000fd5b500490565b61178c8062000b436000396000f3fe608060405234801561001057600080fd5b506004361061014d5760003560e01c806370a08231116100c3578063a150da2a1161007c578063a150da2a14610308578063a457c2d71461031b578063a9059cbb1461032e578063bdfeb1e514610341578063dd62ed3e14610376578063f2fde38b146103af57600080fd5b806370a0823114610276578063715018a61461028957806373957289146102915780638da5cb5b146102b957806395d89b41146102d45780639dc29fac146102f557600080fd5b80632ff2e9dc116101155780632ff2e9dc146101fc578063313ce5671461020457806332cb6b0c1461020b578063395093511461021357806340c10f1914610226578063416ae7681461023b57600080fd5b806306fdde0314610152578063095ea7b31461019657806318160ddd146101b957806323b872dd146101cf5780632e0f2625146101e2575b600080fd5b60408051808201909152601681527510dbdb5c1bdd5b99115e1c14995dd85c99139bdd995b60521b60208201525b60405161018d9190611424565b60405180910390f35b6101a96101a4366004611495565b6103c2565b604051901515815260200161018d565b6101c16103d9565b60405190815260200161018d565b6101a96101dd3660046114bf565b6103e8565b6101ea601281565b60405160ff909116815260200161018d565b6101c161048b565b60126101ea565b6101c16104a5565b6101a9610221366004611495565b6104c7565b610239610234366004611495565b6104d4565b005b61024e6102493660046114fb565b610583565b604080519586526020860194909452928401919091526060830152608082015260a00161018d565b6101c16102843660046114fb565b6105f1565b6102396105fc565b610299610632565b60408051948552602085019390935291830152606082015260800161018d565b6000546040516001600160a01b03909116815260200161018d565b60408051808201909152600581526421a2a92ba760d91b6020820152610180565b610239610303366004611495565b610735565b6101a96103163660046114bf565b610769565b6101a9610329366004611495565b6107f5565b6101a961033c366004611495565b610802565b61034961080f565b604080519687526020870195909552938501929092526060840152608083015260a082015260c00161018d565b6101c1610384366004611516565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6102396103bd3660046114fb565b610845565b60006103cf33848461091e565b5060015b92915050565b60006103e36109e0565b905090565b60006001600160a01b0384163314610475576001600160a01b0384166000908152600160209081526040808320338452909152902054828110156104735760405162461bcd60e51b815260206004820152601a60248201527f5472616e73666572206578636565647320616c6c6f77616e636500000000000060448201526064015b60405180910390fd5b505b6104808484846109f7565b5060015b9392505050565b6104976012600661155f565b6104a290600a611668565b81565b6104b16012600661155f565b6104bc90600a611668565b6104a290600a611677565b6000610484338484610b03565b6000546001600160a01b031633146104fe5760405162461bcd60e51b815260040161046a90611696565b61050a6012600661155f565b61051590600a611668565b61052090600a611677565b816105296109e0565b61053391906116cb565b11156105755760405162461bcd60e51b8152602060048201526011602482015270457863656564204d617820537570706c7960781b604482015260640161046a565b61057f8282610b8a565b5050565b6001600160a01b038116600090815260026020908152604080832054600590925282206001015460045491929091819081906105bf90436116e3565b92506105ca86610be1565b6001600160a01b039096166000908152600560205260409020549496939592949293915050565b60006103d382610cfb565b6000546001600160a01b031633146106265760405162461bcd60e51b815260040161046a90611696565b6106306000610d29565b565b600080600080610640610d79565b9350600061065e6106596000546001600160a01b031690565b610be1565b905061066a81856116cb565b600654909450610682906001600160a01b0316610be1565b905061068e81856116cb565b6007549094506106a6906001600160a01b0316610be1565b90506106b281856116cb565b6008549094506106ca906001600160a01b0316610be1565b90506106d681856116cb565b9350838510156106f1576106ea85856116e3565b92506106fe565b6106fb84866116e3565b92505b848481101561070a5750835b801561072d57806107208564e8d4a51000611677565b61072a9190611710565b92505b505090919293565b6000546001600160a01b0316331461075f5760405162461bcd60e51b815260040161046a90611696565b61057f8282610e4c565b60408051808201909152600c81526b5a65726f206164647265737360a01b60208201526000906001600160a01b0385166107b65760405162461bcd60e51b815260040161046a9190611424565b506001600160a01b0380851660009081526001602090815260408083209387168352929052205461048090859085906107f09086906116e3565b61091e565b6000610484338484610769565b60006103cf3384846109f7565b600354600954600a546004546000908190819061082c90436116e3565b9250610836610d79565b9150600b549050909192939495565b6000546001600160a01b0316331461086f5760405162461bcd60e51b815260040161046a90611696565b6001600160a01b0381166108d45760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b606482015260840161046a565b6108dd81610d29565b50565b6000806108ee858585610f00565b905060006108fd868686610fd6565b11156109165761090e816001610ff1565b915050610484565b949350505050565b60408051808201909152600c81526b5a65726f206164647265737360a01b60208201526001600160a01b0384166109685760405162461bcd60e51b815260040161046a9190611424565b5060408051808201909152600c81526b5a65726f206164647265737360a01b60208201526001600160a01b0383166109b35760405162461bcd60e51b815260040161046a9190611424565b506001600160a01b0392831660009081526001602090815260408083209490951682529290925291902055565b60006109ea610d79565b6003546103e391906116cb565b60408051808201909152600c81526b5a65726f206164647265737360a01b60208201526001600160a01b038416610a415760405162461bcd60e51b815260040161046a9190611424565b5060408051808201909152600c81526b5a65726f206164647265737360a01b60208201526001600160a01b038316610a8c5760405162461bcd60e51b815260040161046a9190611424565b506000610a9884610cfb565b9050818110156040518060400160405280600f81526020016e457863656564732062616c616e636560881b81525090610ae45760405162461bcd60e51b815260040161046a9190611424565b50610af184836000610ffd565b610afd83836001610ffd565b50505050565b60408051808201909152600c81526b5a65726f206164647265737360a01b60208201526000906001600160a01b038516610b505760405162461bcd60e51b815260040161046a9190611424565b506001600160a01b0380851660009081526001602090815260408083209387168352929052205461048090859085906107f09086906116cb565b60408051808201909152600c81526b5a65726f206164647265737360a01b60208201526001600160a01b038316610bd45760405162461bcd60e51b815260040161046a9190611424565b5061057f82826001610ffd565b6001600160a01b038116600090815260056020526040812054600454829190610c0a90436116e3565b610c1491906116e3565b600c5490915060009081906001600160a01b0316635aff34dc610c3c610309620186a06116cb565b6040516001600160e01b031960e084901b1681526004810191909152620186a0602482015260448101869052600a60648201526084016040805180830381865afa158015610c8e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cb29190611732565b6001600160a01b0387166000908152600260205260408120549294509092509082610cdd8583611677565b610ce79190611710565b610cf191906116e3565b9695505050505050565b6000610d0682610be1565b6001600160a01b0383166000908152600260205260409020546103d391906116cb565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b60008060045443610d8a91906116e3565b600c5490915060009081906001600160a01b0316635aff34dc610db2610309620186a06116cb565b6040516001600160e01b031960e084901b1681526004810191909152620186a0602482015260448101869052600a60648201526084016040805180830381865afa158015610e04573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e289190611732565b91509150610e44610e3c600a5484846108e0565b6009546112d1565b935050505090565b60408051808201909152600c81526b5a65726f206164647265737360a01b60208201526001600160a01b038316610e965760405162461bcd60e51b815260040161046a9190611424565b506000610ea283610cfb565b9050818110156040518060400160405280600f81526020016e457863656564732062616c616e636560881b81525090610eee5760405162461bcd60e51b815260040161046a9190611424565b50610efb83836000610ffd565b505050565b6000806000610f0f86866112f5565b9150915081600003610f3457838181610f2a57610f2a6116fa565b0492505050610484565b8382101561014d576000610f49878787610fd6565b9050600080610f59858585611342565b9150915081600003610f8157868181610f7457610f746116fa565b0495505050505050610484565b600087610f8f60008a611373565b1690506000610f9f84848461137f565b90506000610fbb838b81610fb557610fb56116fa565b046113cc565b9050610fc78282611409565b98505050505050505050610484565b60008180610fe657610fe66116fa565b838509949350505050565b600061048482846116cb565b6001600160a01b03831660009081526002602052604081205460098054919290916110299084906116e3565b90915550506001600160a01b038316600090815260056020526040812060010154600a80549192909161105d9084906116e3565b909155506000905061106e84610be1565b905080156110fc576001600160a01b0384166000908152600260205260408120805483929061109e9084906116cb565b9250508190555080600360008282546110b791906116cb565b9250508190555080600b60008282546110d091906116cb565b90915550506004546110e290436116e3565b6001600160a01b0385166000908152600560205260409020555b811561114e576001600160a01b0384166000908152600260205260408120805485929061112a9084906116cb565b92505081905550826003600082825461114391906116cb565b909155506111959050565b6001600160a01b038416600090815260026020526040812080548592906111769084906116e3565b92505081905550826003600082825461118f91906116e3565b90915550505b6001600160a01b03808516600090815260056020526040812054600c549092829116635aff34dc620186a06111cc610309826116cb565b6040516001600160e01b031960e085901b1681526004810192909252602482015260448101869052600a60648201526084016040805180830381865afa15801561121a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061123e9190611732565b6001600160a01b038916600090815260026020526040812054929450909250906112699084846108e0565b6001600160a01b038916600090815260056020908152604080832060010184905560029091528120546009805493945090929091906112a99084906116cb565b9250508190555080600a60008282546112c291906116cb565b90915550505050505050505050565b6000818311156112ec576112e582846116e3565b90506103d3565b50600092915050565b60008060006113048585611415565b905060006113128686611409565b905080821061132857908190039250905061133b565b60016113348383611373565b0393509150505b9250929050565b600080828410611358575083905081830361136b565b600185036113668585611373565b915091505b935093915050565b600061048482846116e3565b6000806113a683611391600086611373565b8161139e5761139e6116fa565b506000919050565b90508284816113b7576113b76116fa565b046113c28683611409565b1795945050505050565b60006001815b6008811015611402576113f8826113f360026113ee8689611409565b611373565b611409565b91506001016113d2565b5092915050565b60006104848284611677565b60006000198284099392505050565b600060208083528351808285015260005b8181101561145157858101830151858201604001528201611435565b81811115611463576000604083870101525b50601f01601f1916929092016040019392505050565b80356001600160a01b038116811461149057600080fd5b919050565b600080604083850312156114a857600080fd5b6114b183611479565b946020939093013593505050565b6000806000606084860312156114d457600080fd5b6114dd84611479565b92506114eb60208501611479565b9150604084013590509250925092565b60006020828403121561150d57600080fd5b61048482611479565b6000806040838503121561152957600080fd5b61153283611479565b915061154060208401611479565b90509250929050565b634e487b7160e01b600052601160045260246000fd5b600060ff821660ff84168060ff0382111561157c5761157c611549565b019392505050565b600181815b808511156115bf5781600019048211156115a5576115a5611549565b808516156115b257918102915b93841c9390800290611589565b509250929050565b6000826115d6575060016103d3565b816115e3575060006103d3565b81600181146115f957600281146116035761161f565b60019150506103d3565b60ff84111561161457611614611549565b50506001821b6103d3565b5060208310610133831016604e8410600b8410161715611642575081810a6103d3565b61164c8383611584565b806000190482111561166057611660611549565b029392505050565b600061048460ff8416836115c7565b600081600019048311821515161561169157611691611549565b500290565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b600082198211156116de576116de611549565b500190565b6000828210156116f5576116f5611549565b500390565b634e487b7160e01b600052601260045260246000fd5b60008261172d57634e487b7160e01b600052601260045260246000fd5b500490565b6000806040838503121561174557600080fd5b50508051602090910151909290915056fea2646970667358221220d6a44970f2f33e8cde7c62e8d5f2228a86d00c670dfbaaf1f1ba8e3a95fd864964736f6c634300080e0033";

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
