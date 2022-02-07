import BottomNav from '../../src/components/BottomNav'
import MapboxMap from '../../src/components/MapboxMap'
import NavDrawer from '../../src/components/NavDrawer'
import { Web3Provider } from '@ethersproject/providers'
import { Web3ReactProvider } from '@web3-react/core'
import { useEffect } from 'react'
import Web3ReactManager from '../../src/components/Web3ReactManager/Web3ReactManager'

export default function V1() {
  function getLibrary(provider: any): Web3Provider {
    return new Web3Provider(
      provider,
      typeof provider.chainId === 'number'
        ? provider.chainId
        : typeof provider.chainId === 'string'
        ? parseInt(provider.chainId)
        : 'any'
    )
  }
  useEffect(() => {
    if (!!window.ethereum) {
      window.ethereum.autoRefreshOnNetworkChange = false
    }
  }, [])
  return (
    <>
      <NavDrawer />
      <Web3ReactProvider getLibrary={getLibrary}>
        <Web3ReactManager>
          <div>FreewWayDAO</div>
        </Web3ReactManager>
      </Web3ReactProvider>
      <MapboxMap />
      <BottomNav />
    </>
  )
}
