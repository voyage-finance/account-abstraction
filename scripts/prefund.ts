import { ethers } from 'hardhat'

async function main () {
  const entryPoint = await ethers.getContractAt('EntryPoint', '0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0')
  const options = { value: ethers.utils.parseEther('300') }
  const tx = await entryPoint.depositTo('0xA4aee88c32C4aA04519e6520BA0712030c57933e', options)
  await tx.wait()
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
