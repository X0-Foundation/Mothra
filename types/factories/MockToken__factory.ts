/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MockToken, MockTokenInterface } from "../MockToken";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_symbol",
        type: "string",
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
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
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
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
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
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
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
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
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
        name: "to",
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
        name: "from",
        type: "address",
      },
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
  "0x60806040523480156200001157600080fd5b506040516200104f3803806200104f833981016040819052620000349162000251565b8151829082906200004d906003906020850190620000de565b50805162000063906004906020840190620000de565b505050620000806200007a6200008860201b60201c565b6200008c565b5050620002f7565b3390565b600580546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b828054620000ec90620002bb565b90600052602060002090601f0160209004810192826200011057600085556200015b565b82601f106200012b57805160ff19168380011785556200015b565b828001600101855582156200015b579182015b828111156200015b5782518255916020019190600101906200013e565b50620001699291506200016d565b5090565b5b808211156200016957600081556001016200016e565b634e487b7160e01b600052604160045260246000fd5b600082601f830112620001ac57600080fd5b81516001600160401b0380821115620001c957620001c962000184565b604051601f8301601f19908116603f01168101908282118183101715620001f457620001f462000184565b816040528381526020925086838588010111156200021157600080fd5b600091505b8382101562000235578582018301518183018401529082019062000216565b83821115620002475760008385830101525b9695505050505050565b600080604083850312156200026557600080fd5b82516001600160401b03808211156200027d57600080fd5b6200028b868387016200019a565b93506020850151915080821115620002a257600080fd5b50620002b1858286016200019a565b9150509250929050565b600181811c90821680620002d057607f821691505b602082108103620002f157634e487b7160e01b600052602260045260246000fd5b50919050565b610d4880620003076000396000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c8063715018a611610097578063a457c2d711610066578063a457c2d714610209578063a9059cbb1461021c578063dd62ed3e1461022f578063f2fde38b1461024257600080fd5b8063715018a6146101cb5780638da5cb5b146101d357806395d89b41146101ee5780639dc29fac146101f657600080fd5b8063313ce567116100d3578063313ce5671461016b578063395093511461017a57806340c10f191461018d57806370a08231146101a257600080fd5b806306fdde0314610105578063095ea7b31461012357806318160ddd1461014657806323b872dd14610158575b600080fd5b61010d610255565b60405161011a9190610b32565b60405180910390f35b610136610131366004610ba3565b6102e7565b604051901515815260200161011a565b6002545b60405190815260200161011a565b610136610166366004610bcd565b6102ff565b6040516012815260200161011a565b610136610188366004610ba3565b610323565b6101a061019b366004610ba3565b610345565b005b61014a6101b0366004610c09565b6001600160a01b031660009081526020819052604090205490565b6101a0610386565b6005546040516001600160a01b03909116815260200161011a565b61010d6103bc565b6101a0610204366004610ba3565b6103cb565b610136610217366004610ba3565b6103ff565b61013661022a366004610ba3565b61047a565b61014a61023d366004610c2b565b610488565b6101a0610250366004610c09565b6104b3565b60606003805461026490610c5e565b80601f016020809104026020016040519081016040528092919081815260200182805461029090610c5e565b80156102dd5780601f106102b2576101008083540402835291602001916102dd565b820191906000526020600020905b8154815290600101906020018083116102c057829003601f168201915b5050505050905090565b6000336102f581858561054e565b5060019392505050565b60003361030d858285610673565b6103188585856106ed565b506001949350505050565b6000336102f58185856103368383610488565b6103409190610cae565b61054e565b6005546001600160a01b031633146103785760405162461bcd60e51b815260040161036f90610cc6565b60405180910390fd5b61038282826108bb565b5050565b6005546001600160a01b031633146103b05760405162461bcd60e51b815260040161036f90610cc6565b6103ba600061099a565b565b60606004805461026490610c5e565b6005546001600160a01b031633146103f55760405162461bcd60e51b815260040161036f90610cc6565b61038282826109ec565b6000338161040d8286610488565b90508381101561046d5760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b606482015260840161036f565b610318828686840361054e565b6000336102f58185856106ed565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6005546001600160a01b031633146104dd5760405162461bcd60e51b815260040161036f90610cc6565b6001600160a01b0381166105425760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b606482015260840161036f565b61054b8161099a565b50565b6001600160a01b0383166105b05760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b606482015260840161036f565b6001600160a01b0382166106115760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b606482015260840161036f565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b600061067f8484610488565b905060001981146106e757818110156106da5760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000604482015260640161036f565b6106e7848484840361054e565b50505050565b6001600160a01b0383166107515760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b606482015260840161036f565b6001600160a01b0382166107b35760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b606482015260840161036f565b6001600160a01b0383166000908152602081905260409020548181101561082b5760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b606482015260840161036f565b6001600160a01b03808516600090815260208190526040808220858503905591851681529081208054849290610862908490610cae565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516108ae91815260200190565b60405180910390a36106e7565b6001600160a01b0382166109115760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640161036f565b80600260008282546109239190610cae565b90915550506001600160a01b03821660009081526020819052604081208054839290610950908490610cae565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b600580546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6001600160a01b038216610a4c5760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b606482015260840161036f565b6001600160a01b03821660009081526020819052604090205481811015610ac05760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b606482015260840161036f565b6001600160a01b0383166000908152602081905260408120838303905560028054849290610aef908490610cfb565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90602001610666565b600060208083528351808285015260005b81811015610b5f57858101830151858201604001528201610b43565b81811115610b71576000604083870101525b50601f01601f1916929092016040019392505050565b80356001600160a01b0381168114610b9e57600080fd5b919050565b60008060408385031215610bb657600080fd5b610bbf83610b87565b946020939093013593505050565b600080600060608486031215610be257600080fd5b610beb84610b87565b9250610bf960208501610b87565b9150604084013590509250925092565b600060208284031215610c1b57600080fd5b610c2482610b87565b9392505050565b60008060408385031215610c3e57600080fd5b610c4783610b87565b9150610c5560208401610b87565b90509250929050565b600181811c90821680610c7257607f821691505b602082108103610c9257634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b60008219821115610cc157610cc1610c98565b500190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b600082821015610d0d57610d0d610c98565b50039056fea2646970667358221220f29f332d95007f235f7e14b5291fb95b37b33f1c6f1c2fdb3920b77171e4844864736f6c634300080e0033";

export class MockToken__factory extends ContractFactory {
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
    _name: string,
    _symbol: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MockToken> {
    return super.deploy(_name, _symbol, overrides || {}) as Promise<MockToken>;
  }
  getDeployTransaction(
    _name: string,
    _symbol: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_name, _symbol, overrides || {});
  }
  attach(address: string): MockToken {
    return super.attach(address) as MockToken;
  }
  connect(signer: Signer): MockToken__factory {
    return super.connect(signer) as MockToken__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockTokenInterface {
    return new utils.Interface(_abi) as MockTokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockToken {
    return new Contract(address, _abi, signerOrProvider) as MockToken;
  }
}
