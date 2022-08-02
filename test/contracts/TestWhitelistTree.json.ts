export default {
"abi":[
{"inputs":[{"internalType":"bytes32","name":"merkleRoot","type":"bytes32"}],"name":"setMerkleRoot","outputs":[],"stateMutability":"nonpayable","type":"function"},
{"inputs":[{"internalType":"uint256","name":"allocation","type":"uint256"},{"internalType":"bytes32[]","name":"proof","type":"bytes32[]"}],"name":"verifyMerkleProof","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},
{"inputs":[{"internalType":"uint256","name":"amount1","type":"uint256"},{"internalType":"uint256","name":"amount2","type":"uint256"},{"internalType":"string","name":"ipfsCid","type":"string"},{"internalType":"bytes32[]","name":"proof","type":"bytes32[]"}],"name":"verifyMerkleProof2","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},
{"inputs":[],"name":"whitelistTreeRoot","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"}
],
"bytecode":"608060405234801561001057600080fd5b506103f9806100206000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80630b6b25581461005157806338a0a39e146101335780637cb647591461014d578063d4adf1691461016c575b600080fd5b61011f6004803603608081101561006757600080fd5b81359160208101359181019060608101604082013564010000000081111561008e57600080fd5b8201836020820111156100a057600080fd5b803590602001918460018302840111640100000000831117156100c257600080fd5b9193909290916020810190356401000000008111156100e057600080fd5b8201836020820111156100f257600080fd5b8035906020019184602083028401116401000000008311171561011457600080fd5b5090925090506101e3565b604080519115158252519081900360200190f35b61013b6102b4565b60408051918252519081900360200190f35b61016a6004803603602081101561016357600080fd5b50356102ba565b005b61011f6004803603604081101561018257600080fd5b813591908101906040810160208201356401000000008111156101a457600080fd5b8201836020820111156101b657600080fd5b803590602001918460208302840111640100000000831117156101d857600080fd5b5090925090506102bf565b60006102a9838380806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f82011690508083019250505050505050600054338a8a8a8a604051602001808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1660601b8152601401858152602001848152602001838380828437808301925050509550505050505060405160208183030381529060405280519060200120610338565b979650505050505050565b60005481565b600055565b6000610330838380806020026020016040519081016040528093929190818152602001838360200280828437600092018290525054604080513360601b60208083019190915260348083018e9052835180840390910181526054909201909252805191012090935091506103389050565b949350505050565b600082610345858461034e565b14949350505050565b600081815b8451811015610383576103798286838151811061036c57fe5b602002602001015161038b565b9150600101610353565b509392505050565b60008183106103a35761039e82846103b4565b6103ad565b6103ad83836103b4565b9392505050565b6000918252602052604090209056fea2646970667358221220390418b2ce6f5e0c43390e4b33636f61f514eac97d8dcc7d8bfa44e0a842061064736f6c634300060b0033"
}