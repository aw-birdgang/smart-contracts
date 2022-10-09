const { expect } = require('chai')

describe("NFTPresaleToken", function() {
    it("should return correct name and symbol", async function () {
        const NFTPresaleToken = await hre.ethers.getContractFactory("NFTPresale");
        const myContractDeployed = await NFTPresaleToken.deploy("birdgangNFT", "BGNT", "https://birdgang.kr/", "https://reveal.birdgang.kr/");
        expect(await myContractDeployed.name()).to.equal("NFTPresale");
        expect(await myContractDeployed.symbol()).to.equal("BGNT");
    });
});
