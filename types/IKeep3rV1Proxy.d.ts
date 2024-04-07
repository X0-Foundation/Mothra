/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface IKeep3rV1ProxyInterface extends ethers.utils.Interface {
  functions: {
    "acceptGovernance()": FunctionFragment;
    "acceptKeep3rV1Governance()": FunctionFragment;
    "addJob(address)": FunctionFragment;
    "addKPRCredit(address,uint256)": FunctionFragment;
    "addRecipient(address,uint256)": FunctionFragment;
    "addVotes(address,uint256)": FunctionFragment;
    "approveLiquidity(address)": FunctionFragment;
    "caps(address)": FunctionFragment;
    "dispute(address)": FunctionFragment;
    "draw()": FunctionFragment;
    "governance()": FunctionFragment;
    "keep3rV1()": FunctionFragment;
    "mint(address,uint256)": FunctionFragment;
    "minter()": FunctionFragment;
    "next(address)": FunctionFragment;
    "pendingGovernance()": FunctionFragment;
    "recipients()": FunctionFragment;
    "recipientsCaps()": FunctionFragment;
    "removeJob(address)": FunctionFragment;
    "removeRecipient(address)": FunctionFragment;
    "removeVotes(address,uint256)": FunctionFragment;
    "resolve(address)": FunctionFragment;
    "revoke(address)": FunctionFragment;
    "revokeLiquidity(address)": FunctionFragment;
    "setGovernance(address)": FunctionFragment;
    "setKeep3rHelper(address)": FunctionFragment;
    "setKeep3rV1(address)": FunctionFragment;
    "setKeep3rV1Governance(address)": FunctionFragment;
    "setMinter(address)": FunctionFragment;
    "slash(address,address,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "acceptGovernance",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "acceptKeep3rV1Governance",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "addJob", values: [string]): string;
  encodeFunctionData(
    functionFragment: "addKPRCredit",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "addRecipient",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "addVotes",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "approveLiquidity",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "caps", values: [string]): string;
  encodeFunctionData(functionFragment: "dispute", values: [string]): string;
  encodeFunctionData(functionFragment: "draw", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "governance",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "keep3rV1", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "mint",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "minter", values?: undefined): string;
  encodeFunctionData(functionFragment: "next", values: [string]): string;
  encodeFunctionData(
    functionFragment: "pendingGovernance",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "recipients",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "recipientsCaps",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "removeJob", values: [string]): string;
  encodeFunctionData(
    functionFragment: "removeRecipient",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "removeVotes",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "resolve", values: [string]): string;
  encodeFunctionData(functionFragment: "revoke", values: [string]): string;
  encodeFunctionData(
    functionFragment: "revokeLiquidity",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setGovernance",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setKeep3rHelper",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "setKeep3rV1", values: [string]): string;
  encodeFunctionData(
    functionFragment: "setKeep3rV1Governance",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "setMinter", values: [string]): string;
  encodeFunctionData(
    functionFragment: "slash",
    values: [string, string, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "acceptGovernance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "acceptKeep3rV1Governance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "addJob", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "addKPRCredit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addRecipient",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "addVotes", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "approveLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "caps", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "dispute", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "draw", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "governance", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "keep3rV1", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "minter", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "next", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pendingGovernance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "recipients", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "recipientsCaps",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "removeJob", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "removeRecipient",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeVotes",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "resolve", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "revoke", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "revokeLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setGovernance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setKeep3rHelper",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setKeep3rV1",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setKeep3rV1Governance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setMinter", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "slash", data: BytesLike): Result;

  events: {
    "GovernanceProposal(address)": EventFragment;
    "GovernanceSet(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "GovernanceProposal"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "GovernanceSet"): EventFragment;
}

export type GovernanceProposalEvent = TypedEvent<
  [string] & { _pendingGovernance: string }
>;

export type GovernanceSetEvent = TypedEvent<[string] & { _governance: string }>;

export class IKeep3rV1Proxy extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: IKeep3rV1ProxyInterface;

  functions: {
    acceptGovernance(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    acceptKeep3rV1Governance(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    addJob(
      _job: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    addKPRCredit(
      _job: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    addRecipient(
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    addVotes(
      _voter: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    approveLiquidity(
      _liquidity: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    caps(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    dispute(
      _keeper: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    draw(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    governance(
      overrides?: CallOverrides
    ): Promise<[string] & { _governance: string }>;

    keep3rV1(overrides?: CallOverrides): Promise<[string]>;

    "mint(address,uint256)"(
      _account: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "mint(uint256)"(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    minter(overrides?: CallOverrides): Promise<[string]>;

    next(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    pendingGovernance(
      overrides?: CallOverrides
    ): Promise<[string] & { _pendingGovernance: string }>;

    recipients(overrides?: CallOverrides): Promise<[string[]]>;

    recipientsCaps(
      overrides?: CallOverrides
    ): Promise<
      [([string, BigNumber] & { recipient: string; caps: BigNumber })[]]
    >;

    removeJob(
      _job: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    removeRecipient(
      recipient: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    removeVotes(
      _voter: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    resolve(
      _keeper: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    revoke(
      _keeper: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    revokeLiquidity(
      _liquidity: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setGovernance(
      _governance: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setKeep3rHelper(
      _keep3rHelper: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setKeep3rV1(
      _keep3rV1: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setKeep3rV1Governance(
      _governance: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setMinter(
      _minter: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    slash(
      _bonded: string,
      _keeper: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  acceptGovernance(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  acceptKeep3rV1Governance(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  addJob(
    _job: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  addKPRCredit(
    _job: string,
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  addRecipient(
    recipient: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  addVotes(
    _voter: string,
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  approveLiquidity(
    _liquidity: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  caps(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  dispute(
    _keeper: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  draw(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  governance(overrides?: CallOverrides): Promise<string>;

  keep3rV1(overrides?: CallOverrides): Promise<string>;

  "mint(address,uint256)"(
    _account: string,
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "mint(uint256)"(
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  minter(overrides?: CallOverrides): Promise<string>;

  next(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  pendingGovernance(overrides?: CallOverrides): Promise<string>;

  recipients(overrides?: CallOverrides): Promise<string[]>;

  recipientsCaps(
    overrides?: CallOverrides
  ): Promise<([string, BigNumber] & { recipient: string; caps: BigNumber })[]>;

  removeJob(
    _job: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  removeRecipient(
    recipient: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  removeVotes(
    _voter: string,
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  resolve(
    _keeper: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  revoke(
    _keeper: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  revokeLiquidity(
    _liquidity: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setGovernance(
    _governance: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setKeep3rHelper(
    _keep3rHelper: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setKeep3rV1(
    _keep3rV1: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setKeep3rV1Governance(
    _governance: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setMinter(
    _minter: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  slash(
    _bonded: string,
    _keeper: string,
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    acceptGovernance(overrides?: CallOverrides): Promise<void>;

    acceptKeep3rV1Governance(overrides?: CallOverrides): Promise<void>;

    addJob(_job: string, overrides?: CallOverrides): Promise<void>;

    addKPRCredit(
      _job: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    addRecipient(
      recipient: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    addVotes(
      _voter: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    approveLiquidity(
      _liquidity: string,
      overrides?: CallOverrides
    ): Promise<void>;

    caps(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    dispute(_keeper: string, overrides?: CallOverrides): Promise<void>;

    draw(overrides?: CallOverrides): Promise<BigNumber>;

    governance(overrides?: CallOverrides): Promise<string>;

    keep3rV1(overrides?: CallOverrides): Promise<string>;

    "mint(address,uint256)"(
      _account: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "mint(uint256)"(
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    minter(overrides?: CallOverrides): Promise<string>;

    next(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    pendingGovernance(overrides?: CallOverrides): Promise<string>;

    recipients(overrides?: CallOverrides): Promise<string[]>;

    recipientsCaps(
      overrides?: CallOverrides
    ): Promise<
      ([string, BigNumber] & { recipient: string; caps: BigNumber })[]
    >;

    removeJob(_job: string, overrides?: CallOverrides): Promise<void>;

    removeRecipient(
      recipient: string,
      overrides?: CallOverrides
    ): Promise<void>;

    removeVotes(
      _voter: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    resolve(_keeper: string, overrides?: CallOverrides): Promise<void>;

    revoke(_keeper: string, overrides?: CallOverrides): Promise<void>;

    revokeLiquidity(
      _liquidity: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setGovernance(
      _governance: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setKeep3rHelper(
      _keep3rHelper: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setKeep3rV1(_keep3rV1: string, overrides?: CallOverrides): Promise<void>;

    setKeep3rV1Governance(
      _governance: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setMinter(_minter: string, overrides?: CallOverrides): Promise<void>;

    slash(
      _bonded: string,
      _keeper: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "GovernanceProposal(address)"(
      _pendingGovernance?: null
    ): TypedEventFilter<[string], { _pendingGovernance: string }>;

    GovernanceProposal(
      _pendingGovernance?: null
    ): TypedEventFilter<[string], { _pendingGovernance: string }>;

    "GovernanceSet(address)"(
      _governance?: null
    ): TypedEventFilter<[string], { _governance: string }>;

    GovernanceSet(
      _governance?: null
    ): TypedEventFilter<[string], { _governance: string }>;
  };

  estimateGas: {
    acceptGovernance(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    acceptKeep3rV1Governance(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    addJob(
      _job: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    addKPRCredit(
      _job: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    addRecipient(
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    addVotes(
      _voter: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    approveLiquidity(
      _liquidity: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    caps(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    dispute(
      _keeper: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    draw(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    governance(overrides?: CallOverrides): Promise<BigNumber>;

    keep3rV1(overrides?: CallOverrides): Promise<BigNumber>;

    "mint(address,uint256)"(
      _account: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "mint(uint256)"(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    minter(overrides?: CallOverrides): Promise<BigNumber>;

    next(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    pendingGovernance(overrides?: CallOverrides): Promise<BigNumber>;

    recipients(overrides?: CallOverrides): Promise<BigNumber>;

    recipientsCaps(overrides?: CallOverrides): Promise<BigNumber>;

    removeJob(
      _job: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    removeRecipient(
      recipient: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    removeVotes(
      _voter: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    resolve(
      _keeper: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    revoke(
      _keeper: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    revokeLiquidity(
      _liquidity: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setGovernance(
      _governance: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setKeep3rHelper(
      _keep3rHelper: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setKeep3rV1(
      _keep3rV1: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setKeep3rV1Governance(
      _governance: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setMinter(
      _minter: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    slash(
      _bonded: string,
      _keeper: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    acceptGovernance(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    acceptKeep3rV1Governance(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    addJob(
      _job: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    addKPRCredit(
      _job: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    addRecipient(
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    addVotes(
      _voter: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    approveLiquidity(
      _liquidity: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    caps(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    dispute(
      _keeper: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    draw(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    governance(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    keep3rV1(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "mint(address,uint256)"(
      _account: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "mint(uint256)"(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    minter(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    next(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    pendingGovernance(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    recipients(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    recipientsCaps(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    removeJob(
      _job: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    removeRecipient(
      recipient: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    removeVotes(
      _voter: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    resolve(
      _keeper: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    revoke(
      _keeper: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    revokeLiquidity(
      _liquidity: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setGovernance(
      _governance: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setKeep3rHelper(
      _keep3rHelper: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setKeep3rV1(
      _keep3rV1: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setKeep3rV1Governance(
      _governance: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setMinter(
      _minter: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    slash(
      _bonded: string,
      _keeper: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
