/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  TestSignatureAggregator,
  TestSignatureAggregatorInterface,
} from "../../../contracts/samples/TestSignatureAggregator";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IEntryPoint",
        name: "entryPoint",
        type: "address",
      },
      {
        internalType: "uint32",
        name: "delay",
        type: "uint32",
      },
    ],
    name: "addStake",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "sender",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "nonce",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "initCode",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "callData",
            type: "bytes",
          },
          {
            internalType: "uint256",
            name: "callGasLimit",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "verificationGasLimit",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "preVerificationGas",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxFeePerGas",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxPriorityFeePerGas",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "paymasterAndData",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "signature",
            type: "bytes",
          },
        ],
        internalType: "struct UserOperation[]",
        name: "userOps",
        type: "tuple[]",
      },
    ],
    name: "aggregateSignatures",
    outputs: [
      {
        internalType: "bytes",
        name: "aggregatesSignature",
        type: "bytes",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "sender",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "nonce",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "initCode",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "callData",
            type: "bytes",
          },
          {
            internalType: "uint256",
            name: "callGasLimit",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "verificationGasLimit",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "preVerificationGas",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxFeePerGas",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxPriorityFeePerGas",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "paymasterAndData",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "signature",
            type: "bytes",
          },
        ],
        internalType: "struct UserOperation[]",
        name: "userOps",
        type: "tuple[]",
      },
      {
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
    ],
    name: "validateSignatures",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "sender",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "nonce",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "initCode",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "callData",
            type: "bytes",
          },
          {
            internalType: "uint256",
            name: "callGasLimit",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "verificationGasLimit",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "preVerificationGas",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxFeePerGas",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxPriorityFeePerGas",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "paymasterAndData",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "signature",
            type: "bytes",
          },
        ],
        internalType: "struct UserOperation",
        name: "",
        type: "tuple",
      },
    ],
    name: "validateUserOpSignature",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5061070d806100206000396000f3fe60806040526004361061003f5760003560e01c8063275e2d7914610044578063451711591461007a57806364c530cd1461008f578063e3563a4f146100bd575b600080fd5b34801561005057600080fd5b5061006461005f3660046103e8565b6100dd565b604051610071919061042a565b60405180910390f35b61008d61008836600461049d565b610156565b005b34801561009b57600080fd5b506100646100aa3660046104f8565b5060408051602081019091526000815290565b3480156100c957600080fd5b5061008d6100d836600461053b565b6101e1565b60606000805b83811015610131578484828181106100fd576100fd6105d2565b905060200281019061010f9190610601565b61011d90602001358361066e565b91508061012981610686565b9150506100e3565b5060408051602081018390520160405160208183030381529060405291505092915050565b6040517f0396cb6000000000000000000000000000000000000000000000000000000000815263ffffffff8216600482015273ffffffffffffffffffffffffffffffffffffffff831690630396cb609034906024016000604051808303818588803b1580156101c457600080fd5b505af11580156101d8573d6000803e3d6000fd5b50505050505050565b6000805b84811015610239576000868683818110610201576102016105d2565b90506020028101906102139190610601565b602001359050610223818461066e565b925050808061023190610686565b9150506101e5565b50602082146102cf576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602860248201527f546573745369676e617475726556616c696461746f723a20736967206d75737460448201527f2062652075696e7400000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b60006102dd838501856106be565b9050818114610394576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152604160248201527f546573745369676e617475726556616c696461746f723a20616767726567617460448201527f6564207369676e6174757265206d69736d6174636820286e6f6e63652073756d60648201527f2900000000000000000000000000000000000000000000000000000000000000608482015260a4016102c6565b505050505050565b60008083601f8401126103ae57600080fd5b50813567ffffffffffffffff8111156103c657600080fd5b6020830191508360208260051b85010111156103e157600080fd5b9250929050565b600080602083850312156103fb57600080fd5b823567ffffffffffffffff81111561041257600080fd5b61041e8582860161039c565b90969095509350505050565b600060208083528351808285015260005b818110156104575785810183015185820160400152820161043b565b81811115610469576000604083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016929092016040019392505050565b600080604083850312156104b057600080fd5b823573ffffffffffffffffffffffffffffffffffffffff811681146104d457600080fd5b9150602083013563ffffffff811681146104ed57600080fd5b809150509250929050565b60006020828403121561050a57600080fd5b813567ffffffffffffffff81111561052157600080fd5b8201610160818503121561053457600080fd5b9392505050565b6000806000806040858703121561055157600080fd5b843567ffffffffffffffff8082111561056957600080fd5b6105758883890161039c565b9096509450602087013591508082111561058e57600080fd5b818701915087601f8301126105a257600080fd5b8135818111156105b157600080fd5b8860208285010111156105c357600080fd5b95989497505060200194505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffea183360301811261063557600080fd5b9190910192915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600082198211156106815761068161063f565b500190565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036106b7576106b761063f565b5060010190565b6000602082840312156106d057600080fd5b503591905056fea2646970667358221220d4476792f33754da3823797bba69d411051733df582cbeba117e4bb6dba15bfc64736f6c634300080f0033";

type TestSignatureAggregatorConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TestSignatureAggregatorConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TestSignatureAggregator__factory extends ContractFactory {
  constructor(...args: TestSignatureAggregatorConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TestSignatureAggregator> {
    return super.deploy(overrides || {}) as Promise<TestSignatureAggregator>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): TestSignatureAggregator {
    return super.attach(address) as TestSignatureAggregator;
  }
  override connect(signer: Signer): TestSignatureAggregator__factory {
    return super.connect(signer) as TestSignatureAggregator__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestSignatureAggregatorInterface {
    return new utils.Interface(_abi) as TestSignatureAggregatorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestSignatureAggregator {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as TestSignatureAggregator;
  }
}
