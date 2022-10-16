const {ethers} = require("hardhat");

async function main() {
    let [deployer] = await ethers.getSigners();
    const network = await ethers.provider.getNetwork()
    console.log(`chainId : ${network.chainId}) `)
    console.log('Deploying contracts with the account :', deployer.address);

    const Token = await ethers.getContractFactory("NFTPresale");
    const token = await Token.deploy("BIRDGANG_NFT_ART_ENGINE", "BNAE", "ipfs://QmNZypJXcgLr9tJVKrtBgLpr6wpMaDLk6pRXsW6o4cYwCQ/", "ipfs://QmNZypJXcgLr9tJVKrtBgLpr6wpMaDLk6pRXsW6o4cYwCQ/");
    // const token = await Token.deploy();
    console.log('Token address :', token.address);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
