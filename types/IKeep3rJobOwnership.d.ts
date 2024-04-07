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

interface IKeep3rJobOwnershipInterface extends ethers.utils.Interface {
  functions: {
    "acceptJobOwnership(address)": FunctionFragment;
    "changeJobOwnership(address,address)": FunctionFragment;
    "jobOwner(address)": FunctionFragment;
    "jobPendingOwner(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "acceptJobOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "changeJobOwnership",
    values: [string, string]
  ): string;
  encodeFunctionData(functionFragment: "jobOwner", values: [string]): string;
  encodeFunctionData(
    functionFragment: "jobPendingOwner",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "acceptJobOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "changeJobOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "jobOwner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "jobPendingOwner",
    data: BytesLike
  ): Result;

  events: {
    "JobOwnershipAssent(address,address,address)": EventFragment;
    "JobOwnershipChange(address,address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "JobOwnershipAssent"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "JobOwnershipChange"): EventFragment;
}

export type JobOwnershipAssentEvent = TypedEvent<
  [string, string, string] & {
    _job: string;
    _previousOwner: string;
    _newOwner: string;
  }
>;

export type JobOwnershipChangeEvent = TypedEvent<
  [string, string, string] & {
    _job: string;
    _owner: string;
    _pendingOwner: string;
  }
>;

export class IKeep3rJobOwnership extends BaseContract {
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

  interface: IKeep3rJobOwnershipInterface;

  functions: {
    acceptJobOwnership(
      _job: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    changeJobOwnership(
      _job: string,
      _newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    jobOwner(
      _job: string,
      overrides?: CallOverrides
    ): Promise<[string] & { _owner: string }>;

    jobPendingOwner(
      _job: string,
      overrides?: CallOverrides
    ): Promise<[string] & { _pendingOwner: string }>;
  };

  acceptJobOwnership(
    _job: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  changeJobOwnership(
    _job: string,
    _newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  jobOwner(_job: string, overrides?: CallOverrides): Promise<string>;

  jobPendingOwner(_job: string, overrides?: CallOverrides): Promise<string>;

  callStatic: {
    acceptJobOwnership(_job: string, overrides?: CallOverrides): Promise<void>;

    changeJobOwnership(
      _job: string,
      _newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    jobOwner(_job: string, overrides?: CallOverrides): Promise<string>;

    jobPendingOwner(_job: string, overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "JobOwnershipAssent(address,address,address)"(
      _job?: string | null,
      _previousOwner?: string | null,
      _newOwner?: string | null
    ): TypedEventFilter<
      [string, string, string],
      { _job: string; _previousOwner: string; _newOwner: string }
    >;

    JobOwnershipAssent(
      _job?: string | null,
      _previousOwner?: string | null,
      _newOwner?: string | null
    ): TypedEventFilter<
      [string, string, string],
      { _job: string; _previousOwner: string; _newOwner: string }
    >;

    "JobOwnershipChange(address,address,address)"(
      _job?: string | null,
      _owner?: string | null,
      _pendingOwner?: string | null
    ): TypedEventFilter<
      [string, string, string],
      { _job: string; _owner: string; _pendingOwner: string }
    >;

    JobOwnershipChange(
      _job?: string | null,
      _owner?: string | null,
      _pendingOwner?: string | null
    ): TypedEventFilter<
      [string, string, string],
      { _job: string; _owner: string; _pendingOwner: string }
    >;
  };

  estimateGas: {
    acceptJobOwnership(
      _job: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    changeJobOwnership(
      _job: string,
      _newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    jobOwner(_job: string, overrides?: CallOverrides): Promise<BigNumber>;

    jobPendingOwner(
      _job: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    acceptJobOwnership(
      _job: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    changeJobOwnership(
      _job: string,
      _newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    jobOwner(
      _job: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    jobPendingOwner(
      _job: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
