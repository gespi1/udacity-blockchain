var Web3 = require('web3')

var url = 'http://127.0.0.1:7545'
var web3 = new Web3(url)

var abi = [
  {
    "constant": false,
    "inputs": [
      {
        "name": "x",
        "type": "string"
      }
    ],
    "name": "setMessage",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getMessage",
    "outputs": [
      {
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }
]

var contractAddress = "0x50CF66c1C37333129C9B3E28301761b1038cF174"

var contract = new web3.eth.Contract(abi, contractAddress)

// list contract methods available
console.log(contract.methods)
contract.methods.setMessage("this is a test")
contract.methods.getMessage().call((err, result) => {console.log(result)})

