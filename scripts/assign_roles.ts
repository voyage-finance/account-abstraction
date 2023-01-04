import { ethers } from 'hardhat'

async function main () {
  const roles = await ethers.getContractAt('Roles', '0x0165878A594ca255338adfa4d48449f69242Eb8F')
  let tx = await roles.assignRoles('0xeeCC6df760B5Da6e40559a3B7B143614eDaa6aA2', [0], [true])
  await tx.wait()
  tx = await roles.assignRoles('0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266', [0], [true])
  await tx.wait()
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
