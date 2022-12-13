import { HardhatRuntimeEnvironment } from 'hardhat/types'
import { DeployFunction } from 'hardhat-deploy/types'
import { Create2Factory } from '../src/Create2Factory'
import { ethers } from 'hardhat'
import { GnosisSafe__factory, EntryPoint__factory, EIP4337Manager__factory, SafeProxy4337__factory } from '../typechain'
import { setTimeout } from 'timers/promises'

const main: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { getNamedAccounts } = hre
  const { owner } = await getNamedAccounts()
  console.log('deploy GnosisSafe Factory')
  const provider = ethers.provider
  const ethersSigner = provider.getSigner()
  const safeSingleton = await new GnosisSafe__factory(ethersSigner).deploy()
  console.log('safe singleton address: ', safeSingleton.address)

  console.log('deploy EntryPoint')
  await setTimeout(10000)
  const create2factory = new Create2Factory(provider)
  const epf = new EntryPoint__factory(provider.getSigner())
  const entryPoint = await create2factory.deploy(epf.bytecode, 0, process.env.COVERAGE != null ? 20e6 : 8e6)
  console.log('EntryPoint address: ', entryPoint)

  console.log('deploy EIP4337 Manager')
  await setTimeout(10000)
  const manager = await new EIP4337Manager__factory(ethersSigner).deploy(entryPoint)
  console.log('EIP4337 Manager address: ', manager.address)

  console.log('deploy SafeProxy')
  await setTimeout(10000)
  const safeProxy = await new SafeProxy4337__factory(ethersSigner).deploy(safeSingleton.address, manager.address, owner)
  console.log('Safe Proxy address: ', safeProxy.address)
}

export default main
