/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  SafeProxy4337,
  SafeProxy4337Interface,
} from "../../../../contracts/gnosis/GnosisSafeProxy4337.sol/SafeProxy4337";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "singleton",
        type: "address",
      },
      {
        internalType: "contract EIP4337Manager",
        name: "aaModule",
        type: "address",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405161065638038061065683398101604081905261002f91610248565b826001600160a01b0381166100965760405162461bcd60e51b815260206004820152602260248201527f496e76616c69642073696e676c65746f6e20616464726573732070726f766964604482015261195960f21b60648201526084015b60405180910390fd5b806000806101000a8154816001600160a01b0302191690836001600160a01b03160217905550506100f56040518060400160405280600d81526020016c5361666550726f78793433333760981b8152506101c860201b6100f81760201c565b6040516001600160a01b03848116602483015280841660448301819052908316606483015260009182919060840160408051601f198184030181529181526020820180516001600160e01b031663aba3c0b560e01b1790525161015891906102c5565b600060405180830381855af49150503d8060008114610193576040519150601f19603f3d011682016040523d82523d6000602084013e610198565b606091505b50915091508181906101bd5760405162461bcd60e51b815260040161008d91906102e1565b505050505050610314565b61020f816040516024016101dc91906102e1565b60408051601f198184030181529190526020810180516001600160e01b0390811663104c13eb60e21b1790915261021216565b50565b80516a636f6e736f6c652e6c6f67602083016000808483855afa5050505050565b6001600160a01b038116811461020f57600080fd5b60008060006060848603121561025d57600080fd5b835161026881610233565b602085015190935061027981610233565b604085015190925061028a81610233565b809150509250925092565b60005b838110156102b0578181015183820152602001610298565b838111156102bf576000848401525b50505050565b600082516102d7818460208701610295565b9190910192915050565b6020815260008251806020840152610300816040850160208701610295565b601f01601f19169190910160400192915050565b610333806103236000396000f3fe60c0604052600860809081527f66616c6c6261636b00000000000000000000000000000000000000000000000060a052610038906100f8565b60408051808201909152600b81527f73696e676c65746f6e3a20000000000000000000000000000000000000000000602082015260005461008f919073ffffffffffffffffffffffffffffffffffffffff1661018a565b600073ffffffffffffffffffffffffffffffffffffffff8154167fa619486e000000000000000000000000000000000000000000000000000000008235036100d957808252602082f35b3682833781823684845af490503d82833e806100f3573d82fd5b503d81f35b6101878160405160240161010c91906102ab565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f41304fac0000000000000000000000000000000000000000000000000000000017905261021f565b50565b61021b82826040516024016101a09291906102c5565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f319af3330000000000000000000000000000000000000000000000000000000017905261021f565b5050565b80516a636f6e736f6c652e6c6f67602083016000808483855afa5050505050565b6000815180845260005b818110156102665760208185018101518683018201520161024a565b81811115610278576000602083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6020815260006102be6020830184610240565b9392505050565b6040815260006102d86040830185610240565b905073ffffffffffffffffffffffffffffffffffffffff83166020830152939250505056fea264697066735822122060831dd97e0faa11a84fe22c5d8766249f7295914449e80d660273bcf006002464736f6c634300080f0033";

type SafeProxy4337ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SafeProxy4337ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SafeProxy4337__factory extends ContractFactory {
  constructor(...args: SafeProxy4337ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    singleton: PromiseOrValue<string>,
    aaModule: PromiseOrValue<string>,
    owner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<SafeProxy4337> {
    return super.deploy(
      singleton,
      aaModule,
      owner,
      overrides || {}
    ) as Promise<SafeProxy4337>;
  }
  override getDeployTransaction(
    singleton: PromiseOrValue<string>,
    aaModule: PromiseOrValue<string>,
    owner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      singleton,
      aaModule,
      owner,
      overrides || {}
    );
  }
  override attach(address: string): SafeProxy4337 {
    return super.attach(address) as SafeProxy4337;
  }
  override connect(signer: Signer): SafeProxy4337__factory {
    return super.connect(signer) as SafeProxy4337__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SafeProxy4337Interface {
    return new utils.Interface(_abi) as SafeProxy4337Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SafeProxy4337 {
    return new Contract(address, _abi, signerOrProvider) as SafeProxy4337;
  }
}
