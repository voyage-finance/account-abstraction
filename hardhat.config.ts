import '@nomiclabs/hardhat-waffle'
import '@typechain/hardhat'
import '@nomicfoundation/hardhat-toolbox'
import { HardhatUserConfig } from 'hardhat/config'
import 'hardhat-deploy'
import '@nomiclabs/hardhat-etherscan'
import * as tdly from '@tenderly/hardhat-tenderly'
import { config as dotenvConfig } from 'dotenv'
import { resolve } from 'path'
import 'tsconfig-paths/register'
import 'solidity-coverage'
import * as fs from 'fs'

dotenvConfig({ path: resolve(__dirname, './.env') })
tdly.setup({ automaticVerifications: true })

const TENDERLY_CHAIN_ID = parseInt(process.env.TENDERLY_CHAIN_ID ?? '1')
const TENDERLY_FORK_URL = process.env.TENDERLY_FORK_URL ?? ''

const mnemonicFileName = process.env.MNEMONIC_FILE ?? `${process.env.HOME}/.secret/testnet-mnemonic.txt`
let mnemonic = 'test '.repeat(11) + 'junk'
if (fs.existsSync(mnemonicFileName)) { mnemonic = fs.readFileSync(mnemonicFileName, 'ascii') }

function getNetwork1 (url: string): { url: string, accounts: { mnemonic: string } } {
  return {
    url,
    accounts: { mnemonic }
  }
}

function getNetwork (name: string): { url: string, accounts: { mnemonic: string } } {
  return getNetwork1(`https://${name}.infura.io/v3/${process.env.INFURA_ID}`)
  // return getNetwork1(`wss://${name}.infura.io/ws/v3/${process.env.INFURA_ID}`)
}

const optimizedComilerSettings = {
  version: '0.8.17',
  settings: {
    optimizer: { enabled: true, runs: 1000000 },
    viaIR: true
  }
}

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

const config: HardhatUserConfig = {
  solidity: {
    compilers: [{
      version: '0.8.15',
      settings: {
        optimizer: { enabled: true, runs: 1000000 }
      }
    }]
  },
  networks: {
    dev: { url: 'http://localhost:8545', chainId: 31337 },
    // github action starts localgeth service, for gas calculations
    localgeth: { url: 'http://localgeth:8545' },
    proxy: getNetwork1('http://localhost:8545'),
    kovan: getNetwork('kovan'),
    goerli: {
      url: 'https://goerli.infura.io/v3/',
      accounts: {
        mnemonic: process.env.POLYGON_MNEMONIC
      }
    },
    polygon: {
      url: 'https://polygon-rpc.com/',
      accounts: {
        mnemonic: process.env.POLYGON_MNEMONIC
      }
    },
    tenderly: {
      chainId: TENDERLY_CHAIN_ID,
      url: TENDERLY_FORK_URL,
      accounts: {
        mnemonic: process.env.TENDERLY_MNEMONIC
      }
    }
  },
  mocha: {
    timeout: 10000
  },

  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY
  },

  tenderly: {
    project: 'protocol-v1',
    username: 'voyage-finance',
    privateVerification: true
  },

  typechain: {
    outDir: 'contract-types',
    target: 'ethers-v5'
  },

  namedAccounts: {
    // deployer/owner signer can now be accessed as accounts[0]
    owner: 0
  }

}

// coverage chokes on the "compilers" settings
if (process.env.COVERAGE != null) {
  // @ts-ignore
  config.solidity = config.solidity.compilers[0]
}

export default config
