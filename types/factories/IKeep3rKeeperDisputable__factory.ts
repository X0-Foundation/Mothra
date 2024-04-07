/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  IKeep3rKeeperDisputable,
  IKeep3rKeeperDisputableInterface,
} from "../IKeep3rKeeperDisputable";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_keeper",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_slasher",
        type: "address",
      },
    ],
    name: "KeeperRevoke",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_keeper",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_slasher",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "KeeperSlash",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_keeper",
        type: "address",
      },
    ],
    name: "revoke",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_keeper",
        type: "address",
      },
      {
        internalType: "address",
        name: "_bonded",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_bondAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_unbondAmount",
        type: "uint256",
      },
    ],
    name: "slash",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IKeep3rKeeperDisputable__factory {
  static readonly abi = _abi;
  static createInterface(): IKeep3rKeeperDisputableInterface {
    return new utils.Interface(_abi) as IKeep3rKeeperDisputableInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IKeep3rKeeperDisputable {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IKeep3rKeeperDisputable;
  }
}
