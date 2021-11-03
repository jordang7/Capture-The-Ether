const { parseEther } = require("ethers/lib/utils");

const GAME_ADDRESS = "0x9F3BAf55Afed16AF98b37Bf6d2E805B5e7D3E742";

async function main() {
  const game = await hre.ethers.getContractAt(
    "GuessTheNumberChallenge",
    GAME_ADDRESS
  );

  const tx = await game.guess(42, {
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
