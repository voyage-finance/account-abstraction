import { ethers } from 'hardhat'

async function main () {
  const roles = await ethers.getContractAt('Roles', '0x9A676e781A523b5d0C0e43731313A708CB607508')
  const tx = await roles.assignRoles('0xeeCC6df760B5Da6e40559a3B7B143614eDaa6aA2', [1], [true])
  await tx.wait()
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
