import { createPublicClient, webSocket } from "viem";
import { hardhat } from "viem/chains";

async function main() {
  const publicClient = createPublicClient({
    chain: hardhat,
    transport: webSocket("ws://localhost:8545"),
  });

  const unwatch = publicClient.watchBlocks({
    onBlock: async ({ hash }) => {
      const block = await publicClient.getBlock({
        blockHash: hash,
        includeTransactions: false,
      });
      console.log(
        "timestamp: ",
        new Date(Number(block.timestamp) * 1000).toLocaleString()
      );
      console.log("block number: ", block.number);
    },
  });
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
