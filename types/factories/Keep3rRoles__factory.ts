/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Keep3rRoles, Keep3rRolesInterface } from "../Keep3rRoles";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_governance",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "DisputerExistent",
    type: "error",
  },
  {
    inputs: [],
    name: "DisputerUnexistent",
    type: "error",
  },
  {
    inputs: [],
    name: "NoGovernanceZeroAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "OnlyDisputer",
    type: "error",
  },
  {
    inputs: [],
    name: "OnlyGovernance",
    type: "error",
  },
  {
    inputs: [],
    name: "OnlyPendingGovernance",
    type: "error",
  },
  {
    inputs: [],
    name: "OnlySlasher",
    type: "error",
  },
  {
    inputs: [],
    name: "SlasherExistent",
    type: "error",
  },
  {
    inputs: [],
    name: "SlasherUnexistent",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_disputer",
        type: "address",
      },
    ],
    name: "DisputerAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_disputer",
        type: "address",
      },
    ],
    name: "DisputerRemoved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_pendingGovernance",
        type: "address",
      },
    ],
    name: "GovernanceProposal",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_governance",
        type: "address",
      },
    ],
    name: "GovernanceSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_slasher",
        type: "address",
      },
    ],
    name: "SlasherAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_slasher",
        type: "address",
      },
    ],
    name: "SlasherRemoved",
    type: "event",
  },
  {
    inputs: [],
    name: "acceptGovernance",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_disputer",
        type: "address",
      },
    ],
    name: "addDisputer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_slasher",
        type: "address",
      },
    ],
    name: "addSlasher",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "disputers",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "governance",
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
    name: "pendingGovernance",
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
    inputs: [
      {
        internalType: "address",
        name: "_disputer",
        type: "address",
      },
    ],
    name: "removeDisputer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_slasher",
        type: "address",
      },
    ],
    name: "removeSlasher",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_governance",
        type: "address",
      },
    ],
    name: "setGovernance",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "slashers",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516106ab3803806106ab83398101604081905261002f9161007c565b806001600160a01b0381166100565760405162b293ed60e81b815260040160405180910390fd5b600080546001600160a01b0319166001600160a01b0392909216919091179055506100ac565b60006020828403121561008e57600080fd5b81516001600160a01b03811681146100a557600080fd5b9392505050565b6105f0806100bb6000396000f3fe608060405234801561001057600080fd5b506004361061009e5760003560e01c8063aac6aa9c11610066578063aac6aa9c14610136578063ab033ea914610149578063b87fcbff1461015c578063f0f346b91461017f578063f39c38a01461019257600080fd5b8063238efcbc146100a3578063274a8db4146100ad5780635aa6e675146100e557806368a9f19c146101105780639d5c33d814610123575b600080fd5b6100ab6101a5565b005b6100d06100bb36600461058a565b60036020526000908152604090205460ff1681565b60405190151581526020015b60405180910390f35b6000546100f8906001600160a01b031681565b6040516001600160a01b0390911681526020016100dc565b6100ab61011e36600461058a565b61022e565b6100ab61013136600461058a565b6102ee565b6100ab61014436600461058a565b6103a7565b6100ab61015736600461058a565b61045c565b6100d061016a36600461058a565b60026020526000908152604090205460ff1681565b6100ab61018d36600461058a565b6104d5565b6001546100f8906001600160a01b031681565b6001546001600160a01b031633146101d057604051637ef5703160e11b815260040160405180910390fd5b60018054600080546001600160a01b0383166001600160a01b031991821681179092559091169091556040519081527fc73be659241aade67e9a059bcf21494955018b213dbd1179054ccf928b13f3b69060200160405180910390a1565b6000546001600160a01b03163314610259576040516354348f0360e01b815260040160405180910390fd5b6001600160a01b03811660009081526002602052604090205460ff16156102935760405163546da66560e11b815260040160405180910390fd5b6001600160a01b038116600081815260026020908152604091829020805460ff1916600117905590519182527f049ccb28ab796d3225573a065712f6e7754487ced56056cda8889c337511807b91015b60405180910390a150565b6000546001600160a01b03163314610319576040516354348f0360e01b815260040160405180910390fd5b6001600160a01b03811660009081526003602052604090205460ff16156103535760405163274e25dd60e11b815260040160405180910390fd5b6001600160a01b038116600081815260036020908152604091829020805460ff1916600117905590519182527f8addc69f897ecca0e41d70ed4ff9d75a9148a615a0fbda8597e53aea2684302f91016102e3565b6000546001600160a01b031633146103d2576040516354348f0360e01b815260040160405180910390fd5b6001600160a01b03811660009081526002602052604090205460ff1661040b576040516336fe17e760e21b815260040160405180910390fd5b6001600160a01b038116600081815260026020908152604091829020805460ff1916905590519182527f3ed8cbce8cab40e59282f1743e2b607effa08b5cbe0111bb4721134f2f80d02591016102e3565b6000546001600160a01b03163314610487576040516354348f0360e01b815260040160405180910390fd5b600180546001600160a01b0319166001600160a01b0383169081179091556040519081527fe987aaedf9d279143bdf1eee16cf1d0feb47742867d81083df8d6cd0a5ac857f906020016102e3565b6000546001600160a01b03163314610500576040516354348f0360e01b815260040160405180910390fd5b6001600160a01b03811660009081526003602052604090205460ff1661053957604051633ca0d42760e11b815260040160405180910390fd5b6001600160a01b038116600081815260036020908152604091829020805460ff1916905590519182527f5e8bd21d0a98cb2caf33706e56139ff40ffbdca7ec5d9d412a0a2292496dc70e91016102e3565b60006020828403121561059c57600080fd5b81356001600160a01b03811681146105b357600080fd5b939250505056fea2646970667358221220d8e61f9cdba3623d193ed43cacd4e91a80b388591bc87c62dedeb5ee7fe192cb64736f6c634300080e0033";

export class Keep3rRoles__factory extends ContractFactory {
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
    _governance: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Keep3rRoles> {
    return super.deploy(_governance, overrides || {}) as Promise<Keep3rRoles>;
  }
  getDeployTransaction(
    _governance: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_governance, overrides || {});
  }
  attach(address: string): Keep3rRoles {
    return super.attach(address) as Keep3rRoles;
  }
  connect(signer: Signer): Keep3rRoles__factory {
    return super.connect(signer) as Keep3rRoles__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): Keep3rRolesInterface {
    return new utils.Interface(_abi) as Keep3rRolesInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Keep3rRoles {
    return new Contract(address, _abi, signerOrProvider) as Keep3rRoles;
  }
}
