import { useWeb3React } from '@web3-react/core'
import { useEffect, useState } from 'react'
import FreeWayBackendAPI from 'src/api'
import Web3ReactManager from 'src/components/Web3ReactManager/Web3ReactManager'
import { Datum, IDriver, IDrivers } from './types'

export default function Driver() {
  // { active, account, activate, connector, deactivate, error, library }
  const { active, account, library } = useWeb3React()
  const [drivers, setDrivers] = useState<Datum[] | undefined>()
  const [driver, setDriver] = useState<Datum | undefined>()

  useEffect(() => {
    const driversResult = async () => {
      try {
        const res: IDrivers = await FreeWayBackendAPI.getAll({ path: '/drivers' })
        const test = await FreeWayBackendAPI.get<IDriver>('/drivers', 1)
        setDrivers(res.data.data)
        setDriver(test.data.data)
      } catch (err) {
        alert('Error: Something went wrong')
      }
    }
    driversResult()
  }, [])

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
    <Web3ReactManager>
      <div className="mint-container-driver">
        <h1>Mint Driver</h1>
        <button onClick={handleDriverMint}>
          Mint <span>🏎</span>
        </button>
        <div>{drivers && drivers.map((driver, index) => <div key={index}>{driver.attributes.name}</div>)}</div>
        <div style={{ color: 'purple' }}>{driver?.attributes.name}</div>
      </div>
    </Web3ReactManager>
  )
}
