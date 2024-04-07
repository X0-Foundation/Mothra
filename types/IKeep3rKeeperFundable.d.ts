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

interface IKeep3rKeeperFundableInterface extends ethers.utils.Interface {
  functions: {
    "activate(address)": FunctionFragment;
    "bond(address,uint256)": FunctionFragment;
    "unbond(address,uint256)": FunctionFragment;
    "withdraw(address)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "activate", values: [string]): string;
  encodeFunctionData(
    functionFragment: "bond",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "unbond",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "withdraw", values: [string]): string;

  decodeFunctionResult(functionFragment: "activate", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "bond", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "unbond", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;

  events: {
    "Activation(address,address,uint256)": EventFragment;
    "Withdrawal(address,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Activation"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Withdrawal"): EventFragment;
}

export type ActivationEvent = TypedEvent<
  [string, string, BigNumber] & {
    _keeper: string;
    _bond: string;
    _amount: BigNumber;
  }
>;

export type WithdrawalEvent = TypedEvent<
  [string, string, BigNumber] & {
    _keeper: string;
    _bond: string;
    _amount: BigNumber;
  }
>;

export class IKeep3rKeeperFundable extends BaseContract {
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

  interface: IKeep3rKeeperFundableInterface;

  functions: {
    activate(
      _bonding: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    bond(
      _bonding: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    unbond(
      _bonding: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withdraw(
      _bonding: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  activate(
    _bonding: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  bond(
    _bonding: string,
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  unbond(
    _bonding: string,
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withdraw(
    _bonding: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    activate(_bonding: string, overrides?: CallOverrides): Promise<void>;

    bond(
      _bonding: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    unbond(
      _bonding: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    withdraw(_bonding: string, overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "Activation(address,address,uint256)"(
      _keeper?: string | null,
      _bond?: string | null,
      _amount?: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { _keeper: string; _bond: string; _amount: BigNumber }
    >;

    Activation(
      _keeper?: string | null,
      _bond?: string | null,
      _amount?: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { _keeper: string; _bond: string; _amount: BigNumber }
    >;

    "Withdrawal(address,address,uint256)"(
      _keeper?: string | null,
      _bond?: string | null,
      _amount?: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { _keeper: string; _bond: string; _amount: BigNumber }
    >;

    Withdrawal(
      _keeper?: string | null,
      _bond?: string | null,
      _amount?: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { _keeper: string; _bond: string; _amount: BigNumber }
    >;
  };

  estimateGas: {
    activate(
      _bonding: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    bond(
      _bonding: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    unbond(
      _bonding: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    withdraw(
      _bonding: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    activate(
      _bonding: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    bond(
      _bonding: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    unbond(
      _bonding: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    withdraw(
      _bonding: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
