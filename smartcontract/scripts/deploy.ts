import { ethers } from "hardhat";

async function main() {
  const SessionsFactory = await ethers.getContractFactory("Sessions");
  const Sessions = await SessionsFactory.deploy();
  await Sessions.waitForDeployment();
  console.log(`contract deployed on Address: ${await Sessions.getAddress()}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
