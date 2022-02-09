import { useWeb3React } from '@web3-react/core'
import Web3ReactManager from 'src/components/Web3ReactManager/Web3ReactManager'

export default function MintRider() {
  // { active, account, activate, connector, deactivate, error, library }
  const { active, account, library } = useWeb3React()

  const handleRiderMint = async () => {
    const signer = library.getSigner(account)
    // const riderContract = FreeWayRider__factory.connect(RIDER_MUMBAI_ADDRESS, signer)
    // await riderContract.mintItem(account || '')
  }
  if (!active) {
    return (
      <>
        <div>Please download MetaMask</div>
      </>
    )
  }
  return (
    <Web3ReactManager>
      <div className="mint-container-rider">
        <h1>Mint Rider</h1>
        <button onClick={handleRiderMint}>
          Mint <span>🎢</span>
        </button>
      </div>
    </Web3ReactManager>
  )
}
