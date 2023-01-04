import { ethers } from 'hardhat'
import { Roles, TestContract } from '../contract-types'

async function main () {
  const rolesAddr = '0x0165878A594ca255338adfa4d48449f69242Eb8F'
  const businessContractAddr = '0xa513E6E4b8f2a923D98304ec87F64353C4D5C853'
  const businessContract: TestContract = await ethers.getContractAt('TestContract', businessContractAddr)
  const roles: Roles = await ethers.getContractAt('Roles', rolesAddr)
  const tx = await roles.execTransactionFromModule(businessContractAddr, 0, businessContract.interface.encodeFunctionData('doNothing()'), 0)
  await tx.wait()
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
