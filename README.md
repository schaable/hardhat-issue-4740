# Issue 4740: eth_getBlockByHash stops working after a while

https://github.com/NomicFoundation/hardhat/issues/4740

Steps to test the issue:

1. Clone the repository.
2. Install the dependencies by running `npm install`.
3. Go to `node_modules/hardhat/internal/hardhat-network/provider/node.js` and replace the `_newDeadline` so that the deadline is more than 5 minutes. You can do that by replacing `dt.setMinutes(dt.getMinutes() + 5);` with `dt.setMinutes(dt.getMinutes() + 1440);`.
4. Start a local hardhat node by running `hh node`.
5. Run `hh run scripts/subscribe.ts` to run the script that subscribes to new blocks.
6. Let it run for one hour. The script will print the block number every 2 seconds, and should not crash. On the hardhat node terminal, you should see the call to eth_getBlockByHash for each block.
