var Voting = artifacts.require('Voting')

module.exports = function (deployer) {
  deployer.deploy(Voting, 10000, web3.toWei('0.01', 'ether'),['Alice', 'Bob', 'Cary'])
}
