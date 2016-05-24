var config = require('./config.js');
window = {
  opts: {
    'gethUrl': config.gethNode
  }
};
var EToken = require('etoken-lib');
EToken.setPrivateKey(config.privateKey[1] === 'x' ? config.privateKey.slice(2) : config.privateKey);
var sender = EToken.privateToAddress(config.privateKey[1] === 'x' ? config.privateKey : '0x' + config.privateKey);
var elcoin = EToken.web3.eth.contract(config.abi).at(config.address);
var destination = process.argv[2];
var amount = EToken.web3.toBigNumber(process.argv[3]).mul(Math.pow(10, config.baseUnit));
if (amount.decimalPlaces() !== 0) {
  throw "Provide " + amount.decimalPlaces() + " less fractional digits in the amount: " + amount.valueOf() + " . Only " + config.baseUnit + " fractional digits allowed.";
}
var handler = function(err, tx) {
  if (err) {
    throw err;
  }
  console.log(tx);
};
elcoin.transfer(destination, amount, {from: sender, gas: 900000, gasPrice: EToken.web3.toWei(20, 'gwei')}, handler);
