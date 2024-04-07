/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  IKeep3rJobMigration,
  IKeep3rJobMigrationInterface,
} from "../IKeep3rJobMigration";

const _abi = [
  {
    inputs: [],
    name: "JobMigrationImpossible",
    type: "error",
  },
  {
    inputs: [],
    name: "JobMigrationLocked",
    type: "error",
  },
  {
    inputs: [],
    name: "JobMigrationUnavailable",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_fromJob",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "_toJob",
        type: "address",
      },
    ],
    name: "JobMigrationRequested",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_fromJob",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_toJob",
        type: "address",
      },
    ],
    name: "JobMigrationSuccessful",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_fromJob",
        type: "address",
      },
      {
        internalType: "address",
        name: "_toJob",
        type: "address",
      },
    ],
    name: "acceptJobMigration",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_fromJob",
        type: "address",
      },
      {
        internalType: "address",
        name: "_toJob",
        type: "address",
      },
    ],
    name: "migrateJob",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_fromJob",
        type: "address",
      },
    ],
    name: "pendingJobMigrations",
    outputs: [
      {
        internalType: "address",
        name: "_toJob",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class IKeep3rJobMigration__factory {
  static readonly abi = _abi;
  static createInterface(): IKeep3rJobMigrationInterface {
    return new utils.Interface(_abi) as IKeep3rJobMigrationInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IKeep3rJobMigration {
    return new Contract(address, _abi, signerOrProvider) as IKeep3rJobMigration;
  }
}
