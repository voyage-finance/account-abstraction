import { ethers } from 'hardhat'

async function main () {
  const provider = ethers.provider
  const ethersSigner = provider.getSigner()
  const tx = {
    to: '0xeeCC6df760B5Da6e40559a3B7B143614eDaa6aA2',
    value: ethers.utils.parseEther('1000')
  }
  const createReceipt = await ethersSigner.sendTransaction(tx)
  await createReceipt.wait()
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
