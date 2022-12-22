import { HardhatRuntimeEnvironment } from 'hardhat/types'
import { DeployFunction } from 'hardhat-deploy/types'
import { ethers } from 'hardhat'
import { TestCounter__factory } from '../typechain'

const main: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts } = hre
  const { deploy } = deployments
  const { owner } = await getNamedAccounts()
  console.log('deploy GnosisSafe Factory')
  const provider = ethers.provider
  const ethersSigner = provider.getSigner()
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

  console.log('deploy SimpleAccount')
  const simpleAccount = await deploy('SimpleAccount', {
    contract: 'contracts/samples/SimpleAccount.sol:SimpleAccount',
    from: owner,
    args: [entryPoint.address, '0xeecc6df760b5da6e40559a3b7b143614edaa6aa2'],
    log: true
  })
  console.log('simpleAccount address: ', simpleAccount.address)
}

export default main
