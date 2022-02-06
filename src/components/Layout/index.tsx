// import Footer from './footer'
import { AppLayoutProps } from 'next/app'
import { ReactNode } from 'react'
import NavDrawer from '../NavDrawer/NavDrawer'

type Props = {
  children: ReactNode,
}

export default function Layout(children: Props) {
  return (
    <>
      <NavDrawer />
        {children}
      {/* <Footer /> */}
    </>
  )
}