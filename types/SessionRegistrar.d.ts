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

interface SessionRegistrarInterface extends ethers.utils.Interface {
  functions: {
    "getCurrentActionType()": FunctionFragment;
    "lastSession()": FunctionFragment;
    "pause()": FunctionFragment;
    "paused()": FunctionFragment;
    "registerAction(uint8,bool)": FunctionFragment;
    "resume()": FunctionFragment;
    "session()": FunctionFragment;
    "sessionsLastSeenBySType(uint8)": FunctionFragment;
    "unregisterAction()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getCurrentActionType",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "lastSession",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "pause", values?: undefined): string;
  encodeFunctionData(functionFragment: "paused", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "registerAction",
    values: [BigNumberish, boolean]
  ): string;
  encodeFunctionData(functionFragment: "resume", values?: undefined): string;
  encodeFunctionData(functionFragment: "session", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "sessionsLastSeenBySType",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "unregisterAction",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "getCurrentActionType",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "lastSession",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "registerAction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "resume", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "session", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "sessionsLastSeenBySType",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "unregisterAction",
    data: BytesLike
  ): Result;

  events: {};
}

export class SessionRegistrar extends BaseContract {
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

  interface: SessionRegistrarInterface;

  functions: {
    getCurrentActionType(overrides?: CallOverrides): Promise<[number]>;

    lastSession(overrides?: CallOverrides): Promise<[BigNumber]>;

    pause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    paused(overrides?: CallOverrides): Promise<[boolean]>;

    registerAction(
      actionType: BigNumberish,
      blockReentry: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    resume(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    session(overrides?: CallOverrides): Promise<[BigNumber]>;

    sessionsLastSeenBySType(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    unregisterAction(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  getCurrentActionType(overrides?: CallOverrides): Promise<number>;

  lastSession(overrides?: CallOverrides): Promise<BigNumber>;

  pause(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  paused(overrides?: CallOverrides): Promise<boolean>;

  registerAction(
    actionType: BigNumberish,
    blockReentry: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  resume(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  session(overrides?: CallOverrides): Promise<BigNumber>;

  sessionsLastSeenBySType(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  unregisterAction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    getCurrentActionType(overrides?: CallOverrides): Promise<number>;

    lastSession(overrides?: CallOverrides): Promise<BigNumber>;

    pause(overrides?: CallOverrides): Promise<void>;

    paused(overrides?: CallOverrides): Promise<boolean>;

    registerAction(
      actionType: BigNumberish,
      blockReentry: boolean,
      overrides?: CallOverrides
    ): Promise<
      [number, BigNumber, BigNumber, boolean] & {
        actionType: number;
        session: BigNumber;
        lastSession: BigNumber;
        isUserAction: boolean;
      }
    >;

    resume(overrides?: CallOverrides): Promise<void>;

    session(overrides?: CallOverrides): Promise<BigNumber>;

    sessionsLastSeenBySType(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    unregisterAction(overrides?: CallOverrides): Promise<void>;
  };

  filters: {};

  estimateGas: {
    getCurrentActionType(overrides?: CallOverrides): Promise<BigNumber>;

    lastSession(overrides?: CallOverrides): Promise<BigNumber>;

    pause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    paused(overrides?: CallOverrides): Promise<BigNumber>;

    registerAction(
      actionType: BigNumberish,
      blockReentry: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    resume(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    session(overrides?: CallOverrides): Promise<BigNumber>;

    sessionsLastSeenBySType(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    unregisterAction(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getCurrentActionType(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    lastSession(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    registerAction(
      actionType: BigNumberish,
      blockReentry: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    resume(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    session(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    sessionsLastSeenBySType(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    unregisterAction(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
