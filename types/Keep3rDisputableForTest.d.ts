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

interface Keep3rDisputableForTestInterface extends ethers.utils.Interface {
  functions: {
    "acceptGovernance()": FunctionFragment;
    "addDisputer(address)": FunctionFragment;
    "addSlasher(address)": FunctionFragment;
    "bonds(address,address)": FunctionFragment;
    "canActivateAfter(address,address)": FunctionFragment;
    "canWithdrawAfter(address,address)": FunctionFragment;
    "dispute(address)": FunctionFragment;
    "disputers(address)": FunctionFragment;
    "disputes(address)": FunctionFragment;
    "firstSeen(address)": FunctionFragment;
    "governance()": FunctionFragment;
    "hasBonded(address)": FunctionFragment;
    "jobTokenCredits(address,address)": FunctionFragment;
    "jobs()": FunctionFragment;
    "keepers()": FunctionFragment;
    "pendingBonds(address,address)": FunctionFragment;
    "pendingGovernance()": FunctionFragment;
    "pendingUnbonds(address,address)": FunctionFragment;
    "removeDisputer(address)": FunctionFragment;
    "removeSlasher(address)": FunctionFragment;
    "resolve(address)": FunctionFragment;
    "setGovernance(address)": FunctionFragment;
    "slashers(address)": FunctionFragment;
    "workCompleted(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "acceptGovernance",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "addDisputer", values: [string]): string;
  encodeFunctionData(functionFragment: "addSlasher", values: [string]): string;
  encodeFunctionData(
    functionFragment: "bonds",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "canActivateAfter",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "canWithdrawAfter",
    values: [string, string]
  ): string;
  encodeFunctionData(functionFragment: "dispute", values: [string]): string;
  encodeFunctionData(functionFragment: "disputers", values: [string]): string;
  encodeFunctionData(functionFragment: "disputes", values: [string]): string;
  encodeFunctionData(functionFragment: "firstSeen", values: [string]): string;
  encodeFunctionData(
    functionFragment: "governance",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "hasBonded", values: [string]): string;
  encodeFunctionData(
    functionFragment: "jobTokenCredits",
    values: [string, string]
  ): string;
  encodeFunctionData(functionFragment: "jobs", values?: undefined): string;
  encodeFunctionData(functionFragment: "keepers", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "pendingBonds",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "pendingGovernance",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "pendingUnbonds",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "removeDisputer",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "removeSlasher",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "resolve", values: [string]): string;
  encodeFunctionData(
    functionFragment: "setGovernance",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "slashers", values: [string]): string;
  encodeFunctionData(
    functionFragment: "workCompleted",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "acceptGovernance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addDisputer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "addSlasher", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "bonds", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "canActivateAfter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "canWithdrawAfter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "dispute", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "disputers", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "disputes", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "firstSeen", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "governance", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "hasBonded", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "jobTokenCredits",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "jobs", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "keepers", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pendingBonds",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pendingGovernance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pendingUnbonds",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeDisputer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeSlasher",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "resolve", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setGovernance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "slashers", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "workCompleted",
    data: BytesLike
  ): Result;

  events: {
    "Bonding(address,address,uint256)": EventFragment;
    "Dispute(address,address)": EventFragment;
    "DisputerAdded(address)": EventFragment;
    "DisputerRemoved(address)": EventFragment;
    "GovernanceProposal(address)": EventFragment;
    "GovernanceSet(address)": EventFragment;
    "Resolve(address,address)": EventFragment;
    "SlasherAdded(address)": EventFragment;
    "SlasherRemoved(address)": EventFragment;
    "Unbonding(address,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Bonding"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Dispute"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "DisputerAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "DisputerRemoved"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "GovernanceProposal"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "GovernanceSet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Resolve"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SlasherAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SlasherRemoved"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Unbonding"): EventFragment;
}

export type BondingEvent = TypedEvent<
  [string, string, BigNumber] & {
    _keeper: string;
    _bonding: string;
    _amount: BigNumber;
  }
>;

export type DisputeEvent = TypedEvent<
  [string, string] & { _jobOrKeeper: string; _disputer: string }
>;

export type DisputerAddedEvent = TypedEvent<[string] & { _disputer: string }>;

export type DisputerRemovedEvent = TypedEvent<[string] & { _disputer: string }>;

export type GovernanceProposalEvent = TypedEvent<
  [string] & { _pendingGovernance: string }
>;

export type GovernanceSetEvent = TypedEvent<[string] & { _governance: string }>;

export type ResolveEvent = TypedEvent<
  [string, string] & { _jobOrKeeper: string; _resolver: string }
>;

export type SlasherAddedEvent = TypedEvent<[string] & { _slasher: string }>;

export type SlasherRemovedEvent = TypedEvent<[string] & { _slasher: string }>;

export type UnbondingEvent = TypedEvent<
  [string, string, BigNumber] & {
    _keeperOrJob: string;
    _unbonding: string;
    _amount: BigNumber;
  }
>;

export class Keep3rDisputableForTest extends BaseContract {
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

