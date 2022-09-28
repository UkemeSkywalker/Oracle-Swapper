
const hre = require("hardhat");

async function main() {



  const priceFeed = await hre.ethers.getContractFactory("PriceConsumerV3");
  const PrideFeed = await priceFeed.deploy();

  await PrideFeed.deployed();

  console.log("contract deployed at", PrideFeed.address);
  const p = await PrideFeed.getLatestPrice();
  console.log(p.toString())
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
