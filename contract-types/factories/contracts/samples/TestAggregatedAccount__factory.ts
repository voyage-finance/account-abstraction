/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  TestAggregatedAccount,
  TestAggregatedAccountInterface,
} from "../../../contracts/samples/TestAggregatedAccount";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IEntryPoint",
        name: "anEntryPoint",
        type: "address",
      },
      {
        internalType: "address",
        name: "anAggregator",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "oldEntryPoint",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newEntryPoint",
        type: "address",
      },
    ],
    name: "EntryPointChanged",
    type: "event",
  },
  {
    inputs: [],
    name: "addDeposit",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "aggregator",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "entryPoint",
    outputs: [
      {
        internalType: "contract IEntryPoint",
        name: "",
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
        name: "dest",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "func",
        type: "bytes",
      },
    ],
    name: "exec",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "dest",
        type: "address[]",
      },
      {
        internalType: "bytes[]",
        name: "func",
        type: "bytes[]",
      },
    ],
    name: "execBatch",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "dest",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "func",
        type: "bytes",
      },
    ],
    name: "execFromEntryPoint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getAggregator",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getDeposit",
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
  {
    inputs: [],
    name: "nonce",
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
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "dest",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newEntryPoint",
        type: "address",
      },
    ],
    name: "updateEntryPoint",
    outputs: [],
    stateMutability: "nonpayable",
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
        name: "userOp",
        type: "tuple",
      },
      {
        internalType: "bytes32",
        name: "userOpHash",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "aggregator",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "missingAccountFunds",
        type: "uint256",
      },
    ],
    name: "validateUserOp",
    outputs: [
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "withdrawAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdrawDepositTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x60a06040523480156200001157600080fd5b506040516200141a3803806200141a833981016040819052620000349162000137565b600180546001600160a01b0319166001600160a01b038416179055600080546001600160601b0316815560408051808201909152600d81526c14da5b5c1b195058d8dbdd5b9d609a1b6020808301919091528492916200009d91620000b2811b6200092517901c565b50506001600160a01b031660805250620001ce565b620000fd81604051602401620000c9919062000176565b60408051601f198184030181529190526020810180516001600160e01b0390811663104c13eb60e21b179091526200010016565b50565b80516a636f6e736f6c652e6c6f67602083016000808483855afa5050505050565b6001600160a01b0381168114620000fd57600080fd5b600080604083850312156200014b57600080fd5b8251620001588162000121565b60208401519092506200016b8162000121565b809150509250929050565b600060208083528351808285015260005b81811015620001a55785810183015185820160400152820162000187565b81811115620001b8576000604083870101525b50601f01601f1916929092016040019392505050565b608051611222620001f860003960008181610174015281816101ca0152610b5301526112226000f3fe6080604052600436106100e15760003560e01c806380c5c7d01161007f578063affed0e011610059578063affed0e014610293578063b0d691fe146102a8578063c399ec88146102d3578063d0cb75fa146102e857600080fd5b806380c5c7d0146102165780638da5cb5b14610236578063a9059cbb1461027357600080fd5b8063245a7bfc116100bb578063245a7bfc146101625780633ad59dbc146101bb5780634a58db19146101ee5780634d44560d146101f657600080fd5b80630565bb67146100ed5780630825d1fc1461010f5780631b71bb6e1461014257600080fd5b366100e857005b600080fd5b3480156100f957600080fd5b5061010d610108366004610e1c565b610308565b005b34801561011b57600080fd5b5061012f61012a366004610ea5565b610395565b6040519081526020015b60405180910390f35b34801561014e57600080fd5b5061010d61015d366004610f0c565b6104d4565b34801561016e57600080fd5b506101967f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610139565b3480156101c757600080fd5b507f0000000000000000000000000000000000000000000000000000000000000000610196565b61010d6104e8565b34801561020257600080fd5b5061010d610211366004610f30565b610573565b34801561022257600080fd5b5061010d610231366004610e1c565b610622565b34801561024257600080fd5b50600054610196906c01000000000000000000000000900473ffffffffffffffffffffffffffffffffffffffff1681565b34801561027f57600080fd5b5061010d61028e366004610f30565b610668565b34801561029f57600080fd5b5061012f6106b8565b3480156102b457600080fd5b5060015473ffffffffffffffffffffffffffffffffffffffff16610196565b3480156102df57600080fd5b5061012f61070d565b3480156102f457600080fd5b5061010d610303366004610fa8565b6107c3565b6103106109b4565b61034e6040518060400160405280601281526020017f53696d706c654163636f756e742e657865630000000000000000000000000000815250610925565b61038f848484848080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250610a5192505050565b50505050565b60006103d56040518060400160405280602081526020017f737461727420426173654163636f756e742e76616c6964617465557365724f70815250610925565b6103dd610ace565b61041b6040518060400160405280601881526020017f656e6420636865636b696e6720656e74727920706f696e740000000000000000815250610925565b610426858585610b4f565b90506104356040860186611014565b90506000036104475761044785610c10565b6104856040518060400160405280601581526020017f656e6420636865636b696e6720646561646c696e650000000000000000000000815250610925565b61048e82610cd8565b6104cc6040518060400160405280600f81526020017f656e64205f70617950726566756e640000000000000000000000000000000000815250610925565b949350505050565b6104dc610d43565b6104e581610d4b565b50565b600061050960015473ffffffffffffffffffffffffffffffffffffffff1690565b73ffffffffffffffffffffffffffffffffffffffff163460405160006040518083038185875af1925050503d8060008114610560576040519150601f19603f3d011682016040523d82523d6000602084013e610565565b606091505b50509050806104e557600080fd5b61057b6109b4565b60015473ffffffffffffffffffffffffffffffffffffffff166040517f205c287800000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff848116600483015260248201849052919091169063205c287890604401600060405180830381600087803b15801561060657600080fd5b505af115801561061a573d6000803e3d6000fd5b505050505050565b6106606040518060400160405280602081526020017f53696d706c654163636f756e742e6578656346726f6d456e747279506f696e74815250610925565b61034e610ace565b6106706109b4565b60405173ffffffffffffffffffffffffffffffffffffffff83169082156108fc029083906000818181858888f193505050501580156106b3573d6000803e3d6000fd5b505050565b60006106f86040518060400160405280600881526020017f6e6f6e63652e2e2e000000000000000000000000000000000000000000000000815250610925565b506000546bffffffffffffffffffffffff1690565b600061072e60015473ffffffffffffffffffffffffffffffffffffffff1690565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff91909116906370a0823190602401602060405180830381865afa15801561079a573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107be9190611079565b905090565b6107cb6109b4565b6108096040518060400160405280601781526020017f53696d706c654163636f756e742e657865634261746368000000000000000000815250610925565b828114610877576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f77726f6e67206172726179206c656e677468730000000000000000000000000060448201526064015b60405180910390fd5b60005b8381101561091e5761090c85858381811061089757610897611092565b90506020020160208101906108ac9190610f0c565b60008585858181106108c0576108c0611092565b90506020028101906108d29190611014565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250610a5192505050565b80610916816110f0565b91505061087a565b5050505050565b6104e5816040516024016109399190611154565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f41304fac00000000000000000000000000000000000000000000000000000000179052610dd9565b6000546c01000000000000000000000000900473ffffffffffffffffffffffffffffffffffffffff163314806109e957503330145b610a4f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600a60248201527f6f6e6c79206f776e657200000000000000000000000000000000000000000000604482015260640161086e565b565b6000808473ffffffffffffffffffffffffffffffffffffffff168484604051610a7a91906111a5565b60006040518083038185875af1925050503d8060008114610ab7576040519150601f19603f3d011682016040523d82523d6000602084013e610abc565b606091505b50915091508161091e57805160208201fd5b60015473ffffffffffffffffffffffffffffffffffffffff163314610a4f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601c60248201527f6163636f756e743a206e6f742066726f6d20456e747279506f696e7400000000604482015260640161086e565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614610c06576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f77726f6e672061676772656761746f7200000000000000000000000000000000604482015260640161086e565b5060009392505050565b600080546020830135916bffffffffffffffffffffffff9091169080610c35836111c1565b91906101000a8154816bffffffffffffffffffffffff02191690836bffffffffffffffffffffffff1602179055506bffffffffffffffffffffffff16146104e5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f6163636f756e743a20696e76616c6964206e6f6e636500000000000000000000604482015260640161086e565b80156104e55760405160009033907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff90849084818181858888f193505050503d806000811461091e576040519150601f19603f3d011682016040523d82523d6000602084013e61091e565b610a4f6109b4565b60015460405173ffffffffffffffffffffffffffffffffffffffff8084169216907f450909c1478d09248269d4ad4fa8cba61ca3f50faed58c7aedefa51c7f62b83a90600090a3600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b80516a636f6e736f6c652e6c6f67602083016000808483855afa5050505050565b73ffffffffffffffffffffffffffffffffffffffff811681146104e557600080fd5b60008060008060608587031215610e3257600080fd5b8435610e3d81610dfa565b935060208501359250604085013567ffffffffffffffff80821115610e6157600080fd5b818701915087601f830112610e7557600080fd5b813581811115610e8457600080fd5b886020828501011115610e9657600080fd5b95989497505060200194505050565b60008060008060808587031215610ebb57600080fd5b843567ffffffffffffffff811115610ed257600080fd5b85016101608188031215610ee557600080fd5b9350602085013592506040850135610efc81610dfa565b9396929550929360600135925050565b600060208284031215610f1e57600080fd5b8135610f2981610dfa565b9392505050565b60008060408385031215610f4357600080fd5b8235610f4e81610dfa565b946020939093013593505050565b60008083601f840112610f6e57600080fd5b50813567ffffffffffffffff811115610f8657600080fd5b6020830191508360208260051b8501011115610fa157600080fd5b9250929050565b60008060008060408587031215610fbe57600080fd5b843567ffffffffffffffff80821115610fd657600080fd5b610fe288838901610f5c565b90965094506020870135915080821115610ffb57600080fd5b5061100887828801610f5c565b95989497509550505050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261104957600080fd5b83018035915067ffffffffffffffff82111561106457600080fd5b602001915036819003821315610fa157600080fd5b60006020828403121561108b57600080fd5b5051919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203611121576111216110c1565b5060010190565b60005b8381101561114357818101518382015260200161112b565b8381111561038f5750506000910152565b6020815260008251806020840152611173816040850160208701611128565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169190910160400192915050565b600082516111b7818460208701611128565b9190910192915050565b60006bffffffffffffffffffffffff8083168181036111e2576111e26110c1565b600101939250505056fea264697066735822122069bd4944c8fc65d82ba28ca7e69627b21f5a64091e6602bd13db5ee34348effb64736f6c634300080f0033";

type TestAggregatedAccountConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TestAggregatedAccountConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TestAggregatedAccount__factory extends ContractFactory {
  constructor(...args: TestAggregatedAccountConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    anEntryPoint: PromiseOrValue<string>,
    anAggregator: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TestAggregatedAccount> {
    return super.deploy(
      anEntryPoint,
      anAggregator,
      overrides || {}
    ) as Promise<TestAggregatedAccount>;
  }
  override getDeployTransaction(
    anEntryPoint: PromiseOrValue<string>,
    anAggregator: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      anEntryPoint,
      anAggregator,
      overrides || {}
    );
  }
  override attach(address: string): TestAggregatedAccount {
    return super.attach(address) as TestAggregatedAccount;
  }
  override connect(signer: Signer): TestAggregatedAccount__factory {
    return super.connect(signer) as TestAggregatedAccount__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestAggregatedAccountInterface {
    return new utils.Interface(_abi) as TestAggregatedAccountInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestAggregatedAccount {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as TestAggregatedAccount;
  }
}
