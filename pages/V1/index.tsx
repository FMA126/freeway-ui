import BottomNav from '../../src/components/BottomNav'
import NavDrawer from '../../src/components/NavDrawer'
import { Web3Provider } from '@ethersproject/providers'
import { Web3ReactProvider } from '@web3-react/core'
import { useEffect } from 'react'
import Web3ReactManager from '../../src/components/Web3ReactManager/Web3ReactManager'
import styles from './V1.module.css'

import dynamic from 'next/dynamic'

const MapboxMap = dynamic(() => import('../../src/components/MapboxMap'), {
  ssr: false,
})

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
      <Web3ReactProvider getLibrary={getLibrary}>
        <Web3ReactManager>
          <>
            <div className={styles.navBar}>
              <NavDrawer />
            </div>
            <div className={styles.pageContainer}>
              <div className={styles.map}>
                <MapboxMap />
              </div>
              <div className={styles.footBar}>
                <BottomNav />
              </div>
            </div>
          </>
        </Web3ReactManager>
      </Web3ReactProvider>
    </>
  )
}
