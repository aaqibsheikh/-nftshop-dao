const { ethers } = require("hardhat")
const { NFTSHOP_CONTRACT_ADDRESS } = require("../constants");

async function main() {
  const FakeNFTMarketplace = await ethers.getContractFactory("FakeNFTMarketplace")
  const fakeNFTMarketplace = await FakeNFTMarketplace.deploy()
  await fakeNFTMarketplace.deployed()

  console.log("FakeNFTMarketplace deployed to: ", fakeNFTMarketplace.address);

  const NftShopDao = await ethers.getContractFactory("NFTShopDAO");
  const nftShopDao = await NftShopDao.deploy(fakeNFTMarketplace.address, NFTSHOP_CONTRACT_ADDRESS, {value: ethers.utils.parseEther("0.0001")})
  await nftShopDao.deployed()
  console.log("NFTShopDAO deployed to: ", nftShopDao.address);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
