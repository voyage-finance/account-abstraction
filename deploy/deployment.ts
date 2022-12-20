import { HardhatRuntimeEnvironment } from 'hardhat/types'
import { DeployFunction } from 'hardhat-deploy/types'
import { ethers } from 'hardhat'
import { GnosisSafe__factory, EntryPoint__factory, TestCounter__factory, EIP4337Manager__factory, SafeProxy4337__factory } from '../typechain'

const main: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts } = hre
  const { deploy } = deployments
  const { owner } = await getNamedAccounts()
  console.log('deploy GnosisSafe Factory')
  const provider = ethers.provider
  const ethersSigner = provider.getSigner()
  const safeSingleton = await new GnosisSafe__factory(ethersSigner).deploy()
  console.log('safe singleton address: ', safeSingleton.address)

  console.log('deploy EntryPoint')
  const entryPoint = await deploy('EntryPoint', {
    from: owner,
    log: true
  })
  console.log('EntryPoint address: ', entryPoint.address)

  console.log('deploy EIP4337 Manager')
  const manager = await new EIP4337Manager__factory(ethersSigner).deploy(entryPoint.address)
  console.log('EIP4337 Manager address: ', manager.address)

  console.log('deploy TestCounter')
  const counter = await new TestCounter__factory(ethersSigner).deploy()
  console.log('Test counter address: ', counter.address)

  console.log('deploy SafeProxy')
  const safeProxy = await new SafeProxy4337__factory(ethersSigner).deploy(safeSingleton.address, manager.address, owner)
  console.log('Safe Proxy address: ', safeProxy.address)
}

export default main
