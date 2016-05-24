# Elcoin Server Side Examples
## Installation

`npm install`

## Information

[Elcoin](http://elcoin.space/) is a smart contract, built using [Ethereum cryptocurrency network](https://ethereum.org/) and [Solidity programming language](https://solidity.readthedocs.io/en/latest/).

This repository provides an examples of integration with the contract and ethereum for ruby and php.

The main problem with integrating ethereum smart contract with anything that is not written in JavaScript 
is that to execute any smart contract function you need web3 library, which was implemented only in javascript.

Unless your applicadtion is written in NodeJS you end up with necessity to run additional nodejs microservice to interact with Ethereum.

For the sake of simplicity this examples use "cgi-bin" approach. It will work properly only when sending no more than 1 transaction per block. We recommend setting an artificial limit to 1 tx per 70 seconds if you are not keeping track of ethereum address nonce.

If you anticipate a higher volume of outgoing transactions - please research web3 and implement nodejs microservice for sending transactions.

#### Useful Links

1. [Contract source code](https://github.com/ElcoinCurrency/ElcoinContract/tree/master/contracts "Elcoin contract source code")
2. [Contract ABI](FIXME)
2. [Transaction notifications service](https://github.com/Ambisafe/etoken-docs/wiki/Transaction-Notifications "Transaction notifications service")
