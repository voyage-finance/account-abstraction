import { ethers } from 'hardhat'

async function main () {
  const roles = await ethers.getContractAt('Roles', '0x0165878a594ca255338adfa4d48449f69242eb8f')
  const tx = await roles.enableModule('0xeeCC6df760B5Da6e40559a3B7B143614eDaa6aA2')
  await tx.wait()
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
