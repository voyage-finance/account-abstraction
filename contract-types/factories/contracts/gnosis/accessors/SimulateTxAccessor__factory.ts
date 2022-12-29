/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  SimulateTxAccessor,
  SimulateTxAccessorInterface,
} from "../../../../contracts/gnosis/accessors/SimulateTxAccessor";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
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
    name: "simulate",
    outputs: [
      {
        internalType: "uint256",
        name: "estimate",
        type: "uint256",
      },
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
] as const;

const _bytecode =
  "0x60a060405234801561001057600080fd5b50306080526080516103e261002f6000396000607701526103e26000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c80631c5fb21114610030575b600080fd5b61004361003e366004610202565b61005b565b604051610052939291906102bb565b60405180910390f35b600080606073ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000163003610129576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603960248201527f53696d756c61746554784163636573736f722073686f756c64206f6e6c79206260448201527f652063616c6c6564207669612064656c656761746563616c6c00000000000000606482015260840160405180910390fd5b60005a9050610171898989898080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152508b925050505a6101a7565b92505a61017e908261033f565b935060405160203d0181016040523d81523d6000602083013e8092505050955095509592505050565b600060018360018111156101bd576101bd61037d565b036101d5576000808551602087018986f490506101e5565b600080855160208701888a87f190505b95945050505050565b8035600281106101fd57600080fd5b919050565b60008060008060006080868803121561021a57600080fd5b853573ffffffffffffffffffffffffffffffffffffffff8116811461023e57600080fd5b945060208601359350604086013567ffffffffffffffff8082111561026257600080fd5b818801915088601f83011261027657600080fd5b81358181111561028557600080fd5b89602082850101111561029757600080fd5b6020830195508094505050506102af606087016101ee565b90509295509295909350565b838152600060208415158184015260606040840152835180606085015260005b818110156102f7578581018301518582016080015282016102db565b81811115610309576000608083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160800195945050505050565b600082821015610378577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b500390565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fdfea264697066735822122058ed7361683097e61add606c94fe6cfb03f839582978266d32d6108412e7f98664736f6c634300080f0033";

type SimulateTxAccessorConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SimulateTxAccessorConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SimulateTxAccessor__factory extends ContractFactory {
  constructor(...args: SimulateTxAccessorConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<SimulateTxAccessor> {
    return super.deploy(overrides || {}) as Promise<SimulateTxAccessor>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): SimulateTxAccessor {
    return super.attach(address) as SimulateTxAccessor;
  }
  override connect(signer: Signer): SimulateTxAccessor__factory {
    return super.connect(signer) as SimulateTxAccessor__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SimulateTxAccessorInterface {
    return new utils.Interface(_abi) as SimulateTxAccessorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SimulateTxAccessor {
    return new Contract(address, _abi, signerOrProvider) as SimulateTxAccessor;
  }
}
