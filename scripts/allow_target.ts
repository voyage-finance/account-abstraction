import { ethers } from 'hardhat'

async function main () {
  const roleId = '0'
  const OPTIONS_NONE = 0
  const businessContractAddr = '0xa513E6E4b8f2a923D98304ec87F64353C4D5C853'
  const roles = await ethers.getContractAt('Roles', '0x0165878A594ca255338adfa4d48449f69242Eb8F')
  const tx = await roles.allowTarget(roleId, businessContractAddr, OPTIONS_NONE)
  await tx.wait()
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
