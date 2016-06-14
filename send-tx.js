var config = require('./config.js');
window = {
  opts: {
    'gethUrl': config.gethNode
  }
};
var EToken = require('etoken-lib');
var privateKey = config.privateKey[1] === 'x' ? config.privateKey.slice(2) : config.privateKey;
EToken.setPrivateKey(privateKey);
var sender = EToken.privateToAddress(privateKey);
var elcoin = EToken.web3.eth.contract(config.abi).at(config.address);
var destination = process.argv[2][1] === 'x' ? process.argv[2] : '0x' + process.argv[2];
var amount = EToken.web3.toBigNumber(process.argv[3]).mul(Math.pow(10, config.baseUnit));
if (amount.decimalPlaces() !== 0) {
  throw "Provide " + amount.decimalPlaces() + " less fractional digits in the amount: " + process.argv[3] + " . Only " + config.baseUnit + " fractional digits allowed.";
}
var handler = function(err, tx) {
  if (err) {
    throw err;
    process.exit(1);
  }
  console.log(tx);
  process.exit();
};
elcoin.balanceOf(sender, 'pending', function(err, balance) {
  if (err) {
    throw err;
    process.exit(1);
  }
  if (balance.lt(amount)) {
    throw 'Insufficient funds.';
    process.exit(1);
  }
  elcoin.transfer(destination, amount, {from: sender, gas: 900000, gasPrice: EToken.web3.toWei(20, 'gwei')}, handler);
});
