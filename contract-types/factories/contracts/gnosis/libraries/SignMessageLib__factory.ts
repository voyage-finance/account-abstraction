/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  SignMessageLib,
  SignMessageLibInterface,
} from "../../../../contracts/gnosis/libraries/SignMessageLib";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "msgHash",
        type: "bytes32",
      },
    ],
    name: "SignMsg",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "message",
        type: "bytes",
      },
    ],
    name: "getMessageHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "signMessage",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50610450806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80630a1028c41461003b57806385a5affe14610060575b600080fd5b61004e6100493660046102c0565b610075565b60405190815260200160405180910390f35b61007361006e36600461038f565b61020e565b005b6000807f60b3cbf8b4a223d68d641b3b6ddf9a298e7f33710cf3d3a9d1146b5a6150fbca60001b83805190602001206040516020016100be929190918252602082015260400190565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe081840301815282825280516020918201207ff698da2500000000000000000000000000000000000000000000000000000000845291519193507f1900000000000000000000000000000000000000000000000000000000000000927f010000000000000000000000000000000000000000000000000000000000000092309263f698da2592600480820193918290030181865afa158015610188573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101ac9190610401565b6040517fff00000000000000000000000000000000000000000000000000000000000000938416602082015292909116602183015260228201526042810182905260620160405160208183030381529060405280519060200120915050919050565b600061024f83838080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061007592505050565b600081815260076020526040808220600190555191925082917fe7f4675038f4f6034dfcbbb24c4dc08e4ebf10eb9d257d3d02c0f38d122ac6e49190a2505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000602082840312156102d257600080fd5b813567ffffffffffffffff808211156102ea57600080fd5b818401915084601f8301126102fe57600080fd5b81358181111561031057610310610291565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810190838211818310171561035657610356610291565b8160405282815287602084870101111561036f57600080fd5b826020860160208301376000928101602001929092525095945050505050565b600080602083850312156103a257600080fd5b823567ffffffffffffffff808211156103ba57600080fd5b818501915085601f8301126103ce57600080fd5b8135818111156103dd57600080fd5b8660208285010111156103ef57600080fd5b60209290920196919550909350505050565b60006020828403121561041357600080fd5b505191905056fea2646970667358221220b975c214bcb0435b6326f10fb9900517984c1c983c67b9e267a98af9ac5806e764736f6c634300080f0033";

type SignMessageLibConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SignMessageLibConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SignMessageLib__factory extends ContractFactory {
  constructor(...args: SignMessageLibConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<SignMessageLib> {
    return super.deploy(overrides || {}) as Promise<SignMessageLib>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): SignMessageLib {
    return super.attach(address) as SignMessageLib;
  }
  override connect(signer: Signer): SignMessageLib__factory {
    return super.connect(signer) as SignMessageLib__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SignMessageLibInterface {
    return new utils.Interface(_abi) as SignMessageLibInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SignMessageLib {
    return new Contract(address, _abi, signerOrProvider) as SignMessageLib;
  }
}
