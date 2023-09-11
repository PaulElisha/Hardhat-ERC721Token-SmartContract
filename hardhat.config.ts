import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require("dotenv").config();
// require("@nomicfoundation/hardhat-etherscan");

const { SEPOLIARPC, ETHERSCANAPIKEY, PRIVATEKEY, MAINNET, GOERLIBASE } =
  process.env;

const config: HardhatUserConfig = {
  solidity: "0.8.19",
  networks: {
    sepolia: {
      url: SEPOLIARPC,
      //@ts-ignore
      accounts: [PRIVATEKEY],
    },
    mainnet: {
      url: MAINNET,
      //@ts-ignore
      accounts: [PRIVATEKEY],
    },
    base: {
      url: GOERLIBASE,
      //@ts-ignore
      accounts: [PRIVATEKEY],
    },
    hardhat: {
      forking: {
        //@ts-ignore
        url: MAINNET,
      },
    },
  },
  etherscan: {
    //@ts-ignore
    apiKey: ETHERSCANAPIKEY,
  },
};

export default config;
