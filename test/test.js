const { expect } = require('chai')

describe("NFTPresaleToken", function() {
    it("should return correct name and symbol", async function () {
        const NFTPresaleToken = await hre.ethers.getContractFactory("NFTPresale");
        const myContractDeployed = await NFTPresaleToken.deploy("birdgangNFT", "BGNT", "ipfs://QmNZypJXcgLr9tJVKrtBgLpr6wpMaDLk6pRXsW6o4cYwCQ/", "ipfs://QmNZypJXcgLr9tJVKrtBgLpr6wpMaDLk6pRXsW6o4cYwCQ/");
        expect(await myContractDeployed.name()).to.equal("NFTPresale");
        expect(await myContractDeployed.symbol()).to.equal("BGNT");
    });
});
