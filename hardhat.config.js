require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-waffle");
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config(); // Make sure you have this line to load the environment variables

const { ALCHEMY_API_KEY, PRIVATE_KEY } = process.env;

module.exports = {
  solidity: "0.8.20", // Specify your Solidity version
  networks: {
    mumbai: {
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
