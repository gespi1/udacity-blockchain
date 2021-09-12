/*##########################
CONFIGURATION

##########################*/

// -- Step 1: Set up the appropriate configuration var Web3 = require("web3") var EthereumTransaction = require("ethereumjs-tx") var web3 = new Web3('HTTP://127.0.0.1:7545')
const Web3 = require('web3')
const EthereumTransaction = require("ethereumjs-tx").Transaction
const hex2ascii = require('hex2ascii');
var web3 = new Web3('http://127.0.0.1:7545')


// -- Step 2: Set the sending and receiving addresses for the transaction. var sendingAddress = 'ADDRESS FROM GANACHE GOES HERE' var receivingAddress = 'ANOTHER ADDRESS FROM GANACHE GOES HERE'
var sendingAddress = '0xD28b395482620D0404920243c61AfeE8EEaF0665'
var receivingAddress = '0xAB9D39e08A4d2DE776aCe8177bd1584240d3CA22'

// -- Step 3: Check the balances of each address web3.eth.getBalance(sendingAddress).then(console.log) web3.eth.getBalance(receivingAddress).then(console.log)
web3.eth.getBalance(sendingAddress).then((bal) => console.log("sendingAddress " + bal))
web3.eth.getBalance(receivingAddress).then((bal) => console.log("receivingAddress " + bal))


/*##########################
CREATE A TRANSACTION

##########################*/

// -- Step 4: Set up the transaction using the transaction variables as shown var rawTransaction = { nonce: 0, to: receivingAddress, gasPrice: 20000000, gasLimit: 30000, value: 1, data: "" }
function ascii_2_0xhex(num){
  return "0x" + num.toString(16)
}

var rawTransaction = {
  nonce: ascii_2_0xhex(5),
  to: receivingAddress,
  gasPrice: ascii_2_0xhex(20000000),
  gasLimit: ascii_2_0xhex(30000),
  value: ascii_2_0xhex(1000000000000000000),
  data: null
}

// -- Step 5: View the raw transaction rawTransaction
console.log("transaction to send \n" + JSON.stringify(rawTransaction).toString())

// -- Step 6: Check the new account balances (they should be the same) web3.eth.getBalance(sendingAddress).then(console.log) web3.eth.getBalance(receivingAddress).then(console.log)

// Note: They haven't changed because they need to be signed...

/*##########################
Sign the Transaction

##########################*/

// -- Step 7: Sign the transaction with the Hex value of the private key of the sender var privateKeySender = 'PRIVATE KEY OF SENDER GOES HERE' var privateKeySenderHex = new Buffer(privateKeySender, 'hex') var transaction = new EthereumTransaction(rawTransaction) transaction.sign(privateKeySenderHex)
var privateKeySender = 'd14a7cdbda94e6a0147b2e37befee4bd1f2bb21dd798fec49ddc249cb8cd6364'
var privateKeySenderHex = Buffer.from(privateKeySender, 'hex')
var transaction = new EthereumTransaction(rawTransaction)
transaction.sign(privateKeySenderHex)


/*#########################################
Send the transaction to the network

#########################################*/

// -- Step 8: Send the serialized signed transaction to the Ethereum network. var serializedTransaction = transaction.serialize(); web3.eth.sendSignedTransaction(serializedTransaction);
var serializedTransaction = transaction.serialize()
web3.eth.sendSignedTransaction(serializedTransaction);