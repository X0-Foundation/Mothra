/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  IKeep3rJobFundableLiquidity,
  IKeep3rJobFundableLiquidityInterface,
} from "../IKeep3rJobFundableLiquidity";

const _abi = [
  {
    inputs: [],
    name: "JobLiquidityInsufficient",
    type: "error",
  },
  {
    inputs: [],
    name: "JobLiquidityLessThanMin",
    type: "error",
  },
  {
    inputs: [],
    name: "JobLiquidityUnexistent",
    type: "error",
  },
  {
    inputs: [],
    name: "LiquidityPairApproved",
    type: "error",
  },
  {
    inputs: [],
    name: "LiquidityPairUnapproved",
    type: "error",
  },
  {
    inputs: [],
    name: "LiquidityPairUnexistent",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_job",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_liquidity",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_provider",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "LiquidityAddition",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_liquidity",
        type: "address",
      },
    ],
    name: "LiquidityApproval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_job",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_rewardedAt",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_currentCredits",
        type: "uint256",
      },
    ],
    name: "LiquidityCreditsForced",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_job",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_rewardedAt",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_currentCredits",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_periodCredits",
        type: "uint256",
      },
    ],
    name: "LiquidityCreditsReward",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_liquidity",
        type: "address",
      },
    ],
    name: "LiquidityRevocation",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_job",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_liquidity",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_receiver",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "LiquidityWithdrawal",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_job",
        type: "address",
      },
      {
        internalType: "address",
        name: "_liquidity",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "addLiquidityToJob",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_liquidity",
        type: "address",
      },
    ],
    name: "approveLiquidity",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "approvedLiquidities",
    outputs: [
      {
        internalType: "address[]",
        name: "_list",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_job",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "forceLiquidityCreditsToJob",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_job",
        type: "address",
      },
    ],
    name: "jobLiquidityCredits",
    outputs: [
      {
        internalType: "uint256",
        name: "_amount",
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
        name: "_job",
        type: "address",
      },
    ],
    name: "jobPeriodCredits",
    outputs: [
      {
        internalType: "uint256",
        name: "_amount",
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
        name: "_job",
        type: "address",
      },
      {
        internalType: "address",
        name: "_liquidity",
        type: "address",
      },
    ],
    name: "liquidityAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "_amount",
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
        name: "_liquidity",
        type: "address",
      },
    ],
    name: "observeLiquidity",
    outputs: [
      {
        components: [
          {
            internalType: "int56",
            name: "current",
            type: "int56",
          },
          {
            internalType: "int56",
            name: "difference",
            type: "int56",
          },
          {
            internalType: "uint256",
            name: "period",
            type: "uint256",
          },
        ],
        internalType: "struct IKeep3rJobFundableLiquidity.TickCache",
        name: "_tickCache",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_liquidity",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "quoteLiquidity",
    outputs: [
      {
        internalType: "uint256",
        name: "_periodCredits",
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
        name: "_liquidity",
        type: "address",
      },
    ],
    name: "revokeLiquidity",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_job",
        type: "address",
      },
    ],
    name: "rewardedAt",
    outputs: [
      {
        internalType: "uint256",
        name: "_timestamp",
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
        name: "_job",
        type: "address",
      },
    ],
    name: "totalJobCredits",
    outputs: [
      {
        internalType: "uint256",
        name: "_amount",
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
        name: "_job",
        type: "address",
      },
      {
        internalType: "address",
        name: "_liquidity",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "unbondLiquidityFromJob",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_job",
        type: "address",
      },
      {
        internalType: "address",
        name: "_liquidity",
        type: "address",
      },
      {
        internalType: "address",
        name: "_receiver",
        type: "address",
      },
    ],
    name: "withdrawLiquidityFromJob",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_job",
        type: "address",
      },
    ],
    name: "workedAt",
    outputs: [
      {
        internalType: "uint256",
        name: "_timestamp",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class IKeep3rJobFundableLiquidity__factory {
  static readonly abi = _abi;
  static createInterface(): IKeep3rJobFundableLiquidityInterface {
    return new utils.Interface(_abi) as IKeep3rJobFundableLiquidityInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IKeep3rJobFundableLiquidity {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IKeep3rJobFundableLiquidity;
  }
}