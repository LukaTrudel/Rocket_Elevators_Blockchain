var NFT = artifacts.require('NFT');

module.exports = function(deployer){
  deployer.deploy(NFT,1,1,1,1);
};