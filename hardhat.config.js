require("@nomicfoundation/hardhat-toolbox")
require("hardhat-deploy")
require("dotenv").config()
require("hardhat-gas-reporter")
const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL
const PRIVATE_KEY = process.env.PRIVATE_KEY
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    solidity: {
        compilers: [
            { version: "0.8.7" },
            { version: "0.6.6" },
            { version: "0.8.8" },
        ],
    },

    defaultNetwork: "hardhat",

    networks: {
        hardhat: {
            chainId: 31337,
        },
        goerli: {
            url: GOERLI_RPC_URL,
            accounts: [PRIVATE_KEY],
            chainId: 5,
            blockConfirmations: 6,
        },
    },

    etherscan: {
        apiKey: ETHERSCAN_API_KEY,
    },

    namedAccounts: {
        deployer: {
            default: 0,
        },
    },
    gasReporter: {
        enabled: false,
    },
}
