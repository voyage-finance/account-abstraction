import { ethers, getNamedAccounts, deployments } from 'hardhat'
import { EntryPoint } from '../typechain'

async function main () {
  const entryPointFactory = await ethers.getContractFactory('EntryPoint')
  const entryPoint = await entryPointFactory.attach('0xfcadeccb4023615811ea10165c4edbbddaf62265')
  const bal = await entryPoint.balanceOf('0x4Ce6A396ABA6Ee80Ba6462dc5a12D3a3e8E6E9fe')
  console.log('bal: ', bal.toString())
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
