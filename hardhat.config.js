require('dotenv').config();

require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-web3");
require("@nomiclabs/hardhat-etherscan");

const {
  INFURA_KEY,
  DEPLOYER_PRIVATE_KEY,
  ETHERSCAN_KEY_RINKEBY,
  ETHERSCAN_KEY_GOERLI,
  POLYGON_KEY_MUMBAI
} = process.env

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    hardhat: {
      chainId: 31337,
      allowUnlimitedContractSize: true,
    },
    mainnet: {
      url: `https://mainnet.infura.io/v3/${INFURA_KEY}`,
      accounts: [`${DEPLOYER_PRIVATE_KEY}`],
    },
    kovan: {
      url: `https://kovan.infura.io/v3/${INFURA_KEY}`,
      accounts: [`${DEPLOYER_PRIVATE_KEY}`]
    },
    goerli: {
      url: `https://goerli.infura.io/v3/${INFURA_KEY}`,
      accounts: [`${DEPLOYER_PRIVATE_KEY}`]
    },
    polygon: {
      url: `https://polygon-mainnet.infura.io/v3/${INFURA_KEY}`,
      accounts: [`${DEPLOYER_PRIVATE_KEY}`]
    },
    mumbai: {
      chainId: 80001,
      url: `https://polygon-mumbai.infura.io/v3/${INFURA_KEY}`,
      accounts: [`${DEPLOYER_PRIVATE_KEY}`]
    }
  },
  etherscan: {
    apiKey: {
      // ethereum
      rinkeby: ETHERSCAN_KEY_RINKEBY,
      goerli: ETHERSCAN_KEY_GOERLI,

      // polygon
      polygon: POLYGON_KEY_MUMBAI,
      // mumbai: POLYGON_KEY_MUMBAI,
      polygonMumbai: POLYGON_KEY_MUMBAI
    }
  }
};
