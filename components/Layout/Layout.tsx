// import Footer from './footer'
import { ReactNode } from 'react'
import NavDrawer from '../NavDrawer/NavDrawer'

export default function Layout(children: ReactNode) {
  return (
    <>
      <NavDrawer />
        {children}
      {/* <Footer /> */}
    </>
  )
}