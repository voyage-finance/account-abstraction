/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  DebugTransactionGuard,
  DebugTransactionGuardInterface,
} from "../../../../../contracts/gnosis/examples/guards/DebugTransactionGuard";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "safe",
        type: "address",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "txHash",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "nonce",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "success",
        type: "bool",
      },
    ],
    name: "GasUsage",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "safe",
        type: "address",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "txHash",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "enum Enum.Operation",
        name: "operation",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "safeTxGas",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "usesRefund",
        type: "bool",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "nonce",
        type: "uint256",
      },
    ],
    name: "TransactionDetails",
    type: "event",
  },
  {
    stateMutability: "nonpayable",
    type: "fallback",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "txHash",
        type: "bytes32",
      },
      {
        internalType: "bool",
        name: "success",
        type: "bool",
      },
    ],
    name: "checkAfterExecution",
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
      {
        internalType: "uint256",
        name: "safeTxGas",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "baseGas",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "gasPrice",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "gasToken",
        type: "address",
      },
      {
        internalType: "address payable",
        name: "refundReceiver",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "checkTransaction",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
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
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "txNonces",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610861806100206000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806301ffc9a71461004e57806375f0bb52146100765780639327136814610089578063ddbdba631461009c575b005b61006161005c3660046103be565b6100ca565b60405190151581526020015b60405180910390f35b61004c610084366004610519565b610163565b61004c6100973660046105fe565b6102f1565b6100bc6100aa366004610633565b60006020819052908152604090205481565b60405190815260200161006d565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167fe6d7a83a00000000000000000000000000000000000000000000000000000000148061015d57507fffffffff0000000000000000000000000000000000000000000000000000000082167f01ffc9a700000000000000000000000000000000000000000000000000000000145b92915050565b600080600033905060018173ffffffffffffffffffffffffffffffffffffffff1663affed0e06040518163ffffffff1660e01b8152600401602060405180830381865afa1580156101b8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101dc919061064c565b6101e69190610665565b92508073ffffffffffffffffffffffffffffffffffffffff1663d8d11f788f8f8f8f8f8f8f8f8f8d6040518b63ffffffff1660e01b81526004016102339a99989796959493929190610749565b602060405180830381865afa158015610250573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610274919061064c565b915050803373ffffffffffffffffffffffffffffffffffffffff167f1b68334da83afaffd8348d6c85c5146d8e7de31a6c034d2d522be12d615c4f7b8f8f8f8f8f60008f118a6040516102cd97969594939291906107c9565b60405180910390a36000908152602081905260409020555050505050505050505050565b6000828152602081905260408120549081900361036e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f436f756c64206e6f7420676574206e6f6e636500000000000000000000000000604482015260640160405180910390fd5b60008381526020818152604080832092909255905183151581528291859133917f0dcc0fb56a30b6fe6b188f45b47369bc7f3c928a9748e245a79fc3f54ddd0568910160405180910390a4505050565b6000602082840312156103d057600080fd5b81357fffffffff000000000000000000000000000000000000000000000000000000008116811461040057600080fd5b9392505050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461042b57600080fd5b919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600082601f83011261047057600080fd5b813567ffffffffffffffff8082111561048b5761048b610430565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f011681019082821181831017156104d1576104d1610430565b816040528381528660208588010111156104ea57600080fd5b836020870160208301376000602085830101528094505050505092915050565b80356002811061042b57600080fd5b60008060008060008060008060008060006101608c8e03121561053b57600080fd5b6105448c610407565b9a5060208c0135995067ffffffffffffffff8060408e0135111561056757600080fd5b6105778e60408f01358f0161045f565b995061058560608e0161050a565b985060808d0135975060a08d0135965060c08d013595506105a860e08e01610407565b94506105b76101008e01610407565b9350806101208e013511156105cb57600080fd5b506105dd8d6101208e01358e0161045f565b91506105ec6101408d01610407565b90509295989b509295989b9093969950565b6000806040838503121561061157600080fd5b823591506020830135801515811461062857600080fd5b809150509250929050565b60006020828403121561064557600080fd5b5035919050565b60006020828403121561065e57600080fd5b5051919050565b60008282101561069e577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b500390565b6000815180845260005b818110156106c9576020818501810151868301820152016106ad565b818111156106db576000602083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b60028110610745577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b9052565b600061014073ffffffffffffffffffffffffffffffffffffffff808e1684528c60208501528160408501526107808285018d6106a3565b925061078f606085018c61070e565b60808401999099525060a082019690965260c081019490945291851660e08401529093166101008201526101200191909152949350505050565b73ffffffffffffffffffffffffffffffffffffffff8816815286602082015260e0604082015260006107fe60e08301886106a3565b905061080d606083018761070e565b608082019490945291151560a083015260c09091015294935050505056fea2646970667358221220a4d4263e223608e034fedc6ca210d24f5ee41e7a5d56e6e45ce3639126e4f9ff64736f6c634300080f0033";

type DebugTransactionGuardConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DebugTransactionGuardConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DebugTransactionGuard__factory extends ContractFactory {
  constructor(...args: DebugTransactionGuardConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<DebugTransactionGuard> {
    return super.deploy(overrides || {}) as Promise<DebugTransactionGuard>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): DebugTransactionGuard {
    return super.attach(address) as DebugTransactionGuard;
  }
  override connect(signer: Signer): DebugTransactionGuard__factory {
    return super.connect(signer) as DebugTransactionGuard__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DebugTransactionGuardInterface {
    return new utils.Interface(_abi) as DebugTransactionGuardInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DebugTransactionGuard {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as DebugTransactionGuard;
  }
}
