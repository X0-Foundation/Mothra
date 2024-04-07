/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  SessionRegistrar,
  SessionRegistrarInterface,
} from "../SessionRegistrar";

const _abi = [
  {
    inputs: [],
    name: "getCurrentActionType",
    outputs: [
      {
        internalType: "enum ActionType",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lastSession",
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
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
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
    inputs: [
      {
        internalType: "enum ActionType",
        name: "actionType",
        type: "uint8",
      },
      {
        internalType: "bool",
        name: "blockReentry",
        type: "bool",
      },
    ],
    name: "registerAction",
    outputs: [
      {
        components: [
          {
            internalType: "enum ActionType",
            name: "actionType",
            type: "uint8",
          },
          {
            internalType: "uint256",
            name: "session",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "lastSession",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "isUserAction",
            type: "bool",
          },
        ],
        internalType: "struct ActionParams",
        name: "actionParams",
        type: "tuple",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "resume",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "session",
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
        internalType: "enum ActionType",
        name: "",
        type: "uint8",
      },
    ],
    name: "sessionsLastSeenBySType",
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
    name: "unregisterAction",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class SessionRegistrar__factory {
  static readonly abi = _abi;
  static createInterface(): SessionRegistrarInterface {
    return new utils.Interface(_abi) as SessionRegistrarInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SessionRegistrar {
    return new Contract(address, _abi, signerOrProvider) as SessionRegistrar;
  }
}
