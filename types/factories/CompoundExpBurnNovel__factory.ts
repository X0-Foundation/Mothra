/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  CompoundExpBurnNovel,
  CompoundExpBurnNovelInterface,
} from "../CompoundExpBurnNovel";

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
  "0x60806040523480156200001157600080fd5b5060405162002303380380620023038339810160408190526200003491620008ca565b6200003f33620000fb565b600c80546001600160a01b0383166001600160a01b031991821617909155436004556006805482167370997970c51812dc3a010c7d01b50e0d17dc79c8179055600780548216733c44cdddb6a900fa2b585dd299e03d12fa4293bc179055600880549091167390f79bf6eb2c4f870365e785982e1f101e93b906179055620000f4620000d36000546001600160a01b031690565b620000e1601260066200090b565b620000ee90600a62000a30565b6200014b565b5062000b4e565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b60408051808201909152600c81526b5a65726f206164647265737360a01b60208201526001600160a01b038316620001a15760405162461bcd60e51b815260040162000198919062000a41565b60405180910390fd5b50620001b082826001620001b4565b5050565b6001600160a01b0383166000908152600260205260408120546009805491929091620001e290849062000a99565b90915550506001600160a01b038316600090815260056020526040812060010154600a8054919290916200021890849062000a99565b90915550600090506200022b84620004c2565b90508015620002c2576001600160a01b038416600090815260026020526040812080548392906200025e90849062000a99565b92505081905550806003600082825462000279919062000a99565b9250508190555080600b600082825462000294919062000ab3565b9091555050600454620002a8904362000a99565b6001600160a01b0385166000908152600560205260409020555b81156200031a576001600160a01b03841660009081526002602052604081208054859290620002f390849062000ab3565b9250508190555082600360008282546200030e919062000ab3565b90915550620003659050565b6001600160a01b038416600090815260026020526040812080548592906200034490849062000a99565b9250508190555082600360008282546200035f919062000a99565b90915550505b6001600160a01b03808516600090815260056020526040812054600c549092829116635aff34dc620186a06200039e6103098262000a99565b6040516001600160e01b031960e085901b1681526004810192909252602482015260448101869052600a60648201526084016040805180830381865afa158015620003ed573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000413919062000ace565b91509150600062000456600260008a6001600160a01b03166001600160a01b031681526020019081526020016000205484846200060660201b620008de1760201c565b6001600160a01b038916600090815260056020908152604080832060010184905560029091528120546009805493945090929091906200049890849062000ab3565b9250508190555080600a6000828254620004b3919062000ab3565b90915550505050505050505050565b6001600160a01b038116600090815260056020526040812054600454829190620004ed904362000a99565b620004f9919062000a99565b600c5490915060009081906001600160a01b0316635aff34dc62000523610309620186a062000a99565b6040516001600160e01b031960e084901b1681526004810191909152620186a0602482015260448101869052600a60648201526084016040805180830381865afa15801562000576573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200059c919062000ace565b6001600160a01b038716600090815260026020526040812054929450909250908290620005cb90859062000af3565b620005d7919062000b2b565b6001600160a01b038716600090815260026020526040902054620005fc919062000a99565b9695505050505050565b600080620006168585856200064e565b905060006200062786868662000744565b111562000644576200063b81600162000762565b91505062000647565b90505b9392505050565b600080806200065e868662000779565b915091508160000362000688578381816200067d576200067d62000b15565b049250505062000647565b838210156200073f576000620006a087878762000744565b9050600080620006b2858585620007cd565b9150915081600003620006df57868181620006d157620006d162000b15565b049550505050505062000647565b600087620006ee828262000803565b16905060006200070084848462000811565b9050600062000721838b816200071a576200071a62000b15565b0462000868565b90506200072f8282620008ad565b9850505050505050505062000647565b600080fd5b6000818062000757576200075762000b15565b838509949350505050565b600062000770828462000ab3565b90505b92915050565b60008080620007898585620008bb565b90506000620007998686620008ad565b9050808210620007b1579081900392509050620007c6565b6001620007bf838362000803565b0393509150505b9250929050565b600080828410620007e55750839050818303620007fb565b6000198501620007f6858562000803565b915091505b935093915050565b600062000770828462000a99565b6000806200083d8362000825838262000803565b8162000835576200083562000b15565b506000919050565b905082848162000851576200085162000b15565b046200085e8683620008ad565b1795945050505050565b60006001815b6008811015620008a6576200089b826200089560026200088f8389620008ad565b62000803565b620008ad565b91506001016200086e565b5092915050565b600062000770828462000af3565b60006000198284099392505050565b600060208284031215620008dd57600080fd5b81516001600160a01b03811681146200064757600080fd5b634e487b7160e01b600052601160045260246000fd5b600060ff821660ff84168060ff038211156200092b576200092b620008f5565b019392505050565b600181815b8085111562000974578160001904821115620009585762000958620008f5565b808516156200096657918102915b93841c939080029062000938565b509250929050565b6000826200098d5750600162000773565b816200099c5750600062000773565b8160018114620009b55760028114620009c057620009e0565b600191505062000773565b60ff841115620009d457620009d4620008f5565b50506001821b62000773565b5060208310610133831016604e8410600b841016171562000a05575081810a62000773565b62000a11838362000933565b806000190482111562000a285762000a28620008f5565b029392505050565b60006200077060ff8416836200097c565b600060208083528351808285015260005b8181101562000a705785810183015185820160400152820162000a52565b8181111562000a83576000604083870101525b50601f01601f1916929092016040019392505050565b60008282101562000aae5762000aae620008f5565b500390565b6000821982111562000ac95762000ac9620008f5565b500190565b6000806040838503121562000ae257600080fd5b505080516020909101519092909150565b600081600019048311821515161562000b105762000b10620008f5565b500290565b634e487b7160e01b600052601260045260246000fd5b60008262000b4957634e487b7160e01b600052601260045260246000fd5b500490565b6117a58062000b5e6000396000f3fe608060405234801561001057600080fd5b506004361061014d5760003560e01c806370a08231116100c3578063a150da2a1161007c578063a150da2a14610306578063a457c2d714610319578063a9059cbb1461032c578063bdfeb1e51461033f578063dd62ed3e14610374578063f2fde38b146103ad57600080fd5b806370a0823114610274578063715018a614610287578063739572891461028f5780638da5cb5b146102b757806395d89b41146102d25780639dc29fac146102f357600080fd5b80632ff2e9dc116101155780632ff2e9dc146101fa578063313ce5671461020257806332cb6b0c14610209578063395093511461021157806340c10f1914610224578063416ae7681461023957600080fd5b806306fdde0314610152578063095ea7b31461019457806318160ddd146101b757806323b872dd146101cd5780632e0f2625146101e0575b600080fd5b60408051808201909152601481527310dbdb5c1bdd5b99115e1c109d5c9b939bdd995b60621b60208201525b60405161018b919061143d565b60405180910390f35b6101a76101a23660046114ae565b6103c0565b604051901515815260200161018b565b6101bf6103d7565b60405190815260200161018b565b6101a76101db3660046114d8565b6103e6565b6101e8601281565b60405160ff909116815260200161018b565b6101bf610489565b60126101e8565b6101bf6104a3565b6101a761021f3660046114ae565b6104c5565b6102376102323660046114ae565b6104d2565b005b61024c610247366004611514565b610581565b604080519586526020860194909452928401919091526060830152608082015260a00161018b565b6101bf610282366004611514565b6105ef565b6102376105fa565b610297610630565b60408051948552602085019390935291830152606082015260800161018b565b6000546040516001600160a01b03909116815260200161018b565b60408051808201909152600581526421a2a1272760d91b602082015261017e565b6102376103013660046114ae565b610733565b6101a76103143660046114d8565b610767565b6101a76103273660046114ae565b6107f3565b6101a761033a3660046114ae565b610800565b61034761080d565b604080519687526020870195909552938501929092526060840152608083015260a082015260c00161018b565b6101bf61038236600461152f565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6102376103bb366004611514565b610843565b60006103cd33848461091c565b5060015b92915050565b60006103e16109de565b905090565b60006001600160a01b0384163314610473576001600160a01b0384166000908152600160209081526040808320338452909152902054828110156104715760405162461bcd60e51b815260206004820152601a60248201527f5472616e73666572206578636565647320616c6c6f77616e636500000000000060448201526064015b60405180910390fd5b505b61047e8484846109f5565b5060015b9392505050565b61049560126006611578565b6104a090600a611681565b81565b6104af60126006611578565b6104ba90600a611681565b6104a090600a611690565b6000610482338484610b01565b6000546001600160a01b031633146104fc5760405162461bcd60e51b8152600401610468906116af565b61050860126006611578565b61051390600a611681565b61051e90600a611690565b816105276109de565b61053191906116e4565b11156105735760405162461bcd60e51b8152602060048201526011602482015270457863656564204d617820537570706c7960781b6044820152606401610468565b61057d8282610b88565b5050565b6001600160a01b038116600090815260026020908152604080832054600590925282206001015460045491929091819081906105bd90436116fc565b92506105c886610bdf565b6001600160a01b039096166000908152600560205260409020549496939592949293915050565b60006103d182610d14565b6000546001600160a01b031633146106245760405162461bcd60e51b8152600401610468906116af565b61062e6000610d42565b565b60008060008061063e610d92565b9350600061065c6106576000546001600160a01b031690565b610bdf565b905061066881856116e4565b600654909450610680906001600160a01b0316610bdf565b905061068c81856116e4565b6007549094506106a4906001600160a01b0316610bdf565b90506106b081856116e4565b6008549094506106c8906001600160a01b0316610bdf565b90506106d481856116e4565b9350838510156106ef576106e885856116fc565b92506106fc565b6106f984866116fc565b92505b84848110156107085750835b801561072b578061071e8564e8d4a51000611690565b6107289190611729565b92505b505090919293565b6000546001600160a01b0316331461075d5760405162461bcd60e51b8152600401610468906116af565b61057d8282610e65565b60408051808201909152600c81526b5a65726f206164647265737360a01b60208201526000906001600160a01b0385166107b45760405162461bcd60e51b8152600401610468919061143d565b506001600160a01b0380851660009081526001602090815260408083209387168352929052205461047e90859085906107ee9086906116fc565b61091c565b6000610482338484610767565b60006103cd3384846109f5565b600354600954600a546004546000908190819061082a90436116fc565b9250610834610d92565b9150600b549050909192939495565b6000546001600160a01b0316331461086d5760405162461bcd60e51b8152600401610468906116af565b6001600160a01b0381166108d25760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610468565b6108db81610d42565b50565b6000806108ec858585610f19565b905060006108fb868686610fef565b11156109145761090c81600161100a565b915050610482565b949350505050565b60408051808201909152600c81526b5a65726f206164647265737360a01b60208201526001600160a01b0384166109665760405162461bcd60e51b8152600401610468919061143d565b5060408051808201909152600c81526b5a65726f206164647265737360a01b60208201526001600160a01b0383166109b15760405162461bcd60e51b8152600401610468919061143d565b506001600160a01b0392831660009081526001602090815260408083209490951682529290925291902055565b60006109e8610d92565b6003546103e191906116fc565b60408051808201909152600c81526b5a65726f206164647265737360a01b60208201526001600160a01b038416610a3f5760405162461bcd60e51b8152600401610468919061143d565b5060408051808201909152600c81526b5a65726f206164647265737360a01b60208201526001600160a01b038316610a8a5760405162461bcd60e51b8152600401610468919061143d565b506000610a9684610d14565b9050818110156040518060400160405280600f81526020016e457863656564732062616c616e636560881b81525090610ae25760405162461bcd60e51b8152600401610468919061143d565b50610aef84836000611016565b610afb83836001611016565b50505050565b60408051808201909152600c81526b5a65726f206164647265737360a01b60208201526000906001600160a01b038516610b4e5760405162461bcd60e51b8152600401610468919061143d565b506001600160a01b0380851660009081526001602090815260408083209387168352929052205461047e90859085906107ee9086906116e4565b60408051808201909152600c81526b5a65726f206164647265737360a01b60208201526001600160a01b038316610bd25760405162461bcd60e51b8152600401610468919061143d565b5061057d82826001611016565b6001600160a01b038116600090815260056020526040812054600454829190610c0890436116fc565b610c1291906116fc565b600c5490915060009081906001600160a01b0316635aff34dc610c3a610309620186a06116fc565b6040516001600160e01b031960e084901b1681526004810191909152620186a0602482015260448101869052600a60648201526084016040805180830381865afa158015610c8c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cb0919061174b565b6001600160a01b038716600090815260026020526040812054929450909250908290610cdd908590611690565b610ce79190611729565b6001600160a01b038716600090815260026020526040902054610d0a91906116fc565b9695505050505050565b6000610d1f82610bdf565b6001600160a01b0383166000908152600260205260409020546103d191906116fc565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b60008060045443610da391906116fc565b600c5490915060009081906001600160a01b0316635aff34dc610dcb610309620186a06116fc565b6040516001600160e01b031960e084901b1681526004810191909152620186a0602482015260448101869052600a60648201526084016040805180830381865afa158015610e1d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e41919061174b565b91509150610e5d600954610e58600a5485856108de565b6112ea565b935050505090565b60408051808201909152600c81526b5a65726f206164647265737360a01b60208201526001600160a01b038316610eaf5760405162461bcd60e51b8152600401610468919061143d565b506000610ebb83610d14565b9050818110156040518060400160405280600f81526020016e457863656564732062616c616e636560881b81525090610f075760405162461bcd60e51b8152600401610468919061143d565b50610f1483836000611016565b505050565b6000806000610f28868661130e565b9150915081600003610f4d57838181610f4357610f43611713565b0492505050610482565b8382101561014d576000610f62878787610fef565b9050600080610f7285858561135b565b9150915081600003610f9a57868181610f8d57610f8d611713565b0495505050505050610482565b600087610fa860008a61138c565b1690506000610fb8848484611398565b90506000610fd4838b81610fce57610fce611713565b046113e5565b9050610fe08282611422565b98505050505050505050610482565b60008180610fff57610fff611713565b838509949350505050565b600061048282846116e4565b6001600160a01b03831660009081526002602052604081205460098054919290916110429084906116fc565b90915550506001600160a01b038316600090815260056020526040812060010154600a8054919290916110769084906116fc565b909155506000905061108784610bdf565b90508015611115576001600160a01b038416600090815260026020526040812080548392906110b79084906116fc565b9250508190555080600360008282546110d091906116fc565b9250508190555080600b60008282546110e991906116e4565b90915550506004546110fb90436116fc565b6001600160a01b0385166000908152600560205260409020555b8115611167576001600160a01b038416600090815260026020526040812080548592906111439084906116e4565b92505081905550826003600082825461115c91906116e4565b909155506111ae9050565b6001600160a01b0384166000908152600260205260408120805485929061118f9084906116fc565b9250508190555082600360008282546111a891906116fc565b90915550505b6001600160a01b03808516600090815260056020526040812054600c549092829116635aff34dc620186a06111e5610309826116fc565b6040516001600160e01b031960e085901b1681526004810192909252602482015260448101869052600a60648201526084016040805180830381865afa158015611233573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611257919061174b565b6001600160a01b038916600090815260026020526040812054929450909250906112829084846108de565b6001600160a01b038916600090815260056020908152604080832060010184905560029091528120546009805493945090929091906112c29084906116e4565b9250508190555080600a60008282546112db91906116e4565b90915550505050505050505050565b600081831115611305576112fe82846116fc565b90506103d1565b50600092915050565b600080600061131d858561142e565b9050600061132b8686611422565b9050808210611341579081900392509050611354565b600161134d838361138c565b0393509150505b9250929050565b6000808284106113715750839050818303611384565b6001850361137f858561138c565b915091505b935093915050565b600061048282846116fc565b6000806113bf836113aa60008661138c565b816113b7576113b7611713565b506000919050565b90508284816113d0576113d0611713565b046113db8683611422565b1795945050505050565b60006001815b600881101561141b576114118261140c60026114078689611422565b61138c565b611422565b91506001016113eb565b5092915050565b60006104828284611690565b60006000198284099392505050565b600060208083528351808285015260005b8181101561146a5785810183015185820160400152820161144e565b8181111561147c576000604083870101525b50601f01601f1916929092016040019392505050565b80356001600160a01b03811681146114a957600080fd5b919050565b600080604083850312156114c157600080fd5b6114ca83611492565b946020939093013593505050565b6000806000606084860312156114ed57600080fd5b6114f684611492565b925061150460208501611492565b9150604084013590509250925092565b60006020828403121561152657600080fd5b61048282611492565b6000806040838503121561154257600080fd5b61154b83611492565b915061155960208401611492565b90509250929050565b634e487b7160e01b600052601160045260246000fd5b600060ff821660ff84168060ff0382111561159557611595611562565b019392505050565b600181815b808511156115d85781600019048211156115be576115be611562565b808516156115cb57918102915b93841c93908002906115a2565b509250929050565b6000826115ef575060016103d1565b816115fc575060006103d1565b8160018114611612576002811461161c57611638565b60019150506103d1565b60ff84111561162d5761162d611562565b50506001821b6103d1565b5060208310610133831016604e8410600b841016171561165b575081810a6103d1565b611665838361159d565b806000190482111561167957611679611562565b029392505050565b600061048260ff8416836115e0565b60008160001904831182151516156116aa576116aa611562565b500290565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b600082198211156116f7576116f7611562565b500190565b60008282101561170e5761170e611562565b500390565b634e487b7160e01b600052601260045260246000fd5b60008261174657634e487b7160e01b600052601260045260246000fd5b500490565b6000806040838503121561175e57600080fd5b50508051602090910151909290915056fea2646970667358221220d7b4fce39b4e299aed98d68f6f72d6c54ad70da0c524ba4e767dd01c63a24e8f64736f6c634300080e0033";

export class CompoundExpBurnNovel__factory extends ContractFactory {
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
  ): Promise<CompoundExpBurnNovel> {
    return super.deploy(
      _analyticMath,
      overrides || {}
    ) as Promise<CompoundExpBurnNovel>;
  }
  getDeployTransaction(
    _analyticMath: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_analyticMath, overrides || {});
  }
  attach(address: string): CompoundExpBurnNovel {
    return super.attach(address) as CompoundExpBurnNovel;
  }
  connect(signer: Signer): CompoundExpBurnNovel__factory {
    return super.connect(signer) as CompoundExpBurnNovel__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CompoundExpBurnNovelInterface {
    return new utils.Interface(_abi) as CompoundExpBurnNovelInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CompoundExpBurnNovel {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as CompoundExpBurnNovel;
  }
}