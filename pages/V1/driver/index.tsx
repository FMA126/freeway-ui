import { useWeb3React } from '@web3-react/core'

export default function Driver() {
  // { active, account, activate, connector, deactivate, error, library }
  const { active, account, library } = useWeb3React()
  console.log(account)

  const handleDriverMint = async () => {
    const signer = library.getSigner(account)
    // const driverContract = FreeWayDriver__factory.connect(DRIVER_MUMBAI_ADDRESS, signer)
    // await driverContract.mintItem(account || '')
  }
  if (!active) {
    return (
      <>
        <div>Please download MetaMask</div>
      </>
    )
  }
  return (
    <div className="mint-container-driver">
      <h1>Mint Driver</h1>
      <button onClick={handleDriverMint}>
        Mint <span>🏎</span>
      </button>
    </div>
  )
}
