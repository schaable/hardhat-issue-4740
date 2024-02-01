import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox-viem";

const config: HardhatUserConfig = {
  solidity: "0.8.19",
  networks: {
    hardhat: {
      forking: {
        url: "https://arb-mainnet.g.alchemy.com/v2/TzoUH_EXBPNmzjXcaPQwyPlibhloPKj7",
      },
      mining: {
        auto: false,
        interval: 2000, // 2 seconds in milliseconds
      },
    },
  },
};

export default config;