  interface: Keep3rDisputableForTestInterface;

  functions: {
    acceptGovernance(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    addDisputer(
      _disputer: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    addSlasher(
      _slasher: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    bonds(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    canActivateAfter(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    canWithdrawAfter(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    dispute(
      _jobOrKeeper: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    disputers(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;

    disputes(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;

    firstSeen(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    governance(overrides?: CallOverrides): Promise<[string]>;

    hasBonded(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;

    jobTokenCredits(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    jobs(overrides?: CallOverrides): Promise<[string[]] & { _list: string[] }>;

    keepers(
      overrides?: CallOverrides
    ): Promise<[string[]] & { _list: string[] }>;

    pendingBonds(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    pendingGovernance(overrides?: CallOverrides): Promise<[string]>;

    pendingUnbonds(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    removeDisputer(
      _disputer: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    removeSlasher(
      _slasher: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    resolve(
      _jobOrKeeper: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setGovernance(
      _governance: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    slashers(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;

    workCompleted(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;
  };

  acceptGovernance(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  addDisputer(
    _disputer: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  addSlasher(
    _slasher: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  bonds(
    arg0: string,
    arg1: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  canActivateAfter(
    arg0: string,
    arg1: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  canWithdrawAfter(
    arg0: string,
    arg1: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  dispute(
    _jobOrKeeper: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  disputers(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  disputes(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  firstSeen(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  governance(overrides?: CallOverrides): Promise<string>;

  hasBonded(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  jobTokenCredits(
    arg0: string,
    arg1: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  jobs(overrides?: CallOverrides): Promise<string[]>;

  keepers(overrides?: CallOverrides): Promise<string[]>;

  pendingBonds(
    arg0: string,
    arg1: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  pendingGovernance(overrides?: CallOverrides): Promise<string>;

  pendingUnbonds(
    arg0: string,
    arg1: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  removeDisputer(
    _disputer: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  removeSlasher(
    _slasher: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  resolve(
    _jobOrKeeper: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setGovernance(
    _governance: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  slashers(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  workCompleted(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    acceptGovernance(overrides?: CallOverrides): Promise<void>;

    addDisputer(_disputer: string, overrides?: CallOverrides): Promise<void>;

    addSlasher(_slasher: string, overrides?: CallOverrides): Promise<void>;

    bonds(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    canActivateAfter(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    canWithdrawAfter(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    dispute(_jobOrKeeper: string, overrides?: CallOverrides): Promise<void>;

    disputers(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    disputes(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    firstSeen(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    governance(overrides?: CallOverrides): Promise<string>;

    hasBonded(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    jobTokenCredits(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    jobs(overrides?: CallOverrides): Promise<string[]>;

    keepers(overrides?: CallOverrides): Promise<string[]>;

    pendingBonds(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    pendingGovernance(overrides?: CallOverrides): Promise<string>;

    pendingUnbonds(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    removeDisputer(_disputer: string, overrides?: CallOverrides): Promise<void>;

    removeSlasher(_slasher: string, overrides?: CallOverrides): Promise<void>;

    resolve(_jobOrKeeper: string, overrides?: CallOverrides): Promise<void>;

    setGovernance(
      _governance: string,
      overrides?: CallOverrides
    ): Promise<void>;

    slashers(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    workCompleted(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {
    "Bonding(address,address,uint256)"(
      _keeper?: string | null,
      _bonding?: string | null,
      _amount?: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { _keeper: string; _bonding: string; _amount: BigNumber }
    >;

    Bonding(
      _keeper?: string | null,
      _bonding?: string | null,
      _amount?: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { _keeper: string; _bonding: string; _amount: BigNumber }
    >;

    "Dispute(address,address)"(
      _jobOrKeeper?: string | null,
      _disputer?: string | null
    ): TypedEventFilter<
      [string, string],
      { _jobOrKeeper: string; _disputer: string }
    >;

    Dispute(
      _jobOrKeeper?: string | null,
      _disputer?: string | null
    ): TypedEventFilter<
      [string, string],
      { _jobOrKeeper: string; _disputer: string }
    >;

    "DisputerAdded(address)"(
      _disputer?: null
    ): TypedEventFilter<[string], { _disputer: string }>;

    DisputerAdded(
      _disputer?: null
    ): TypedEventFilter<[string], { _disputer: string }>;

    "DisputerRemoved(address)"(
      _disputer?: null
    ): TypedEventFilter<[string], { _disputer: string }>;

    DisputerRemoved(
      _disputer?: null
    ): TypedEventFilter<[string], { _disputer: string }>;

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

    "Resolve(address,address)"(
      _jobOrKeeper?: string | null,
      _resolver?: string | null
    ): TypedEventFilter<
      [string, string],
      { _jobOrKeeper: string; _resolver: string }
    >;

    Resolve(
      _jobOrKeeper?: string | null,
      _resolver?: string | null
    ): TypedEventFilter<
      [string, string],
      { _jobOrKeeper: string; _resolver: string }
    >;

    "SlasherAdded(address)"(
      _slasher?: null
    ): TypedEventFilter<[string], { _slasher: string }>;

    SlasherAdded(
      _slasher?: null
    ): TypedEventFilter<[string], { _slasher: string }>;

    "SlasherRemoved(address)"(
      _slasher?: null
    ): TypedEventFilter<[string], { _slasher: string }>;

    SlasherRemoved(
      _slasher?: null
    ): TypedEventFilter<[string], { _slasher: string }>;

    "Unbonding(address,address,uint256)"(
      _keeperOrJob?: string | null,
      _unbonding?: string | null,
      _amount?: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { _keeperOrJob: string; _unbonding: string; _amount: BigNumber }
    >;

    Unbonding(
      _keeperOrJob?: string | null,
      _unbonding?: string | null,
      _amount?: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { _keeperOrJob: string; _unbonding: string; _amount: BigNumber }
    >;
  };

  estimateGas: {
    acceptGovernance(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    addDisputer(
      _disputer: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    addSlasher(
      _slasher: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    bonds(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    canActivateAfter(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    canWithdrawAfter(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    dispute(
      _jobOrKeeper: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    disputers(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    disputes(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    firstSeen(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    governance(overrides?: CallOverrides): Promise<BigNumber>;

    hasBonded(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    jobTokenCredits(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    jobs(overrides?: CallOverrides): Promise<BigNumber>;

    keepers(overrides?: CallOverrides): Promise<BigNumber>;

    pendingBonds(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    pendingGovernance(overrides?: CallOverrides): Promise<BigNumber>;

    pendingUnbonds(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    removeDisputer(
      _disputer: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    removeSlasher(
      _slasher: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    resolve(
      _jobOrKeeper: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setGovernance(
      _governance: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    slashers(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    workCompleted(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    acceptGovernance(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    addDisputer(
      _disputer: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    addSlasher(
      _slasher: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    bonds(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    canActivateAfter(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    canWithdrawAfter(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    dispute(
      _jobOrKeeper: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    disputers(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    disputes(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    firstSeen(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    governance(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    hasBonded(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    jobTokenCredits(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    jobs(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    keepers(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pendingBonds(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    pendingGovernance(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pendingUnbonds(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    removeDisputer(
      _disputer: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    removeSlasher(
      _slasher: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    resolve(
      _jobOrKeeper: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setGovernance(
      _governance: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    slashers(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    workCompleted(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
