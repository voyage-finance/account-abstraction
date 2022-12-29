/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  SimpleAccountForTokens,
  SimpleAccountForTokensInterface,
} from "../../../contracts/samples/SimpleAccountForTokens";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IEntryPoint",
        name: "_entryPoint",
        type: "address",
      },
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        internalType: "contract IERC20",
        name: "token",
        type: "address",
      },
      {
        internalType: "address",
        name: "paymaster",
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
  "0x60806040523480156200001157600080fd5b50604051620018f6380380620018f68339810160408190526200003491620001c8565b838381600160006101000a8154816001600160a01b0302191690836001600160a01b03160217905550806000600c6101000a8154816001600160a01b0302191690836001600160a01b03160217905550620000bf6040518060400160405280600d81526020016c14da5b5c1b195058d8dbdd5b9d609a1b8152506200014360201b620008a81760201c565b505060405163095ea7b360e01b81526001600160a01b038281166004830152600019602483015283169063095ea7b3906044016020604051808303816000875af115801562000112573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000138919062000230565b5050505050620002b3565b6200018e816040516024016200015a91906200025b565b60408051601f198184030181529190526020810180516001600160e01b0390811663104c13eb60e21b179091526200019116565b50565b80516a636f6e736f6c652e6c6f67602083016000808483855afa5050505050565b6001600160a01b03811681146200018e57600080fd5b60008060008060808587031215620001df57600080fd5b8451620001ec81620001b2565b6020860151909450620001ff81620001b2565b60408601519093506200021281620001b2565b60608601519092506200022581620001b2565b939692955090935050565b6000602082840312156200024357600080fd5b815180151581146200025457600080fd5b9392505050565b600060208083528351808285015260005b818110156200028a578581018301518582016040015282016200026c565b818111156200029d576000604083870101525b50601f01601f1916929092016040019392505050565b61163380620002c36000396000f3fe6080604052600436106100cb5760003560e01c80638da5cb5b11610074578063b0d691fe1161004e578063b0d691fe1461022b578063c399ec8814610256578063d0cb75fa1461026b57600080fd5b80638da5cb5b14610194578063a9059cbb146101f6578063affed0e01461021657600080fd5b80634a58db19116100a55780634a58db191461014c5780634d44560d1461015457806380c5c7d01461017457600080fd5b80630565bb67146100d75780630825d1fc146100f95780631b71bb6e1461012c57600080fd5b366100d257005b600080fd5b3480156100e357600080fd5b506100f76100f2366004611205565b61028b565b005b34801561010557600080fd5b5061011961011436600461128e565b610318565b6040519081526020015b60405180910390f35b34801561013857600080fd5b506100f76101473660046112f5565b610457565b6100f761046b565b34801561016057600080fd5b506100f761016f366004611319565b6104f6565b34801561018057600080fd5b506100f761018f366004611205565b6105a5565b3480156101a057600080fd5b506000546101d1906c01000000000000000000000000900473ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610123565b34801561020257600080fd5b506100f7610211366004611319565b6105eb565b34801561022257600080fd5b5061011961063b565b34801561023757600080fd5b5060015473ffffffffffffffffffffffffffffffffffffffff166101d1565b34801561026257600080fd5b50610119610690565b34801561027757600080fd5b506100f761028636600461138a565b610746565b610293610937565b6102d16040518060400160405280601281526020017f53696d706c654163636f756e742e6578656300000000000000000000000000008152506108a8565b610312848484848080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506109d492505050565b50505050565b60006103586040518060400160405280602081526020017f737461727420426173654163636f756e742e76616c6964617465557365724f708152506108a8565b610360610a51565b61039e6040518060400160405280601881526020017f656e6420636865636b696e6720656e74727920706f696e7400000000000000008152506108a8565b6103a9858585610ad2565b90506103b860408601866113f6565b90506000036103ca576103ca85610c24565b6104086040518060400160405280601581526020017f656e6420636865636b696e6720646561646c696e6500000000000000000000008152506108a8565b61041182610cec565b61044f6040518060400160405280600f81526020017f656e64205f70617950726566756e6400000000000000000000000000000000008152506108a8565b949350505050565b61045f610d57565b61046881610d5f565b50565b600061048c60015473ffffffffffffffffffffffffffffffffffffffff1690565b73ffffffffffffffffffffffffffffffffffffffff163460405160006040518083038185875af1925050503d80600081146104e3576040519150601f19603f3d011682016040523d82523d6000602084013e6104e8565b606091505b505090508061046857600080fd5b6104fe610937565b60015473ffffffffffffffffffffffffffffffffffffffff166040517f205c287800000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff848116600483015260248201849052919091169063205c287890604401600060405180830381600087803b15801561058957600080fd5b505af115801561059d573d6000803e3d6000fd5b505050505050565b6105e36040518060400160405280602081526020017f53696d706c654163636f756e742e6578656346726f6d456e747279506f696e748152506108a8565b6102d1610a51565b6105f3610937565b60405173ffffffffffffffffffffffffffffffffffffffff83169082156108fc029083906000818181858888f19350505050158015610636573d6000803e3d6000fd5b505050565b600061067b6040518060400160405280600881526020017f6e6f6e63652e2e2e0000000000000000000000000000000000000000000000008152506108a8565b506000546bffffffffffffffffffffffff1690565b60006106b160015473ffffffffffffffffffffffffffffffffffffffff1690565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff91909116906370a0823190602401602060405180830381865afa15801561071d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610741919061145b565b905090565b61074e610937565b61078c6040518060400160405280601781526020017f53696d706c654163636f756e742e6578656342617463680000000000000000008152506108a8565b8281146107fa576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f77726f6e67206172726179206c656e677468730000000000000000000000000060448201526064015b60405180910390fd5b60005b838110156108a15761088f85858381811061081a5761081a611474565b905060200201602081019061082f91906112f5565b600085858581811061084357610843611474565b905060200281019061085591906113f6565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506109d492505050565b80610899816114d2565b9150506107fd565b5050505050565b610468816040516024016108bc9190611536565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f41304fac00000000000000000000000000000000000000000000000000000000179052610ded565b6000546c01000000000000000000000000900473ffffffffffffffffffffffffffffffffffffffff1633148061096c57503330145b6109d2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600a60248201527f6f6e6c79206f776e65720000000000000000000000000000000000000000000060448201526064016107f1565b565b6000808473ffffffffffffffffffffffffffffffffffffffff1684846040516109fd9190611587565b60006040518083038185875af1925050503d8060008114610a3a576040519150601f19603f3d011682016040523d82523d6000602084013e610a3f565b606091505b5091509150816108a157805160208201fd5b60015473ffffffffffffffffffffffffffffffffffffffff1633146109d2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601c60248201527f6163636f756e743a206e6f742066726f6d20456e747279506f696e740000000060448201526064016107f1565b600080610b2c846040517f19457468657265756d205369676e6564204d6573736167653a0a3332000000006020820152603c8101829052600090605c01604051602081830303815290604052805190602001209050919050565b9050610b7c610b3f6101408701876113f6565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152508593925050610e0e9050565b6000546c01000000000000000000000000900473ffffffffffffffffffffffffffffffffffffffff90811691161480610bb3575032155b610c19576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601a60248201527f6163636f756e743a2077726f6e67207369676e6174757265207800000000000060448201526064016107f1565b506000949350505050565b600080546020830135916bffffffffffffffffffffffff9091169080610c49836115a3565b91906101000a8154816bffffffffffffffffffffffff02191690836bffffffffffffffffffffffff1602179055506bffffffffffffffffffffffff1614610468576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f6163636f756e743a20696e76616c6964206e6f6e63650000000000000000000060448201526064016107f1565b80156104685760405160009033907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff90849084818181858888f193505050503d80600081146108a1576040519150601f19603f3d011682016040523d82523d6000602084013e6108a1565b6109d2610937565b60015460405173ffffffffffffffffffffffffffffffffffffffff8084169216907f450909c1478d09248269d4ad4fa8cba61ca3f50faed58c7aedefa51c7f62b83a90600090a3600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b80516a636f6e736f6c652e6c6f67602083016000808483855afa5050505050565b6000806000610e1d8585610e32565b91509150610e2a81610e77565b509392505050565b6000808251604103610e685760208301516040840151606085015160001a610e5c878285856110cb565b94509450505050610e70565b506000905060025b9250929050565b6000816004811115610e8b57610e8b6115ce565b03610e935750565b6001816004811115610ea757610ea76115ce565b03610f0e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f45434453413a20696e76616c6964207369676e6174757265000000000000000060448201526064016107f1565b6002816004811115610f2257610f226115ce565b03610f89576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e6774680060448201526064016107f1565b6003816004811115610f9d57610f9d6115ce565b0361102a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c60448201527f756500000000000000000000000000000000000000000000000000000000000060648201526084016107f1565b600481600481111561103e5761103e6115ce565b03610468576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202776272076616c60448201527f756500000000000000000000000000000000000000000000000000000000000060648201526084016107f1565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a083111561110257506000905060036111da565b8460ff16601b1415801561111a57508460ff16601c14155b1561112b57506000905060046111da565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa15801561117f573d6000803e3d6000fd5b50506040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0015191505073ffffffffffffffffffffffffffffffffffffffff81166111d3576000600192509250506111da565b9150600090505b94509492505050565b73ffffffffffffffffffffffffffffffffffffffff8116811461046857600080fd5b6000806000806060858703121561121b57600080fd5b8435611226816111e3565b935060208501359250604085013567ffffffffffffffff8082111561124a57600080fd5b818701915087601f83011261125e57600080fd5b81358181111561126d57600080fd5b88602082850101111561127f57600080fd5b95989497505060200194505050565b600080600080608085870312156112a457600080fd5b843567ffffffffffffffff8111156112bb57600080fd5b850161016081880312156112ce57600080fd5b93506020850135925060408501356112e5816111e3565b9396929550929360600135925050565b60006020828403121561130757600080fd5b8135611312816111e3565b9392505050565b6000806040838503121561132c57600080fd5b8235611337816111e3565b946020939093013593505050565b60008083601f84011261135757600080fd5b50813567ffffffffffffffff81111561136f57600080fd5b6020830191508360208260051b8501011115610e7057600080fd5b600080600080604085870312156113a057600080fd5b843567ffffffffffffffff808211156113b857600080fd5b6113c488838901611345565b909650945060208701359150808211156113dd57600080fd5b506113ea87828801611345565b95989497509550505050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261142b57600080fd5b83018035915067ffffffffffffffff82111561144657600080fd5b602001915036819003821315610e7057600080fd5b60006020828403121561146d57600080fd5b5051919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203611503576115036114a3565b5060010190565b60005b8381101561152557818101518382015260200161150d565b838111156103125750506000910152565b602081526000825180602084015261155581604085016020870161150a565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169190910160400192915050565b6000825161159981846020870161150a565b9190910192915050565b60006bffffffffffffffffffffffff8083168181036115c4576115c46114a3565b6001019392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fdfea2646970667358221220457853117a20972425e752b1617fa77ea0b7ee86ff1f42f699377691c3a665a064736f6c634300080f0033";

type SimpleAccountForTokensConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SimpleAccountForTokensConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SimpleAccountForTokens__factory extends ContractFactory {
  constructor(...args: SimpleAccountForTokensConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _entryPoint: PromiseOrValue<string>,
    _owner: PromiseOrValue<string>,
    token: PromiseOrValue<string>,
    paymaster: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<SimpleAccountForTokens> {
    return super.deploy(
      _entryPoint,
      _owner,
      token,
      paymaster,
      overrides || {}
    ) as Promise<SimpleAccountForTokens>;
  }
  override getDeployTransaction(
    _entryPoint: PromiseOrValue<string>,
    _owner: PromiseOrValue<string>,
    token: PromiseOrValue<string>,
    paymaster: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _entryPoint,
      _owner,
      token,
      paymaster,
      overrides || {}
    );
  }
  override attach(address: string): SimpleAccountForTokens {
    return super.attach(address) as SimpleAccountForTokens;
  }
  override connect(signer: Signer): SimpleAccountForTokens__factory {
    return super.connect(signer) as SimpleAccountForTokens__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SimpleAccountForTokensInterface {
    return new utils.Interface(_abi) as SimpleAccountForTokensInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SimpleAccountForTokens {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as SimpleAccountForTokens;
  }
}
