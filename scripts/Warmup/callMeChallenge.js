const GAME_ADDRESS = "0x85ce5b6ebb2Ae0532a457c8910BddAF2f79D89CC";

async function main() {
  const game = await hre.ethers.getContractAt("callMeChallenge", GAME_ADDRESS);

  const tx = await game.callme();
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
