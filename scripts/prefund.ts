import { ethers } from 'hardhat'

async function main () {
  const entryPoint = await ethers.getContractAt('EntryPoint', '0x2279b7a0a67db372996a5fab50d91eaa73d2ebe6')
  const options = { value: ethers.utils.parseEther('300') }
  const tx = await entryPoint.depositTo('0xa51c1fc2f0d1a1b8494ed1fe312d7c3a78ed91c0', options)
  await tx.wait()
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
