require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-waffle");
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config(); 

const { ALCHEMY_API_KEY, PRIVATE_KEY } = process.env;

module.exports = {
  solidity: "0.8.20", 
  networks: {
    mumbai: {
      url: `https://polygon-mumbai.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: [`0x${PRIVATE_KEY}`]
    },

    polygon: {
      url: `https://polygon-mumbai.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: [`0x${PRIVATE_KEY}`]
    }
  },
  etherscan: {
    apiKey: {
      polygonMumbai: "FKYYSR5TRFSA3X17AGMT6J94NFHTVGFX6T",
      polygon: "FKYYSR5TRFSA3X17AGMT6J94NFHTVGFX6T"
    }
  }
};
