/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  Keep3rHelperForTest,
  Keep3rHelperForTestInterface,
} from "../Keep3rHelperForTest";

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
    name: "LiquidityPairInvalid",
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
    name: "basefee",
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
    inputs: [
      {
        internalType: "address",
        name: "_keeper",
        type: "address",
      },
    ],
    name: "bonds",
    outputs: [
      {
        internalType: "uint256",
        name: "_amountBonded",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_bonds",
        type: "uint256",
      },
    ],
    name: "getPaymentParams",
    outputs: [
      {
        internalType: "uint256",
        name: "_boost",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_oneEthQuote",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_extra",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_pool",
        type: "address",
      },
    ],
    name: "getPoolTokens",
    outputs: [
      {
        internalType: "address",
        name: "_token0",
        type: "address",
      },
      {
        internalType: "address",
        name: "_token1",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_gasUsed",
        type: "uint256",
      },
    ],
    name: "getRewardAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_keeper",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_gasUsed",
        type: "uint256",
      },
    ],
    name: "getRewardAmountFor",
    outputs: [
      {
        internalType: "uint256",
        name: "_kp3r",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_bonds",
        type: "uint256",
      },
    ],
    name: "getRewardBoostFor",
    outputs: [
      {
        internalType: "uint256",
        name: "_rewardBoost",
        type: "uint256",
      },
    ],
    stateMutability: "view",
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
    inputs: [
      {
        internalType: "address",
        name: "_pool",
        type: "address",
      },
    ],
    name: "isKP3RToken0",
    outputs: [
      {
        internalType: "bool",
        name: "_isKP3RToken0",
        type: "bool",
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
        internalType: "uint256",
        name: "_eth",
        type: "uint256",
      },
    ],
    name: "quote",
    outputs: [
      {
        internalType: "uint256",
        name: "_amountOut",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_baseFee",
        type: "uint256",
      },
    ],
    name: "setBaseFee",
    outputs: [],
    stateMutability: "nonpayable",
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
  "0x6080604052612af8600255612ee0600355680ad78ebc5ac620000060045561c3506005553480156200003057600080fd5b50604051620010863803806200108683398101604081905262000053916200028a565b81818181806001600160a01b0381166200007f5760405162b293ed60e81b815260040160405180910390fd5b600080546001600160a01b03199081166001600160a01b039384161790915560068054909116918416919091179055620000cd7311b7a6bc0259ed6cf9db8f499988f9ecc7167bf5620000d9565b505050505050620002e7565b6000731ceb5cb57c4d4e2b2433641b95dd330a33185a446001600160a01b0316826001600160a01b0316630dfe16816040518163ffffffff1660e01b8152600401602060405180830381865afa15801562000138573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200015e9190620002c2565b6001600160a01b03161490506000731ceb5cb57c4d4e2b2433641b95dd330a33185a446001600160a01b0316836001600160a01b031663d21220a76040518163ffffffff1660e01b8152600401602060405180830381865afa158015620001c9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620001ef9190620002c2565b6001600160a01b03161490508115801562000208575080155b156200022757604051637c395fed60e01b815260040160405180910390fd5b50604080518082019091526001600160a01b03929092168083529015156020909201829052600780546001600160a81b031916909117600160a01b909202919091179055565b80516001600160a01b03811681146200028557600080fd5b919050565b600080604083850312156200029e57600080fd5b620002a9836200026d565b9150620002b9602084016200026d565b90509250929050565b600060208284031215620002d557600080fd5b620002e0826200026d565b9392505050565b610d8f80620002f76000396000f3fe608060405234801561001057600080fd5b50600436106101c45760003560e01c8063516c3323116100f9578063ab5dce0011610097578063ca4f280311610071578063ca4f2803146103d5578063ed1bd76c14610408578063f39c38a01461041c578063fe10d7741461042f57600080fd5b8063ab5dce001461039c578063b2e0df96146103af578063c84993af146103c257600080fd5b8063696a437b116100d3578063696a437b1461031f5780637b40c913146103425780638561579c14610380578063ab033ea91461038957600080fd5b8063516c3323146102f05780635aa6e675146103035780635cf249691461031657600080fd5b80632742b9e7116101665780633cc7ab30116101405780633cc7ab30146102935780633facf242146102a6578063435b21c1146102af57806346860698146102dd57600080fd5b80632742b9e71461026e578063289adb441461027757806337090c2f1461028a57600080fd5b8063160e1e31116101a2578063160e1e31146102295780632248e82d1461023c578063238efcbc1461025d57806325f09e611461026557600080fd5b806305e0b9a0146101c95780630c52583514610201578063117cfc1b14610216575b600080fd5b6101e4731ceb5cb57c4d4e2b2433641b95dd330a33185a4481565b6040516001600160a01b0390911681526020015b60405180910390f35b61021461020f366004610c23565b610442565b005b6006546101e4906001600160a01b031681565b610214610237366004610c54565b6104a9565b61024f61024a366004610c71565b61052a565b6040519081526020016101f8565b61021461055d565b61024f61271081565b61024f60045481565b610214610285366004610c23565b6105e6565b61024f60035481565b6102146102a1366004610c54565b610646565b61024f60055481565b6102c26102bd366004610c23565b6106bf565b604080519384526020840192909252908201526060016101f8565b6102146102eb366004610c23565b600855565b61024f6102fe366004610c23565b6106d9565b6000546101e4906001600160a01b031681565b61024f60085481565b61033261032d366004610c54565b610747565b60405190151581526020016101f8565b600754610361906001600160a01b03811690600160a01b900460ff1682565b604080516001600160a01b0390931683529015156020830152016101f8565b61024f60025481565b610214610397366004610c54565b6107cd565b6102146103aa366004610c23565b610846565b6102146103bd366004610c23565b6108a6565b61024f6103d0366004610c23565b610906565b6103e86103e3366004610c54565b610918565b604080516001600160a01b039384168152929091166020830152016101f8565b61024f610416366004610c23565b50600090565b6001546101e4906001600160a01b031681565b61024f61043d366004610c54565b6109e8565b6000546001600160a01b0316331461046d576040516354348f0360e01b815260040160405180910390fd5b60028190556040518181527f0919fdaaac0f59c6bc7eeef4f975d6163475220f1e4820d0bce99c84c51cac1d906020015b60405180910390a150565b6000546001600160a01b031633146104d4576040516354348f0360e01b815260040160405180910390fd5b6104dd81610a71565b600754604080516001600160a01b0383168152600160a01b90920460ff16151560208301527f554c636366d5fc882a9ab4b7b9d5181781d1a7076abe50ed410365620dcf4108910161049e565b6000806105396102fe856109e8565b905061055561271061054b8386610cb3565b6104169190610cd2565b949350505050565b6001546001600160a01b0316331461058857604051637ef5703160e11b815260040160405180910390fd5b60018054600080546001600160a01b0383166001600160a01b031991821681179092559091169091556040519081527fc73be659241aade67e9a059bcf21494955018b213dbd1179054ccf928b13f3b69060200160405180910390a1565b6000546001600160a01b03163314610611576040516354348f0360e01b815260040160405180910390fd5b60058190556040518181527fed847bdbab1a30becee18585f23c759bd06156561390d2e7fbffd18e74b56c9b9060200161049e565b6000546001600160a01b03163314610671576040516354348f0360e01b815260040160405180910390fd5b600680546001600160a01b0319166001600160a01b0383169081179091556040519081527fcf744e4fc39d49b6d8103035078629b8a3be95adc007b0d663e96bdff777b10a9060200161049e565b600080806106cc846106d9565b6005549095929450925050565b60006106e782600454610bfd565b9150600061072b600254600454856002546003546107059190610cf4565b61070f9190610cb3565b6107199190610cd2565b6002546107269190610d0b565b610c13565b905061073660085490565b6107409082610cb3565b9392505050565b600080600061075584610918565b9092509050731ceb5cb57c4d4e2b2433641b95dd330a33185a43196001600160a01b03831601610789575060019392505050565b6001600160a01b038116731ceb5cb57c4d4e2b2433641b95dd330a33185a44146107c657604051637d7c8f2760e11b815260040160405180910390fd5b5050919050565b6000546001600160a01b031633146107f8576040516354348f0360e01b815260040160405180910390fd5b600180546001600160a01b0319166001600160a01b0383169081179091556040519081527fe987aaedf9d279143bdf1eee16cf1d0feb47742867d81083df8d6cd0a5ac857f9060200161049e565b6000546001600160a01b03163314610871576040516354348f0360e01b815260040160405180910390fd5b60048190556040518181527feac367d684b6ac6c6ae7e3e852c06f17e6354e0f1e7122832c3e6d17e0a2b71e9060200161049e565b6000546001600160a01b031633146108d1576040516354348f0360e01b815260040160405180910390fd5b60038190556040518181527fa1292b4e7a0d916ccfd2bc83858b05f328e344d1f0f507d97ac66723ac7c2aaa9060200161049e565b6000610912328361052a565b92915050565b600080826001600160a01b0316630dfe16816040518163ffffffff1660e01b8152600401602060405180830381865afa158015610959573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061097d9190610d23565b836001600160a01b031663d21220a76040518163ffffffff1660e01b8152600401602060405180830381865afa1580156109bb573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109df9190610d23565b91509150915091565b60065460405163a39744b560e01b81526001600160a01b038381166004830152731ceb5cb57c4d4e2b2433641b95dd330a33185a446024830152600092169063a39744b590604401602060405180830381865afa158015610a4d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109129190610d40565b6000731ceb5cb57c4d4e2b2433641b95dd330a33185a446001600160a01b0316826001600160a01b0316630dfe16816040518163ffffffff1660e01b8152600401602060405180830381865afa158015610acf573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610af39190610d23565b6001600160a01b03161490506000731ceb5cb57c4d4e2b2433641b95dd330a33185a446001600160a01b0316836001600160a01b031663d21220a76040518163ffffffff1660e01b8152600401602060405180830381865afa158015610b5d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b819190610d23565b6001600160a01b031614905081158015610b99575080155b15610bb757604051637c395fed60e01b815260040160405180910390fd5b50604080518082019091526001600160a01b03929092168083529015156020909201829052600780546001600160a81b031916909117600160a01b909202919091179055565b6000818310610c0c5781610740565b5090919050565b600081831015610c0c5781610740565b600060208284031215610c3557600080fd5b5035919050565b6001600160a01b0381168114610c5157600080fd5b50565b600060208284031215610c6657600080fd5b813561074081610c3c565b60008060408385031215610c8457600080fd5b8235610c8f81610c3c565b946020939093013593505050565b634e487b7160e01b600052601160045260246000fd5b6000816000190483118215151615610ccd57610ccd610c9d565b500290565b600082610cef57634e487b7160e01b600052601260045260246000fd5b500490565b600082821015610d0657610d06610c9d565b500390565b60008219821115610d1e57610d1e610c9d565b500190565b600060208284031215610d3557600080fd5b815161074081610c3c565b600060208284031215610d5257600080fd5b505191905056fea264697066735822122033087f7482a1d696ca562ecca52483a201d4289af8e1cfe4d8ac98242a3d2e0564736f6c634300080e0033";

export class Keep3rHelperForTest__factory extends ContractFactory {
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
  ): Promise<Keep3rHelperForTest> {
    return super.deploy(
      _keep3rV2,
      _governance,
      overrides || {}
    ) as Promise<Keep3rHelperForTest>;
  }
  getDeployTransaction(
    _keep3rV2: string,
    _governance: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_keep3rV2, _governance, overrides || {});
  }
  attach(address: string): Keep3rHelperForTest {
    return super.attach(address) as Keep3rHelperForTest;
  }
  connect(signer: Signer): Keep3rHelperForTest__factory {
    return super.connect(signer) as Keep3rHelperForTest__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): Keep3rHelperForTestInterface {
    return new utils.Interface(_abi) as Keep3rHelperForTestInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Keep3rHelperForTest {
    return new Contract(address, _abi, signerOrProvider) as Keep3rHelperForTest;
  }
}
