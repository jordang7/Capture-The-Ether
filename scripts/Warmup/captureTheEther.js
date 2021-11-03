const GAME_ADDRESS = "0x71c46Ed333C35e4E6c62D32dc7C8F00D125b4fee";

async function main() {
  const game = await hre.ethers.getContractAt("CaptureTheEther", GAME_ADDRESS);
  const tx = await game.setNickname(
    "0x4a6f7264616e0000000000000000000000000000000000000000000000000000"
  ); // Jordan Greenberg
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
