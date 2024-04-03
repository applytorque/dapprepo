/* eslint-disable no-undef */
// scripts/deploy.js
async function main() {
    const [deployer] = await ethers.getSigners();

    console.log("Deploying contracts with the account:", deployer.address);

    const MyContract = await ethers.getContractFactory("TokenSale");
    const myContract = await MyContract.deploy();

    console.log("TokenSale address:", myContract.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
