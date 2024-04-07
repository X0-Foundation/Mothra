/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { JobForTest, JobForTestInterface } from "../JobForTest";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_keep3r",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "InvalidKeeper",
    type: "error",
  },
  {
    inputs: [],
    name: "keep3r",
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
    name: "nonce",
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
    name: "work",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_factor",
        type: "uint256",
      },
    ],
    name: "workHard",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405161045838038061045883398101604081905261002f91610054565b600080546001600160a01b0319166001600160a01b0392909216919091179055610084565b60006020828403121561006657600080fd5b81516001600160a01b038116811461007d57600080fd5b9392505050565b6103c5806100936000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c8063322e9f04146100515780633bb39c331461005b578063634c7bb51461006e578063affed0e01461009e575b600080fd5b6100596100b5565b005b6100596100693660046102ff565b6101d5565b600054610081906001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b6100a760015481565b604051908152602001610095565b6000546040516335d2155560e11b81523360048201526001600160a01b0390911690636ba42aaa906024016020604051808303816000875af11580156100ff573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101239190610318565b61014057604051637671ff4960e11b815260040160405180910390fd5b60005b6103e8811015610175576001805490600061015d83610357565b9190505550808061016d90610357565b915050610143565b506000546040516317fbade560e21b81523360048201526001600160a01b0390911690635feeb79490602401600060405180830381600087803b1580156101bb57600080fd5b505af11580156101cf573d6000803e3d6000fd5b50505050565b6000546040516335d2155560e11b81523360048201526001600160a01b0390911690636ba42aaa906024016020604051808303816000875af115801561021f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102439190610318565b61026057604051637671ff4960e11b815260040160405180910390fd5b60005b61026f826103e8610370565b81101561029e576001805490600061028683610357565b9190505550808061029690610357565b915050610263565b506000546040516317fbade560e21b81523360048201526001600160a01b0390911690635feeb79490602401600060405180830381600087803b1580156102e457600080fd5b505af11580156102f8573d6000803e3d6000fd5b5050505050565b60006020828403121561031157600080fd5b5035919050565b60006020828403121561032a57600080fd5b8151801515811461033a57600080fd5b9392505050565b634e487b7160e01b600052601160045260246000fd5b60006001820161036957610369610341565b5060010190565b600081600019048311821515161561038a5761038a610341565b50029056fea2646970667358221220e2463c72c1991a7f211500fa0b47d28d3441cb4c353d36c6b6a11e355c3a0e8064736f6c634300080e0033";

export class JobForTest__factory extends ContractFactory {
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
    _keep3r: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<JobForTest> {
    return super.deploy(_keep3r, overrides || {}) as Promise<JobForTest>;
  }
  getDeployTransaction(
    _keep3r: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_keep3r, overrides || {});
  }
  attach(address: string): JobForTest {
    return super.attach(address) as JobForTest;
  }
  connect(signer: Signer): JobForTest__factory {
    return super.connect(signer) as JobForTest__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): JobForTestInterface {
    return new utils.Interface(_abi) as JobForTestInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): JobForTest {
    return new Contract(address, _abi, signerOrProvider) as JobForTest;
  }
}
