const hre = require("hardhat");


async function main (){
    const price = await hre.ethers.getContractFactory("PriceConsumerV3");
    const priceFeed = await price.deploy();
    const PriceFeed = await priceFeed.deployed();

    console.log("contract deployed at:", PriceFeed.address);

    const dodgePrice = await PriceFeed.getLatestPrice();

    console.log("DodgePrice", dodgePrice);

}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
  