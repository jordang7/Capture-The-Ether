const GAME_ADDRESS = "";

async function main() {
  const game = await hre.ethers.getContractAt("IGame", GAME_ADDRESS);

  game.on('Winner', (addr) => {
    console.log(addr + ' won!');
  });
}

main();
