import { ethers } from 'hardhat'

async function main () {
  const entryPoint = await ethers.getContractAt('EntryPoint', '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512')
  const options = { value: ethers.utils.parseEther('300') }
  const tx = await entryPoint.depositTo('0xDfFa5a8C826C2199a720917a557cEd2ec56A62f1', options)
  await tx.wait()
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
