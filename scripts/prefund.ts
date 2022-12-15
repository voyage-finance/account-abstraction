import { ethers, getNamedAccounts, deployments } from 'hardhat';
import { EntryPoint } from '../typechain';

async function main() {
    const entryPointFactory = await ethers.getContractFactory('EntryPoint');
    const entryPoint = await entryPointFactory.attach('0x8fdb1b58ed14a0630475713dca0bba6c061694f1')
    const options = {value: ethers.utils.parseEther("1.0")}
    const tx = await entryPoint.depositTo('0x0736490803771d7f8c39AcAaBaA2Fd22D4F2BC5F',options)
    await tx.wait()
}



main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
