const { parseEther } = require("ethers/lib/utils");
const keccak256 = require("keccak256");
const GAME_ADDRESS = "0xcF632FFfA5974D31df97d1c980a71C78A6e516c8";

async function main() {
  const game = await hre.ethers.getContractAt(
    "GuessTheSecretNumberChallenge",
    GAME_ADDRESS
  );

  for (let i = 0; i < 1000; i++) {
    if (
      keccak256(i).toString("hex") ==
      "db81b4d58595fbbbb592d3661a34cdca14d7ab379441400cbfa1b78bc447c365"
    ) {
      const tx = await game.guess(i, {
        value: parseEther("1.0"),
      });
      const receipt = await tx.wait();

      console.log(receipt);
      break;
    }
  }
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
