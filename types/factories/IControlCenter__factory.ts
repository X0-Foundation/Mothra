/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  IControlCenter,
  IControlCenterInterface,
} from "../IControlCenter";

const _abi = [
  {
    inputs: [
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
      {
        internalType: "address",
        name: "input",
        type: "address",
      },
      {
        internalType: "address",
        name: "output",
        type: "address",
      },
    ],
    name: "captureInitialPairState",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "pair",
            type: "address",
          },
          {
            internalType: "address",
            name: "token0",
            type: "address",
          },
          {
            internalType: "address",
            name: "token1",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "reserve0",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "reserve1",
            type: "uint256",
          },
          {
            internalType: "uint8",
            name: "decimal0",
            type: "uint8",
          },
          {
            internalType: "uint8",
            name: "decimal1",
            type: "uint8",
          },
        ],
        internalType: "struct PairSnapshot",
        name: "pairSnapshot",
        type: "tuple",
      },
      {
        internalType: "bool",
        name: "isNichePair",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "session",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "address",
            name: "pair",
            type: "address",
          },
          {
            internalType: "address",
            name: "token0",
            type: "address",
          },
          {
            internalType: "address",
            name: "token1",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "reserve0",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "reserve1",
            type: "uint256",
          },
          {
            internalType: "uint8",
            name: "decimal0",
            type: "uint8",
          },
          {
            internalType: "uint8",
            name: "decimal1",
            type: "uint8",
          },
        ],
        internalType: "struct PairSnapshot",
        name: "pairSnapshot",
        type: "tuple",
      },
    ],
    name: "capturePairStateAtSessionDetect",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "isNichePair",
        type: "bool",
      },
      {
        components: [
          {
            internalType: "address",
            name: "pair",
            type: "address",
          },
          {
            internalType: "address",
            name: "token0",
            type: "address",
          },
          {
            internalType: "address",
            name: "token1",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "reserve0",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "reserve1",
            type: "uint256",
          },
          {
            internalType: "uint8",
            name: "decimal0",
            type: "uint8",
          },
          {
            internalType: "uint8",
            name: "decimal1",
            type: "uint8",
          },
        ],
        internalType: "struct PairSnapshot",
        name: "pairSnapshot",
        type: "tuple",
      },
    ],
    name: "ruleOutDeviatedPrice",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "pair",
            type: "address",
          },
          {
            internalType: "address",
            name: "token0",
            type: "address",
          },
          {
            internalType: "address",
            name: "token1",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "reserve0",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "reserve1",
            type: "uint256",
          },
          {
            internalType: "uint8",
            name: "decimal0",
            type: "uint8",
          },
          {
            internalType: "uint8",
            name: "decimal1",
            type: "uint8",
          },
        ],
        internalType: "struct PairSnapshot",
        name: "ps",
        type: "tuple",
      },
    ],
    name: "ruleOutInvalidLiquidity",
    outputs: [],
    stateMutability: "view",
    type: "function",
  },
];

export class IControlCenter__factory {
  static readonly abi = _abi;
  static createInterface(): IControlCenterInterface {
    return new utils.Interface(_abi) as IControlCenterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IControlCenter {
    return new Contract(address, _abi, signerOrProvider) as IControlCenter;
  }
}
