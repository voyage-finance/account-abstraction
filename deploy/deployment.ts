import { HardhatRuntimeEnvironment } from 'hardhat/types'
import { DeployFunction } from 'hardhat-deploy/types'
import { Create2Factory } from '../src/Create2Factory'
import { ethers } from 'hardhat'
import { GnosisSafe__factory, EntryPoint__factory, EIP4337Manager__factory, SafeProxy4337__factory } from '../typechain'

const main: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts } = hre
  const { deploy } = deployments
  const { owner } = await getNamedAccounts()
  // console.log('deploy GnosisSafe Factory')
  const provider = ethers.provider
  const ethersSigner = provider.getSigner()
  // const safeSingleton = await new GnosisSafe__factory(ethersSigner).deploy()
  // console.log('safe singleton address: ', safeSingleton.address)
  // 0xd494690947a90E84D5dafb39c8065389c5804C44

  console.log('deploy EntryPoint')
  const entryPoint = await deploy('EntryPoint', {
    from: owner,
    log: true
  })

  console.log('EntryPoint address: ', entryPoint.address)
  // 0x585733ce9bb0a31ff2363ff976081c248fe0270c

  // console.log('deploy EIP4337 Manager')
  // const manager = await new EIP4337Manager__factory(ethersSigner).deploy('0x461f6cf4e50ea66bee7596455f78911f7de5c320')
  // console.log('EIP4337 Manager address: ', manager.address)

  // console.log('deploy SafeProxy')
  // const safeProxy = await new SafeProxy4337__factory(ethersSigner).deploy('0xac6e74e8b4760F3af822664a3604C1D5dc507108', '0x20084Bf820d51C2A332709537a51b299238548F8', owner)
  // console.log('Safe Proxy address: ', safeProxy.address)
}

export default main
