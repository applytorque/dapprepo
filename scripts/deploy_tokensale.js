// Import ethers from Hardhat package
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { ethers } = require("hardhat");

async function main() {
    // Get the account that is deploying the contract
    const [deployer] = await ethers.getSigners();

    console.log("Deploying contracts with the account:", deployer.address);

    // Get the ContractFactory for the TokenSale contract
    const TokenSale = await ethers.getContractFactory("TokenSale");

    // Replace the addresses below with the actual addresses of your CICC and USDT tokens
    const ciccTokenAddress = "0xebAcA9A412551c3b77C263a585dd089A597711A1";
    const usdtTokenAddress = "0xc2132D05D31c914a87C6611C10748AEb04B58e8F";

    // Deploy the contract with the specified token addresses
    const tokenSale = await TokenSale.deploy(ciccTokenAddress, usdtTokenAddress);

    // Wait for the deployment to finish
    await tokenSale.deployed();

    console.log("TokenSale deployed to:", tokenSale.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});

