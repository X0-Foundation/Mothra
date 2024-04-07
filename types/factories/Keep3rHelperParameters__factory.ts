/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  Keep3rHelperParameters,
  Keep3rHelperParametersInterface,
} from "../Keep3rHelperParameters";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_keep3rV2",
        type: "address",
      },
      {
        internalType: "address",
        name: "_governance",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "InvalidKp3rPool",
    type: "error",
  },
  {
    inputs: [],
    name: "NoGovernanceZeroAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "OnlyGovernance",
    type: "error",
  },
  {
    inputs: [],
    name: "OnlyPendingGovernance",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_pendingGovernance",
        type: "address",
      },
    ],
    name: "GovernanceProposal",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_governance",
        type: "address",
      },
    ],
    name: "GovernanceSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_keep3rV2",
        type: "address",
      },
    ],
    name: "Keep3rV2Change",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_address",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "_isKP3RToken0",
        type: "bool",
      },
    ],
    name: "Kp3rWethPoolChange",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_maxBoost",
        type: "uint256",
      },
    ],
    name: "MaxBoostChange",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_minBoost",
        type: "uint256",
      },
    ],
    name: "MinBoostChange",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_targetBond",
        type: "uint256",
      },
    ],
    name: "TargetBondChange",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_workExtraGas",
        type: "uint256",
      },
    ],
    name: "WorkExtraGasChange",
    type: "event",
  },
  {
    inputs: [],
    name: "BOOST_BASE",
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
    name: "KP3R",
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
    name: "acceptGovernance",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "governance",
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
    name: "keep3rV2",
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
    name: "kp3rWethPool",
    outputs: [
      {
        internalType: "address",
        name: "poolAddress",
        type: "address",
      },
      {
        internalType: "bool",
        name: "isKP3RToken0",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "maxBoost",
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
    name: "minBoost",
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
    name: "pendingGovernance",
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
        internalType: "address",
        name: "_governance",
        type: "address",
      },
    ],
    name: "setGovernance",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_keep3rV2",
        type: "address",
      },
    ],
    name: "setKeep3rV2",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_poolAddress",
        type: "address",
      },
    ],
    name: "setKp3rWethPool",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_maxBoost",
        type: "uint256",
      },
    ],
    name: "setMaxBoost",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_minBoost",
        type: "uint256",
      },
    ],
    name: "setMinBoost",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_targetBond",
        type: "uint256",
      },
    ],
    name: "setTargetBond",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_workExtraGas",
        type: "uint256",
      },
    ],
    name: "setWorkExtraGas",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "targetBond",
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
    name: "workExtraGas",
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
  "0x6080604052612af8600255612ee0600355680ad78ebc5ac620000060045561c35060055534801561002f57600080fd5b50604051610b1f380380610b1f83398101604081905261004e91610270565b806001600160a01b0381166100755760405162b293ed60e81b815260040160405180910390fd5b600080546001600160a01b03199081166001600160a01b0393841617909155600680549091169184169190911790556100c17311b7a6bc0259ed6cf9db8f499988f9ecc7167bf56100c8565b50506102c5565b6000731ceb5cb57c4d4e2b2433641b95dd330a33185a446001600160a01b0316826001600160a01b0316630dfe16816040518163ffffffff1660e01b8152600401602060405180830381865afa158015610126573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061014a91906102a3565b6001600160a01b03161490506000731ceb5cb57c4d4e2b2433641b95dd330a33185a446001600160a01b0316836001600160a01b031663d21220a76040518163ffffffff1660e01b8152600401602060405180830381865afa1580156101b4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101d891906102a3565b6001600160a01b0316149050811580156101f0575080155b1561020e57604051637c395fed60e01b815260040160405180910390fd5b50604080518082019091526001600160a01b03929092168083529015156020909201829052600780546001600160a81b031916909117600160a01b909202919091179055565b80516001600160a01b038116811461026b57600080fd5b919050565b6000806040838503121561028357600080fd5b61028c83610254565b915061029a60208401610254565b90509250929050565b6000602082840312156102b557600080fd5b6102be82610254565b9392505050565b61084b806102d46000396000f3fe608060405234801561001057600080fd5b50600436106101165760003560e01c80633cc7ab30116100a25780638561579c116100715780638561579c1461023f578063ab033ea914610248578063ab5dce001461025b578063b2e0df961461026e578063f39c38a01461028157600080fd5b80633cc7ab30146101d25780633facf242146101e55780635aa6e675146101ee5780637b40c9131461020157600080fd5b8063238efcbc116100e9578063238efcbc1461018e57806325f09e61146101965780632742b9e7146101ad578063289adb44146101b657806337090c2f146101c957600080fd5b806305e0b9a01461011b5780630c52583514610153578063117cfc1b14610168578063160e1e311461017b575b600080fd5b610136731ceb5cb57c4d4e2b2433641b95dd330a33185a4481565b6040516001600160a01b0390911681526020015b60405180910390f35b6101666101613660046107a3565b610294565b005b600654610136906001600160a01b031681565b6101666101893660046107d4565b6102fb565b61016661037c565b61019f61271081565b60405190815260200161014a565b61019f60045481565b6101666101c43660046107a3565b610405565b61019f60035481565b6101666101e03660046107d4565b610465565b61019f60055481565b600054610136906001600160a01b031681565b600754610220906001600160a01b03811690600160a01b900460ff1682565b604080516001600160a01b03909316835290151560208301520161014a565b61019f60025481565b6101666102563660046107d4565b6104de565b6101666102693660046107a3565b610557565b61016661027c3660046107a3565b6105b7565b600154610136906001600160a01b031681565b6000546001600160a01b031633146102bf576040516354348f0360e01b815260040160405180910390fd5b60028190556040518181527f0919fdaaac0f59c6bc7eeef4f975d6163475220f1e4820d0bce99c84c51cac1d906020015b60405180910390a150565b6000546001600160a01b03163314610326576040516354348f0360e01b815260040160405180910390fd5b61032f81610617565b600754604080516001600160a01b0383168152600160a01b90920460ff16151560208301527f554c636366d5fc882a9ab4b7b9d5181781d1a7076abe50ed410365620dcf410891016102f0565b6001546001600160a01b031633146103a757604051637ef5703160e11b815260040160405180910390fd5b60018054600080546001600160a01b0383166001600160a01b031991821681179092559091169091556040519081527fc73be659241aade67e9a059bcf21494955018b213dbd1179054ccf928b13f3b69060200160405180910390a1565b6000546001600160a01b03163314610430576040516354348f0360e01b815260040160405180910390fd5b60058190556040518181527fed847bdbab1a30becee18585f23c759bd06156561390d2e7fbffd18e74b56c9b906020016102f0565b6000546001600160a01b03163314610490576040516354348f0360e01b815260040160405180910390fd5b600680546001600160a01b0319166001600160a01b0383169081179091556040519081527fcf744e4fc39d49b6d8103035078629b8a3be95adc007b0d663e96bdff777b10a906020016102f0565b6000546001600160a01b03163314610509576040516354348f0360e01b815260040160405180910390fd5b600180546001600160a01b0319166001600160a01b0383169081179091556040519081527fe987aaedf9d279143bdf1eee16cf1d0feb47742867d81083df8d6cd0a5ac857f906020016102f0565b6000546001600160a01b03163314610582576040516354348f0360e01b815260040160405180910390fd5b60048190556040518181527feac367d684b6ac6c6ae7e3e852c06f17e6354e0f1e7122832c3e6d17e0a2b71e906020016102f0565b6000546001600160a01b031633146105e2576040516354348f0360e01b815260040160405180910390fd5b60038190556040518181527fa1292b4e7a0d916ccfd2bc83858b05f328e344d1f0f507d97ac66723ac7c2aaa906020016102f0565b6000731ceb5cb57c4d4e2b2433641b95dd330a33185a446001600160a01b0316826001600160a01b0316630dfe16816040518163ffffffff1660e01b8152600401602060405180830381865afa158015610675573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061069991906107f8565b6001600160a01b03161490506000731ceb5cb57c4d4e2b2433641b95dd330a33185a446001600160a01b0316836001600160a01b031663d21220a76040518163ffffffff1660e01b8152600401602060405180830381865afa158015610703573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061072791906107f8565b6001600160a01b03161490508115801561073f575080155b1561075d57604051637c395fed60e01b815260040160405180910390fd5b50604080518082019091526001600160a01b03929092168083529015156020909201829052600780546001600160a81b031916909117600160a01b909202919091179055565b6000602082840312156107b557600080fd5b5035919050565b6001600160a01b03811681146107d157600080fd5b50565b6000602082840312156107e657600080fd5b81356107f1816107bc565b9392505050565b60006020828403121561080a57600080fd5b81516107f1816107bc56fea2646970667358221220245ab376c5485d90def31b1474c6eb37f1853b4b9bdd19d51eb721130a49efbb64736f6c634300080e0033";

export class Keep3rHelperParameters__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    _keep3rV2: string,
    _governance: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Keep3rHelperParameters> {
    return super.deploy(
      _keep3rV2,
      _governance,
      overrides || {}
    ) as Promise<Keep3rHelperParameters>;
  }
  getDeployTransaction(
    _keep3rV2: string,
    _governance: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_keep3rV2, _governance, overrides || {});
  }
  attach(address: string): Keep3rHelperParameters {
    return super.attach(address) as Keep3rHelperParameters;
  }
  connect(signer: Signer): Keep3rHelperParameters__factory {
    return super.connect(signer) as Keep3rHelperParameters__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): Keep3rHelperParametersInterface {
    return new utils.Interface(_abi) as Keep3rHelperParametersInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Keep3rHelperParameters {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as Keep3rHelperParameters;
  }
}
