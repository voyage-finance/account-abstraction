/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  ModuleManager,
  ModuleManagerInterface,
} from "../../../../contracts/gnosis/base/ModuleManager";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "module",
        type: "address",
      },
    ],
    name: "DisabledModule",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "module",
        type: "address",
      },
    ],
    name: "EnabledModule",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "module",
        type: "address",
      },
    ],
    name: "ExecutionFromModuleFailure",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "module",
        type: "address",
      },
    ],
    name: "ExecutionFromModuleSuccess",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "prevModule",
        type: "address",
      },
      {
        internalType: "address",
        name: "module",
        type: "address",
      },
    ],
    name: "disableModule",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "module",
        type: "address",
      },
    ],
    name: "enableModule",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "enum Enum.Operation",
        name: "operation",
        type: "uint8",
      },
    ],
    name: "execTransactionFromModule",
    outputs: [
      {
        internalType: "bool",
        name: "success",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "enum Enum.Operation",
        name: "operation",
        type: "uint8",
      },
    ],
    name: "execTransactionFromModuleReturnData",
    outputs: [
      {
        internalType: "bool",
        name: "success",
        type: "bool",
      },
      {
        internalType: "bytes",
        name: "returnData",
        type: "bytes",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "start",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "pageSize",
        type: "uint256",
      },
    ],
    name: "getModulesPaginated",
    outputs: [
      {
        internalType: "address[]",
        name: "array",
        type: "address[]",
      },
      {
        internalType: "address",
        name: "next",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "module",
        type: "address",
      },
    ],
    name: "isModuleEnabled",
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610d41806100206000396000f3fe608060405234801561001057600080fd5b50600436106100725760003560e01c8063610b592511610050578063610b5925146100d3578063cc2f8452146100e8578063e009cfde1461010957600080fd5b80632d9ad53d14610077578063468721a71461009f5780635229073f146100b2575b600080fd5b61008a610085366004610987565b61011c565b60405190151581526020015b60405180910390f35b61008a6100ad3660046109e7565b610171565b6100c56100c03660046109e7565b6102ca565b604051610096929190610b4c565b6100e66100e1366004610987565b610300565b005b6100fb6100f6366004610b67565b6104f0565b604051610096929190610b91565b6100e6610117366004610c08565b61061d565b6000600173ffffffffffffffffffffffffffffffffffffffff83161480159061016b575073ffffffffffffffffffffffffffffffffffffffff8281166000908152602081905260409020541615155b92915050565b60006101b16040518060400160405280601981526020017f657865635472616e73616374696f6e46726f6d4d6f64756c65000000000000008152506107f9565b336001148015906101e657503360009081526020819052604090205473ffffffffffffffffffffffffffffffffffffffff1615155b610251576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600560248201527f475331303400000000000000000000000000000000000000000000000000000060448201526064015b60405180910390fd5b61025e858585855a61088b565b905080156102965760405133907f6895c13664aa4f67288b25d7a21d7aaa34916e355fb9b6fae0a139a9085becb890600090a26102c2565b60405133907facd2c8702804128fdb0db2bb49f6d127dd0181c13fd45dbfe16de0930e2bd37590600090a25b949350505050565b600060606102da86868686610171565b915060405160203d0181016040523d81523d6000602083013e8091505094509492505050565b6103086108d2565b73ffffffffffffffffffffffffffffffffffffffff811615801590610344575073ffffffffffffffffffffffffffffffffffffffff8116600114155b6103aa576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600560248201527f47533130310000000000000000000000000000000000000000000000000000006044820152606401610248565b73ffffffffffffffffffffffffffffffffffffffff8181166000908152602081905260409020541615610439576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600560248201527f47533130320000000000000000000000000000000000000000000000000000006044820152606401610248565b600060208181527fada5013122d395ba3c54772283fb069b10426056ef8ca54750cb9bb552a59e7d805473ffffffffffffffffffffffffffffffffffffffff85811680865260408087208054939094167fffffffffffffffffffffffff00000000000000000000000000000000000000009384161790935560019095528254168417909155519182527fecdf3a3effea5783a3c4c2140e677577666428d44ed9d474a0b3a4c9943f8440910160405180910390a150565b606060008267ffffffffffffffff81111561050d5761050d6109a9565b604051908082528060200260200182016040528015610536578160200160208202803683370190505b5073ffffffffffffffffffffffffffffffffffffffff80861660009081526020819052604081205492945091165b73ffffffffffffffffffffffffffffffffffffffff8116158015906105a0575073ffffffffffffffffffffffffffffffffffffffff8116600114155b80156105ab57508482105b1561060f57808483815181106105c3576105c3610c3b565b73ffffffffffffffffffffffffffffffffffffffff928316602091820292909201810191909152918116600090815291829052604090912054168161060781610c6a565b925050610564565b908352919491935090915050565b6106256108d2565b73ffffffffffffffffffffffffffffffffffffffff811615801590610661575073ffffffffffffffffffffffffffffffffffffffff8116600114155b6106c7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600560248201527f47533130310000000000000000000000000000000000000000000000000000006044820152606401610248565b73ffffffffffffffffffffffffffffffffffffffff82811660009081526020819052604090205481169082161461075a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600560248201527f47533130330000000000000000000000000000000000000000000000000000006044820152606401610248565b73ffffffffffffffffffffffffffffffffffffffff818116600081815260208181526040808320805488871685528285208054919097167fffffffffffffffffffffffff00000000000000000000000000000000000000009182161790965592849052825490941690915591519081527faab4fa2b463f581b2b32cb3b7e3b704b9ce37cc209b5fb4d77e593ace4054276910160405180910390a15050565b6108888160405160240161080d9190610cc9565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f41304fac0000000000000000000000000000000000000000000000000000000017905261093d565b50565b600060018360018111156108a1576108a1610cdc565b036108b9576000808551602087018986f490506108c9565b600080855160208701888a87f190505b95945050505050565b33301461093b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600560248201527f47533033310000000000000000000000000000000000000000000000000000006044820152606401610248565b565b80516a636f6e736f6c652e6c6f67602083016000808483855afa5050505050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461098257600080fd5b919050565b60006020828403121561099957600080fd5b6109a28261095e565b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b80356002811061098257600080fd5b600080600080608085870312156109fd57600080fd5b610a068561095e565b935060208501359250604085013567ffffffffffffffff80821115610a2a57600080fd5b818701915087601f830112610a3e57600080fd5b813581811115610a5057610a506109a9565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f01168101908382118183101715610a9657610a966109a9565b816040528281528a6020848701011115610aaf57600080fd5b826020860160208301376000602084830101528096505050505050610ad6606086016109d8565b905092959194509250565b6000815180845260005b81811015610b0757602081850181015186830182015201610aeb565b81811115610b19576000602083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b82151581526040602082015260006102c26040830184610ae1565b60008060408385031215610b7a57600080fd5b610b838361095e565b946020939093013593505050565b604080825283519082018190526000906020906060840190828701845b82811015610be057815173ffffffffffffffffffffffffffffffffffffffff1684529284019290840190600101610bae565b50505073ffffffffffffffffffffffffffffffffffffffff9490941692019190915250919050565b60008060408385031215610c1b57600080fd5b610c248361095e565b9150610c326020840161095e565b90509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203610cc2577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b5060010190565b6020815260006109a26020830184610ae1565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fdfea26469706673582212204b4fda3cb48e921c039472091e6d31f0e6dc43e09b9b258bd511905664dc7ca464736f6c634300080f0033";

type ModuleManagerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ModuleManagerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ModuleManager__factory extends ContractFactory {
  constructor(...args: ModuleManagerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ModuleManager> {
    return super.deploy(overrides || {}) as Promise<ModuleManager>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ModuleManager {
    return super.attach(address) as ModuleManager;
  }
  override connect(signer: Signer): ModuleManager__factory {
    return super.connect(signer) as ModuleManager__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ModuleManagerInterface {
    return new utils.Interface(_abi) as ModuleManagerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ModuleManager {
    return new Contract(address, _abi, signerOrProvider) as ModuleManager;
  }
}
