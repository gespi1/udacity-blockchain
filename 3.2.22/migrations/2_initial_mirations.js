var DustyToken = artifacts.require("DustyToken");

module.exports = function(deployer) {
  deployer.deploy(DustyToken, "DustyToken", "DUSTY", 2, 1000);
};
