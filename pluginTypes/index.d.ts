declare module "bignumber.js" {
  export default BigNumber;
  export namespace BigNumber {
    interface Config {
      DECIMAL_PLACES?: number;
      ROUNDING_MODE?: BigNumber.RoundingMode;
      EXPONENTIAL_AT?: number | [number, number];

      RANGE?: number | [number, number];

      CRYPTO?: boolean;

      MODULO_MODE?: BigNumber.ModuloMode;

      POW_PRECISION?: number;

      FORMAT?: BigNumber.Format;

      ALPHABET?: string;
    }

    interface Format {

      prefix?: string;

      decimalSeparator?: string;

      groupSeparator?: string;

      groupSize?: number;

      secondaryGroupSize?: number;

      fractionGroupSeparator?: string;

      fractionGroupSize?: number;

      suffix?: string;
    }
    interface Instance {

      readonly c: number[] | null;

      readonly e: number | null;

      readonly s: number | null;
      [key: string]: any;
    }
    type Constructor = typeof BigNumber;
    type ModuloMode = 0 | 1 | 3 | 6 | 9;
    type RoundingMode = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
    type Value = string | number | Instance;
  }
  export class BigNumber implements BigNumber.Instance {

    private readonly _isBigNumber: true;

    readonly c: number[] | null;

    readonly e: number | null;

    readonly s: number | null;

    constructor(n: BigNumber.Value, base?: number);

    absoluteValue(): BigNumber;

    abs(): BigNumber;

    comparedTo(n: BigNumber.Value, base?: number): number;

    decimalPlaces(): number;
    decimalPlaces(decimalPlaces: number, roundingMode?: BigNumber.RoundingMode): BigNumber;

    dp(): number;
    dp(decimalPlaces: number, roundingMode?: BigNumber.RoundingMode): BigNumber;

    dividedBy(n: BigNumber.Value, base?: number): BigNumber;

    div(n: BigNumber.Value, base?: number): BigNumber;

    dividedToIntegerBy(n: BigNumber.Value, base?: number): BigNumber;

    idiv(n: BigNumber.Value, base?: number): BigNumber;

    exponentiatedBy(n: BigNumber.Value, m?: BigNumber.Value): BigNumber;
    exponentiatedBy(n: number, m?: BigNumber.Value): BigNumber;

    pow(n: BigNumber.Value, m?: BigNumber.Value): BigNumber;
    pow(n: number, m?: BigNumber.Value): BigNumber;

    integerValue(rm?: BigNumber.RoundingMode): BigNumber;

    isEqualTo(n: BigNumber.Value, base?: number): boolean;

    eq(n: BigNumber.Value, base?: number): boolean;

    isFinite(): boolean;

    isGreaterThan(n: BigNumber.Value, base?: number): boolean;

    gt(n: BigNumber.Value, base?: number): boolean;

    isGreaterThanOrEqualTo(n: BigNumber.Value, base?: number): boolean;

    gte(n: BigNumber.Value, base?: number): boolean;

    isInteger(): boolean;

    isLessThan(n: BigNumber.Value, base?: number): boolean;

    lt(n: BigNumber.Value, base?: number): boolean;

    isLessThanOrEqualTo(n: BigNumber.Value, base?: number): boolean;

    lte(n: BigNumber.Value, base?: number): boolean;

    isNaN(): boolean;

    isNegative(): boolean;

    isPositive(): boolean;

    isZero(): boolean;

    minus(n: BigNumber.Value, base?: number): BigNumber;

    modulo(n: BigNumber.Value, base?: number): BigNumber;

    mod(n: BigNumber.Value, base?: number): BigNumber;

    multipliedBy(n: BigNumber.Value, base?: number): BigNumber;

    times(n: BigNumber.Value, base?: number): BigNumber;

    negated(): BigNumber;

    plus(n: BigNumber.Value, base?: number): BigNumber;

    precision(includeZeros?: boolean): number;

    precision(significantDigits: number, roundingMode?: BigNumber.RoundingMode): BigNumber;

    sd(includeZeros?: boolean): number;

    sd(significantDigits: number, roundingMode?: BigNumber.RoundingMode): BigNumber;

    shiftedBy(n: number): BigNumber;

    squareRoot(): BigNumber;

    sqrt(): BigNumber;

    toExponential(decimalPlaces: number, roundingMode?: BigNumber.RoundingMode): string;
    toExponential(): string;

    toFixed(decimalPlaces: number, roundingMode?: BigNumber.RoundingMode): string;
    toFixed(): string;

    toFormat(decimalPlaces: number, roundingMode: BigNumber.RoundingMode, format?: BigNumber.Format): string;
    toFormat(decimalPlaces: number, roundingMode?: BigNumber.RoundingMode): string;
    toFormat(decimalPlaces?: number): string;
    toFormat(decimalPlaces: number, format: BigNumber.Format): string;
    toFormat(format: BigNumber.Format): string;

    toFraction(max_denominator?: BigNumber.Value): [BigNumber, BigNumber];

    toJSON(): string;

    toNumber(): number;

    toPrecision(significantDigits: number, roundingMode?: BigNumber.RoundingMode): string;
    toPrecision(): string;

    toString(base?: number): string;

    valueOf(): string;

    private static readonly default?: BigNumber.Constructor;

    private static readonly BigNumber?: BigNumber.Constructor;

    static readonly ROUND_UP: 0;

    static readonly ROUND_DOWN: 1;

    static readonly ROUND_CEIL: 2;

    static readonly ROUND_FLOOR: 3;

    static readonly ROUND_HALF_UP: 4;

    static readonly ROUND_HALF_DOWN: 5;

    static readonly ROUND_HALF_EVEN: 6;

    static readonly ROUND_HALF_CEIL: 7;

    static readonly ROUND_HALF_FLOOR: 8;

    static readonly EUCLID: 9;

    static DEBUG?: boolean;

    static clone(object?: BigNumber.Config): BigNumber.Constructor;

    static config(object: BigNumber.Config): BigNumber.Config;

    static isBigNumber(value: any): value is BigNumber;

    static maximum(...n: BigNumber.Value[]): BigNumber;

    static max(...n: BigNumber.Value[]): BigNumber;

    static minimum(...n: BigNumber.Value[]): BigNumber;

    static min(...n: BigNumber.Value[]): BigNumber;

    static random(decimalPlaces?: number): BigNumber;

    static sum(...n: BigNumber.Value[]): BigNumber;

    static set(object: BigNumber.Config): BigNumber.Config;
  }
}
declare module "web3"{
    export default class {}
}
declare module "contract" {
    /*!-----------------------------------------------------------
    * Copyright (c) IJS Technologies. All rights reserved.
    * Released under dual AGPLv3/commercial license
    * https://ijs.network
    *-----------------------------------------------------------*/
    import { IWallet, TransactionReceipt, Event, IBatchRequestObj } from "wallet";
    module Contract {
        interface EventType {
            name: string;
        }
        class Contract {
            wallet: IWallet;
            _abi: any;
            _bytecode: any;
            _address: string;
            private _events;
            privateKey: string;
            private abiHash;
            constructor(wallet: IWallet, address?: string, abi?: any, bytecode?: any);
            at(address: string): Contract;
            set address(value: string);
            get address(): string;
            protected decodeEvents(receipt: TransactionReceipt): any[];
            protected parseEvents(receipt: TransactionReceipt, eventName: string): Event[];
            get events(): EventType[];
            protected getAbiEvents(): any;
            protected getAbiTopics(eventNames?: string[]): any[];
            registerEvents(handler: any): void;
            scanEvents(fromBlock: number, toBlock: number | string, eventNames?: string[]): Promise<Event[]>;
            batchCall(batchObj: IBatchRequestObj, key: string, methodName: string, params?: any[], options?: any): Promise<void>;
            protected call(methodName: string, params?: any[], options?: any): Promise<any>;
            private _send;
            protected __deploy(params?: any[], options?: any): Promise<string>;
            protected send(methodName: string, params?: any[], options?: any): Promise<TransactionReceipt>;
            protected _deploy(...params: any[]): Promise<string>;
            protected methods(methodName: string, ...params: any[]): Promise<any>;
        }
    }
    export = Contract;
}
declare module "types" {
    /*!-----------------------------------------------------------
   * Copyright (c) IJS Technologies. All rights reserved.
   * Released under dual AGPLv3/commercial license
   * https://ijs.network
   *-----------------------------------------------------------*/
    export interface MessageTypeProperty {
        name: string;
        type: string;
    }
    export type EIP712TypeMap = {
        [type: string]: MessageTypeProperty[];
    };
    export interface IEIP712Domain {
        name: string;
        version: string;
        chainId: number;
        verifyingContract: string;
    }
    export enum SignTypedDataVersion {
        V1 = "V1",
        V3 = "V3",
        V4 = "V4"
    }
    export interface MessageTypes {
        EIP712Domain: MessageTypeProperty[];
        [additionalProperties: string]: MessageTypeProperty[];
    }
    export interface TypedMessage<T extends MessageTypes> {
        types: T;
        primaryType: keyof T;
        domain: {
            name?: string;
            version?: string;
            chainId?: number;
            verifyingContract?: string;
            salt?: ArrayBuffer;
        };
        message: Record<string, unknown>;
    }
}
declare module "constants" {
    export const EIP712DomainAbi: {
        name: string;
        type: string;
    }[];
    export const TYPED_MESSAGE_SCHEMA: {
        type: string;
        properties: {
            types: {
                type: string;
                additionalProperties: {
                    type: string;
                    items: {
                        type: string;
                        properties: {
                            name: {
                                type: string;
                            };
                            type: {
                                type: string;
                            };
                        };
                        required: string[];
                    };
                };
            };
            primaryType: {
                type: string;
            };
            domain: {
                type: string;
            };
            message: {
                type: string;
            };
        };
        required: string[];
    };
}
declare module "utils" {
    /*!-----------------------------------------------------------
    * Copyright (c) IJS Technologies. All rights reserved.
    * Released under dual AGPLv3/commercial license
    * https://ijs.network
    *-----------------------------------------------------------*/
    import { BigNumber } from "bignumber.js";
    import { EIP712TypeMap, IEIP712Domain, MessageTypes, TypedMessage } from "types";
    export function sleep(millisecond: number): Promise<unknown>;
    export function numberToBytes32(value: number | BigNumber, prefix?: boolean): string;
    export function padLeft(string: string, chars: number, sign?: string): string;
    export function padRight(string: string, chars: number, sign?: string): string;
    type stringArray = string | _stringArray;
    interface _stringArray extends Array<stringArray> {
    }
    export function stringToBytes32(value: string | stringArray): string | string[];
    export function stringToBytes(value: string | stringArray, nByte?: number): string | string[];
    export function addressToBytes32(value: string, prefix?: boolean): string;
    export function bytes32ToAddress(value: string): string;
    export function bytes32ToString(value: string): string;
    export function addressToBytes32Right(value: string, prefix?: boolean): string;
    export function toNumber(value: string | number | BigNumber): number;
    export function toDecimals(value: BigNumber | number | string, decimals?: number): BigNumber;
    export function fromDecimals(value: BigNumber | number | string, decimals?: number): BigNumber;
    export function toString(value: any): any;
    export const nullAddress = "0x0000000000000000000000000000000000000000";
    export function constructTypedMessageData(domain: IEIP712Domain, customTypes: EIP712TypeMap, primaryType: string, message: Record<string, unknown>): TypedMessage<MessageTypes>;
}
declare module "contracts/erc20" {
    /*!-----------------------------------------------------------
    * Copyright (c) IJS Technologies. All rights reserved.
    * Released under dual AGPLv3/commercial license
    * https://ijs.network
    *-----------------------------------------------------------*/
    import { IWallet, TransactionReceipt, Event } from "wallet";
    import { Contract } from "contract";
    import { BigNumber } from 'bignumber.js';
    export class Erc20 extends Contract {
        private _decimals;
        constructor(wallet: IWallet, address?: string, decimals?: number);
        deploy(params: {
            name: string;
            symbol: string;
            minter?: string;
            cap?: number | BigNumber;
        }): Promise<string>;
        parseApprovalEvent(receipt: TransactionReceipt): Erc20.ApprovalEvent[];
        decodeApprovalEvent(event: Event): Erc20.ApprovalEvent;
        parseTransferEvent(receipt: TransactionReceipt): Erc20.TransferEvent[];
        decodeTransferEvent(event: Event): Erc20.TransferEvent;
        allowance(params: {
            owner: string;
            spender: string;
        }): Promise<BigNumber>;
        approve(params: {
            spender: string;
            amount: number | BigNumber;
        }): Promise<any>;
        get balance(): Promise<BigNumber>;
        balanceOf(address: string): Promise<BigNumber>;
        get cap(): Promise<BigNumber>;
        get decimals(): Promise<number>;
        mint(params: {
            address: string;
            amount: number | BigNumber;
        }): Promise<any>;
        minter(): Promise<string>;
        get name(): Promise<string>;
        get symbol(): Promise<string>;
        get totalSupply(): Promise<BigNumber>;
        transfer(params: {
            address: string;
            amount: number | BigNumber;
        }): Promise<TransactionReceipt>;
    }
    export module Erc20 {
        interface ApprovalEvent {
            owner: string;
            spender: string;
            value: BigNumber;
            _event: Event;
        }
        interface TransferEvent {
            from: string;
            to: string;
            value: BigNumber;
            _event: Event;
        }
    }
}
declare module "wallet" {
    /*!-----------------------------------------------------------
    * Copyright (c) IJS Technologies. All rights reserved.
    * Released under dual AGPLv3/commercial license
    * https://ijs.network
    *-----------------------------------------------------------*/
    import * as W3 from 'web3';
    import { BigNumber } from 'bignumber.js';
    import { Erc20 } from "contracts/erc20";
    import { MessageTypes, TypedMessage } from "types";
    export function toString(value: any): any;
    export function stringToBytes32(value: string | stringArray): string | string[];
    export function stringToBytes(value: string | stringArray, nByte?: number): string | string[];
    export type stringArray = string | _stringArray;
    export interface _stringArray extends Array<stringArray> {
    }
    export interface IWalletUtils {
        fromWei(value: any, unit?: string): string;
        hexToUtf8(value: string): string;
        sha3(value: string): string;
        stringToBytes(value: string | stringArray, nByte?: number): string | string[];
        stringToBytes32(value: string | stringArray): string | string[];
        toString(value: any): string;
        toUtf8(value: any): string;
        toWei(value: string, unit?: string): string;
    }
    export interface IWalletTransaction {
        hash: string;
        nonce: number;
        blockHash: string | null;
        blockNumber: number | null;
        transactionIndex: number | null;
        from: string;
        to: string | null;
        value: string;
        gasPrice: string;
        maxPriorityFeePerGas?: number | string | BigNumber;
        maxFeePerGas?: number | string | BigNumber;
        gas: number;
        input: string;
    }
    export interface IWalletBlockTransactionObject {
        number: number;
        hash: string;
        parentHash: string;
        nonce: string;
        sha3Uncles: string;
        logsBloom: string;
        transactionRoot: string;
        stateRoot: string;
        receiptsRoot: string;
        miner: string;
        extraData: string;
        gasLimit: number;
        gasUsed: number;
        timestamp: number | string;
        baseFeePerGas?: number;
        size: number;
        difficulty: number;
        totalDifficulty: number;
        uncles: string[];
        transactions: IWalletTransaction[];
    }
    export interface ITokenInfo {
        name: string;
        symbol: string;
        totalSupply: BigNumber;
        decimals: number;
    }
    export interface IBatchRequestResult {
        key: string;
        result: any;
    }
    export interface IBatchRequestObj {
        batch: any;
        promises: Promise<IBatchRequestResult>[];
        execute: (batch: IBatchRequestObj, promises: Promise<IBatchRequestResult>[]) => Promise<IBatchRequestResult[]>;
    }
    export interface IWallet {
        account: IAccount;
        accounts: Promise<string[]>;
        address: string;
        balance: Promise<BigNumber>;
        balanceOf(address: string): Promise<BigNumber>;
        chainId: number;
        createAccount(): IAccount;
        _call(abiHash: string, address: string, methodName: string, params?: any[], options?: number | BigNumber | TransactionOptions): Promise<any>;
        decode(abi: any, event: Log | EventLog, raw?: {
            data: string;
            topics: string[];
        }): Event;
        decodeEventData(data: Log, events?: any): Promise<Event>;
        decodeLog(inputs: any, hexString: string, topics: any): any;
        defaultAccount: string;
        getBlock(blockHashOrBlockNumber?: number | string, returnTransactionObjects?: boolean): Promise<IWalletBlockTransactionObject>;
        getBlockNumber(): Promise<number>;
        getBlockTimestamp(blockHashOrBlockNumber?: number | string): Promise<number>;
        getChainId(): Promise<number>;
        privateKey: string;
        provider: any;
        recoverSigner(msg: string, signature: string): Promise<string>;
        registerEvent(abi: any, eventMap: {
            [topics: string]: any;
        }, address: string, handler: any): any;
        _send(abiHash: string, address: string, methodName: string, params?: any[], options?: number | BigNumber | TransactionOptions): Promise<any>;
        send(to: string, amount: number): Promise<TransactionReceipt>;
        scanEvents(fromBlock: number, toBlock: number | string, topics?: any, events?: any, address?: string | string[]): Promise<Event[]>;
        signMessage(msg: string): Promise<string>;
        signTransaction(tx: any, privateKey?: string): Promise<string>;
        tokenInfo(address: string): Promise<ITokenInfo>;
        utils: IWalletUtils;
        verifyMessage(account: string, msg: string, signature: string): Promise<boolean>;
        blockGasLimit(): Promise<number>;
        getGasPrice(): Promise<BigNumber>;
        transactionCount(): Promise<number>;
        sendTransaction(transaction: Transaction): Promise<TransactionReceipt>;
        sendSignedTransaction(signedTransaction: string): Promise<TransactionReceipt>;
        getTransaction(transactionHash: string): Promise<Transaction>;
        getTransactionReceipt(transactionHash: string): Promise<TransactionReceipt>;
        newContract(abi: any, address?: string): IContract;
        decodeErrorMessage(msg: string): any;
        methods(...args: any): Promise<any>;
        getAbiEvents(abi: any[]): any;
        getAbiTopics(abi: any[], eventNames?: string[]): any[];
        getContractAbi(address: string): any;
        getContractAbiEvents(address: string): any;
        registerAbi(abi: any[] | string, address?: string | string[], handler?: any): string;
        registerAbiContracts(abiHash: string, address: string | string[], handler?: any): any;
        soliditySha3(...val: any[]): string;
        _txObj(abiHash: string, address: string, methodName: string, params?: any[], options?: number | BigNumber | TransactionOptions): Promise<Transaction>;
        _txData(abiHash: string, address: string, methodName: string, params?: any[], options?: number | BigNumber | TransactionOptions): Promise<string>;
    }
    export interface IContractMethod {
        call: any;
        estimateGas(...params: any[]): Promise<number>;
        encodeABI(): string;
    }
    export interface IContract {
        deploy(params: {
            data: string;
            arguments?: any[];
        }): IContractMethod;
        methods: {
            [methodName: string]: (...params: any[]) => IContractMethod;
        };
    }
    export interface Event {
        name: string;
        address: string;
        blockNumber: number;
        logIndex: number;
        topics: string[];
        transactionHash: string;
        transactionIndex: number;
        data: any;
        rawData: any;
    }
    export interface Log {
        address: string;
        data: string;
        topics: Array<string>;
        logIndex: number;
        transactionHash?: string;
        transactionIndex: number;
        blockHash?: string;
        type?: string;
        blockNumber: number;
    }
    export interface EventLog {
        event: string;
        address: string;
        returnValues: any;
        logIndex: number;
        transactionIndex: number;
        transactionHash: string;
        blockHash: string;
        blockNumber: number;
        raw?: {
            data: string;
            topics: string[];
        };
    }
    export interface TransactionReceipt {
        transactionHash: string;
        transactionIndex: number;
        blockHash: string;
        blockNumber: number;
        from: string;
        to: string;
        contractAddress?: string;
        cumulativeGasUsed: number;
        gasUsed: number;
        logs?: Array<Log>;
        events?: {
            [eventName: string]: EventLog | EventLog[];
        };
        status: boolean;
    }
    export interface Transaction {
        from?: string;
        to: string;
        nonce: number;
        gas: number;
        gasPrice: BigNumber;
        data: string;
        value?: BigNumber;
    }
    export interface TransactionOptions {
        from?: string;
        nonce?: number;
        gas?: number;
        gasLimit?: number;
        gasPrice?: BigNumber | number;
        data?: string;
        value?: BigNumber | number;
    }
    export interface IKMS {
    }
    export interface IAccount {
        address: string;
        privateKey?: string;
        kms?: IKMS;
        sign?(): Promise<string>;
        signTransaction?(): Promise<any>;
    }
    export interface ITokenOption {
        address: string;
        symbol: string;
        decimals: number;
        image?: string;
    }
    export interface INetwork {
        chainId: number;
        chainName: string;
        nativeCurrency: {
            name: string;
            symbol: string;
            decimals: number;
        };
        rpcUrls: string[];
        blockExplorerUrls?: string[];
        iconUrls?: string[];
    }
    export interface IClientSideProviderEvents {
        onAccountChanged?: (account: string) => void;
        onChainChanged?: (chainId: string) => void;
        onConnect?: (connectInfo: any) => void;
        onDisconnect?: (error: any) => void;
    }
    export type NetworksMapType = {
        [chainId: number]: INetwork;
    };
    export const DefaultNetworksMap: NetworksMapType;
    export enum WalletPlugin {
        MetaMask = "metamask",
        Coin98 = "coin98",
        TrustWallet = "trustwallet",
        BinanceChainWallet = "binancechainwallet",
        ONTOWallet = "onto",
        WalletConnect = "walletconnect",
        BitKeepWallet = "bitkeepwallet"
    }
    export type WalletPluginConfigType = {
        [key in WalletPlugin]?: {
            provider: () => any;
            installed: () => boolean;
            homepage?: () => string;
        };
    };
    export const WalletPluginConfig: WalletPluginConfigType;
    export interface IClientProviderOptions {
        infuraId?: string;
        callWithDefaultProvider?: boolean;
        [key: string]: any;
    }
    export class ClientSideProvider {
        protected wallet: Wallet;
        protected _events?: IClientSideProviderEvents;
        protected _options?: IClientProviderOptions;
        protected _isConnected: boolean;
        provider: any;
        readonly walletPlugin: WalletPlugin;
        onAccountChanged: (account: string) => void;
        onChainChanged: (chainId: string) => void;
        onConnect: (connectInfo: any) => void;
        onDisconnect: (error: any) => void;
        constructor(wallet: Wallet, walletPlugin: WalletPlugin, events?: IClientSideProviderEvents, options?: IClientProviderOptions);
        get installed(): boolean;
        initEvents(): void;
        connect(): Promise<any>;
        disconnect(): Promise<void>;
        get isConnected(): boolean;
        addToken(option: ITokenOption, type?: string): Promise<boolean>;
        switchNetwork(chainId: number, onChainChanged?: (chainId: string) => void): Promise<boolean>;
        addNetwork(options: INetwork): Promise<boolean>;
    }
    export class BinanceChainWalletProvider extends ClientSideProvider {
        switchNetwork(chainId: number, onChainChanged?: (chainId: string) => void): Promise<boolean>;
    }
    export class Web3ModalProvider extends ClientSideProvider {
        private web3Modal;
        constructor(wallet: Wallet, walletPlugin: WalletPlugin, events?: IClientSideProviderEvents, options?: IClientProviderOptions);
        get installed(): boolean;
        private initializeWeb3Modal;
        connect(): Promise<any>;
        disconnect(): Promise<void>;
    }
    export function createClientSideProvider(wallet: Wallet, walletPlugin: WalletPlugin, events?: IClientSideProviderEvents, providerOptions?: IClientProviderOptions): ClientSideProvider;
    export interface ISendTxEventsOptions {
        transactionHash?: (error: Error, receipt?: string) => void;
        confirmation?: (receipt: any) => void;
    }
    export class Wallet implements IWallet {
        protected _web3: W3.default;
        protected _account: IAccount;
        private _accounts;
        private _provider;
        private _eventTopicAbi;
        private _eventHandler;
        protected _sendTxEventHandler: ISendTxEventsOptions;
        protected _contracts: {};
        protected _blockGasLimit: number;
        private _networksMap;
        chainId: number;
        clientSideProvider: ClientSideProvider;
        private _infuraId;
        private _utils;
        constructor(provider?: any, account?: IAccount | IAccount[]);
        private static readonly instance;
        static getInstance(): Wallet;
        static isInstalled(walletPlugin: WalletPlugin): boolean;
        get isConnected(): boolean;
        switchNetwork(chainId: number, onChainChanged?: (chainId: string) => void): Promise<any>;
        setDefaultProvider(): void;
        connect(walletPlugin: WalletPlugin, events?: IClientSideProviderEvents, providerOptions?: IClientProviderOptions): Promise<ClientSideProvider>;
        disconnect(): Promise<void>;
        get accounts(): Promise<string[]>;
        get address(): string;
        get account(): IAccount;
        set account(value: IAccount);
        get infuraId(): string;
        set infuraId(value: string);
        get networksMap(): NetworksMapType;
        getNetworkInfo(chainId: number): INetwork;
        setNetworkInfo(network: INetwork): void;
        setMultipleNetworksInfo(networks: INetwork[]): void;
        createAccount(): IAccount;
        decodeLog(inputs: any, hexString: string, topics: any): any;
        get defaultAccount(): string;
        set defaultAccount(address: string);
        getChainId(): Promise<number>;
        get provider(): any;
        set provider(value: any);
        sendSignedTransaction(tx: string): Promise<TransactionReceipt>;
        signTransaction(tx: any, privateKey?: string): Promise<string>;
        registerSendTxEvents(eventsOptions: ISendTxEventsOptions): void;
        private getContract;
        _call(abiHash: string, address: string, methodName: string, params?: any[], options?: number | BigNumber | TransactionOptions): Promise<any>;
        private _getMethod;
        _txObj(abiHash: string, address: string, methodName: string, params?: any[], options?: number | BigNumber | TransactionOptions): Promise<Transaction>;
        _send(abiHash: string, address: string, methodName: string, params?: any[], options?: number | BigNumber | TransactionOptions): Promise<TransactionReceipt>;
        _txData(abiHash: string, address: string, methodName: string, params?: any[], options?: number | BigNumber | TransactionOptions): Promise<string>;
        _methods(...args: any[]): Promise<{
            to: any;
            data: any;
        }>;
        methods(...args: any): Promise<any>;
        get balance(): Promise<BigNumber>;
        balanceOf(address: string): Promise<BigNumber>;
        recoverSigner(msg: string, signature: string): Promise<string>;
        getBlock(blockHashOrBlockNumber?: number | string, returnTransactionObjects?: boolean): Promise<IWalletBlockTransactionObject>;
        getBlockNumber(): Promise<number>;
        getBlockTimestamp(blockHashOrBlockNumber?: number | string): Promise<number>;
        set privateKey(value: string);
        registerEvent(abi: any, eventMap: {
            [topics: string]: any;
        }, address: string, handler: any): void;
        private _abiHashDict;
        private _abiContractDict;
        private _abiAddressDict;
        private _abiEventDict;
        getAbiEvents(abi: any[]): any;
        getAbiTopics(abi: any[], eventNames?: string[]): any[];
        getContractAbi(address: string): any;
        getContractAbiEvents(address: string): any;
        registerAbi(abi: any[] | string, address?: string | string[], handler?: any): string;
        registerAbiContracts(abiHash: string, address: string | string[], handler?: any): void;
        decode(abi: any, event: Log | EventLog, raw?: {
            data: string;
            topics: string[];
        }): Event;
        decodeEventData(data: Log, events?: any): Promise<Event>;
        scanEvents(fromBlock: number, toBlock: number | string, topics?: any, events?: any, address?: string | string[]): Promise<Event[]>;
        send(to: string, amount: number): Promise<TransactionReceipt>;
        setBlockTime(time: number): Promise<any>;
        increaseBlockTime(value: number): Promise<any>;
        signMessage(msg: string): Promise<string>;
        signTypedDataV4(data: TypedMessage<MessageTypes>): Promise<string>;
        token(tokenAddress: string, decimals?: number): Erc20;
        tokenInfo(tokenAddress: string): Promise<ITokenInfo>;
        get utils(): IWalletUtils;
        verifyMessage(account: string, msg: string, signature: string): Promise<boolean>;
        private _gasLimit;
        blockGasLimit(): Promise<number>;
        getGasPrice(): Promise<BigNumber>;
        transactionCount(): Promise<number>;
        sendTransaction(transaction: Transaction): Promise<TransactionReceipt>;
        getTransaction(transactionHash: string): Promise<Transaction>;
        getTransactionReceipt(transactionHash: string): Promise<TransactionReceipt>;
        call(transaction: Transaction): Promise<any>;
        newContract(abi: any, address?: string): IContract;
        decodeErrorMessage(msg: string): any;
        newBatchRequest(): Promise<IBatchRequestObj>;
        soliditySha3(...val: any[]): string;
        get web3(): W3.default;
    }
}
declare module "contracts/ERC1155/ERC1155.json" {
    const _default: {
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        bytecode: string;
    };
    export default _default;
}
declare module "contracts/ERC1155/ERC1155" {
    import { IWallet, TransactionReceipt, Event } from "wallet";
    import { Contract } from "contract";
    import { BigNumber } from "bignumber.js";
    export interface IBalanceOfParams {
        account: string;
        id: number | BigNumber;
    }
    export interface IBalanceOfBatchParams {
        accounts: string[];
        ids: (number | BigNumber)[];
    }
    export interface IIsApprovedForAllParams {
        account: string;
        operator: string;
    }
    export interface ISafeBatchTransferFromParams {
        from: string;
        to: string;
        ids: (number | BigNumber)[];
        amounts: (number | BigNumber)[];
        data: string;
    }
    export interface ISafeTransferFromParams {
        from: string;
        to: string;
        id: number | BigNumber;
        amount: number | BigNumber;
        data: string;
    }
    export interface ISetApprovalForAllParams {
        operator: string;
        approved: boolean;
    }
    export class ERC1155 extends Contract {
        constructor(wallet: IWallet, address?: string);
        deploy(uri: string): Promise<string>;
        parseApprovalForAllEvent(receipt: TransactionReceipt): ERC1155.ApprovalForAllEvent[];
        decodeApprovalForAllEvent(event: Event): ERC1155.ApprovalForAllEvent;
        parseTransferBatchEvent(receipt: TransactionReceipt): ERC1155.TransferBatchEvent[];
        decodeTransferBatchEvent(event: Event): ERC1155.TransferBatchEvent;
        parseTransferSingleEvent(receipt: TransactionReceipt): ERC1155.TransferSingleEvent[];
        decodeTransferSingleEvent(event: Event): ERC1155.TransferSingleEvent;
        parseURIEvent(receipt: TransactionReceipt): ERC1155.URIEvent[];
        decodeURIEvent(event: Event): ERC1155.URIEvent;
        balanceOf: {
            (params: IBalanceOfParams): Promise<BigNumber>;
        };
        balanceOfBatch: {
            (params: IBalanceOfBatchParams): Promise<BigNumber[]>;
        };
        isApprovedForAll: {
            (params: IIsApprovedForAllParams): Promise<boolean>;
        };
        safeBatchTransferFrom: {
            (params: ISafeBatchTransferFromParams): Promise<TransactionReceipt>;
            call: (params: ISafeBatchTransferFromParams) => Promise<void>;
        };
        safeTransferFrom: {
            (params: ISafeTransferFromParams): Promise<TransactionReceipt>;
            call: (params: ISafeTransferFromParams) => Promise<void>;
        };
        setApprovalForAll: {
            (params: ISetApprovalForAllParams): Promise<TransactionReceipt>;
            call: (params: ISetApprovalForAllParams) => Promise<void>;
        };
        supportsInterface: {
            (interfaceId: string): Promise<boolean>;
        };
        uri: {
            (param1: number | BigNumber): Promise<string>;
        };
        private assign;
    }
    export module ERC1155 {
        interface ApprovalForAllEvent {
            account: string;
            operator: string;
            approved: boolean;
            _event: Event;
        }
        interface TransferBatchEvent {
            operator: string;
            from: string;
            to: string;
            ids: BigNumber[];
            values: BigNumber[];
            _event: Event;
        }
        interface TransferSingleEvent {
            operator: string;
            from: string;
            to: string;
            id: BigNumber;
            value: BigNumber;
            _event: Event;
        }
        interface URIEvent {
            value: string;
            id: BigNumber;
            _event: Event;
        }
    }
}
declare module "contracts/ERC20/ERC20.json" {
    const _default_1: {
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_1;
}
declare module "contracts/ERC20/ERC20" {
    import { IWallet, TransactionReceipt, Event } from "wallet";
    import { Contract } from "contract";
    import { BigNumber } from "bignumber.js";
    export interface IDeployParams {
        name: string;
        symbol: string;
    }
    export interface IAllowanceParams {
        owner: string;
        spender: string;
    }
    export interface IApproveParams {
        spender: string;
        amount: number | BigNumber;
    }
    export interface IDecreaseAllowanceParams {
        spender: string;
        subtractedValue: number | BigNumber;
    }
    export interface IIncreaseAllowanceParams {
        spender: string;
        addedValue: number | BigNumber;
    }
    export interface ITransferParams {
        to: string;
        amount: number | BigNumber;
    }
    export interface ITransferFromParams {
        from: string;
        to: string;
        amount: number | BigNumber;
    }
    export class ERC20 extends Contract {
        constructor(wallet: IWallet, address?: string);
        deploy(params: IDeployParams): Promise<string>;
        parseApprovalEvent(receipt: TransactionReceipt): ERC20.ApprovalEvent[];
        decodeApprovalEvent(event: Event): ERC20.ApprovalEvent;
        parseTransferEvent(receipt: TransactionReceipt): ERC20.TransferEvent[];
        decodeTransferEvent(event: Event): ERC20.TransferEvent;
        allowance: {
            (params: IAllowanceParams): Promise<BigNumber>;
        };
        approve: {
            (params: IApproveParams): Promise<TransactionReceipt>;
            call: (params: IApproveParams) => Promise<boolean>;
        };
        balanceOf: {
            (account: string): Promise<BigNumber>;
        };
        decimals: {
            (): Promise<BigNumber>;
        };
        decreaseAllowance: {
            (params: IDecreaseAllowanceParams): Promise<TransactionReceipt>;
            call: (params: IDecreaseAllowanceParams) => Promise<boolean>;
        };
        increaseAllowance: {
            (params: IIncreaseAllowanceParams): Promise<TransactionReceipt>;
            call: (params: IIncreaseAllowanceParams) => Promise<boolean>;
        };
        name: {
            (): Promise<string>;
        };
        symbol: {
            (): Promise<string>;
        };
        totalSupply: {
            (): Promise<BigNumber>;
        };
        transfer: {
            (params: ITransferParams): Promise<TransactionReceipt>;
            call: (params: ITransferParams) => Promise<boolean>;
        };
        transferFrom: {
            (params: ITransferFromParams): Promise<TransactionReceipt>;
            call: (params: ITransferFromParams) => Promise<boolean>;
        };
        private assign;
    }
    export module ERC20 {
        interface ApprovalEvent {
            owner: string;
            spender: string;
            value: BigNumber;
            _event: Event;
        }
        interface TransferEvent {
            from: string;
            to: string;
            value: BigNumber;
            _event: Event;
        }
    }
}
declare module "contracts/ERC721/ERC721.json" {
    const _default_2: {
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_2;
}
declare module "contracts/ERC721/ERC721" {
    import { IWallet, TransactionReceipt, Event } from "wallet";
    import { Contract } from "contract";
    import { BigNumber } from "bignumber.js";
    export interface IDeployParams {
        name: string;
        symbol: string;
    }
    export interface IApproveParams {
        to: string;
        tokenId: number | BigNumber;
    }
    export interface IIsApprovedForAllParams {
        owner: string;
        operator: string;
    }
    export interface ISafeTransferFromParams {
        from: string;
        to: string;
        tokenId: number | BigNumber;
    }
    export interface ISafeTransferFrom_1Params {
        from: string;
        to: string;
        tokenId: number | BigNumber;
        data: string;
    }
    export interface ISetApprovalForAllParams {
        operator: string;
        approved: boolean;
    }
    export interface ITransferFromParams {
        from: string;
        to: string;
        tokenId: number | BigNumber;
    }
    export class ERC721 extends Contract {
        constructor(wallet: IWallet, address?: string);
        deploy(params: IDeployParams): Promise<string>;
        parseApprovalEvent(receipt: TransactionReceipt): ERC721.ApprovalEvent[];
        decodeApprovalEvent(event: Event): ERC721.ApprovalEvent;
        parseApprovalForAllEvent(receipt: TransactionReceipt): ERC721.ApprovalForAllEvent[];
        decodeApprovalForAllEvent(event: Event): ERC721.ApprovalForAllEvent;
        parseTransferEvent(receipt: TransactionReceipt): ERC721.TransferEvent[];
        decodeTransferEvent(event: Event): ERC721.TransferEvent;
        approve: {
            (params: IApproveParams): Promise<TransactionReceipt>;
            call: (params: IApproveParams) => Promise<void>;
        };
        balanceOf: {
            (owner: string): Promise<BigNumber>;
        };
        getApproved: {
            (tokenId: number | BigNumber): Promise<string>;
        };
        isApprovedForAll: {
            (params: IIsApprovedForAllParams): Promise<boolean>;
        };
        name: {
            (): Promise<string>;
        };
        ownerOf: {
            (tokenId: number | BigNumber): Promise<string>;
        };
        safeTransferFrom: {
            (params: ISafeTransferFromParams): Promise<TransactionReceipt>;
            call: (params: ISafeTransferFromParams) => Promise<void>;
        };
        safeTransferFrom_1: {
            (params: ISafeTransferFrom_1Params): Promise<TransactionReceipt>;
            call: (params: ISafeTransferFrom_1Params) => Promise<void>;
        };
        setApprovalForAll: {
            (params: ISetApprovalForAllParams): Promise<TransactionReceipt>;
            call: (params: ISetApprovalForAllParams) => Promise<void>;
        };
        supportsInterface: {
            (interfaceId: string): Promise<boolean>;
        };
        symbol: {
            (): Promise<string>;
        };
        tokenURI: {
            (tokenId: number | BigNumber): Promise<string>;
        };
        transferFrom: {
            (params: ITransferFromParams): Promise<TransactionReceipt>;
            call: (params: ITransferFromParams) => Promise<void>;
        };
        private assign;
    }
    export module ERC721 {
        interface ApprovalEvent {
            owner: string;
            approved: string;
            tokenId: BigNumber;
            _event: Event;
        }
        interface ApprovalForAllEvent {
            owner: string;
            operator: string;
            approved: boolean;
            _event: Event;
        }
        interface TransferEvent {
            from: string;
            to: string;
            tokenId: BigNumber;
            _event: Event;
        }
    }
}
declare module "contracts/index" {
    export { ERC1155 } from "contracts/ERC1155/ERC1155";
    export { ERC20 } from "contracts/ERC20/ERC20";
    export { ERC721 } from "contracts/ERC721/ERC721";
}
/// <amd-module name="@ijstech/eth-wallet" />
declare module "@ijstech/eth-wallet" {
    /*!-----------------------------------------------------------
    * Copyright (c) IJS Technologies. All rights reserved.
    * Released under dual AGPLv3/commercial license
    * https://ijs.network
    *-----------------------------------------------------------*/
    export { IWallet, IWalletUtils, IAccount, Wallet, Transaction, Event, TransactionReceipt, ISendTxEventsOptions, IClientProviderOptions, WalletPlugin, WalletPluginConfig, IBatchRequestObj, INetwork } from "wallet";
    export { Contract } from "contract";
    export { BigNumber } from "bignumber.js";
    export { Erc20 } from "contracts/erc20";
    export * as Utils from "utils";
    export * as Contracts from "contracts/index";
    export * as Constants from "constants";
}
