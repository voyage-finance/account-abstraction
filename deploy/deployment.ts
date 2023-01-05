import { HardhatRuntimeEnvironment } from 'hardhat/types'
import { DeployFunction } from 'hardhat-deploy/types'
import { ethers } from 'hardhat'
import { TestCounter__factory } from '../typechain'
import { Roles, SafeProxy4337, TestContract } from '../contract-types'
import { ModuleManager } from '../contract-types/contracts/gnosis/base'

const main: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts } = hre
  const { deploy, execute } = deployments
  const { owner } = await getNamedAccounts()
  const user = '0xeeCC6df760B5Da6e40559a3B7B143614eDaa6aA2'
  console.log('deploy GnosisSafe Factory')
  const safeSingleton = await deploy('GnosisSafe', {
    contract: 'contracts/gnosis/GnosisSafe.sol:GnosisSafe',
    from: owner,
    log: true
  })
  console.log('deploy EntryPoint')
  const entryPoint = await deploy('EntryPoint', {
    from: owner,
    log: true
  })
  console.log('EntryPoint address: ', entryPoint.address)

  console.log('deploy EIP4337 Manager')
  const manager = await deploy('EIP4337Manager', {
    from: owner,
    args: [entryPoint.address],
    log: true
  })
  console.log('EIP4337 Manager address: ', manager.address)

  console.log('deploy TestCounter')
  const counter = await deploy('TestCounter', {
    from: owner,
    log: true
  })
  console.log('Test counter address: ', counter.address)
  console.log('deploy SafeProxy')
  const safeProxy4337 = await deploy('SafeProxy4337', {
    from: owner,
    args: [safeSingleton.address, manager.address, owner],
    log: true
  })
  console.log('Safe Proxy address: ', safeProxy4337.address)

  console.log('deploy Permission')
  const permissions = await deploy('Permissions', {
    from: owner,
    log: true
  })
  console.log('Permissions address: ', permissions.address)

  console.log('deploy Role')
  const roles = await deploy('Roles', {
    from: owner,
    args: [owner, safeProxy4337.address, safeProxy4337.address],
    libraries: {
      Permissions: permissions.address
    },
    log: true
  })
  console.log('Roles address: ', roles.address)

  console.log('enable module from safeProxy')
  const safeProxy = await ethers.getContractAt('SafeProxy4337', safeProxy4337.address)
  await safeProxy.setupRoleModifier(manager.address, roles.address)

  console.log('deploy TestContract')
  const testContract = await deploy('TestContract', {
    from: owner,
    log: true
  })
  console.log('TestContract address: ', testContract.address)

  console.log('enable module')
  const modifier: Roles = await ethers.getContractAt('Roles', roles.address)
  await modifier.enableModule(testContract.address)

  console.log('deploy SimpleAccount')
  const simpleAccount = await deploy('SimpleAccount', {
    contract: 'contracts/samples/SimpleAccount.sol:SimpleAccount',
    from: owner,
    args: [entryPoint.address, user],
    log: true
  })
  console.log('simpleAccount address: ', simpleAccount.address)

  console.log('assign role')
  await modifier.assignRoles(user, [0], [true])
  await modifier.assignRoles(owner, [0], [true])

  console.log('allow target')
  await modifier.allowTarget(0, testContract.address, 0)

  console.log('execute transaction from modules')
  const businessContract: TestContract = await ethers.getContractAt('TestContract', testContract.address)
  await modifier.execTransactionFromModule(testContract.address, 0, businessContract.interface.encodeFunctionData('doNothing()'), 0)
}

export default main
