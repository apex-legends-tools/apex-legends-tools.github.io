import React, { PropsWithChildren } from 'react'
import Footer from './footer'

export default function Layout({ children } : PropsWithChildren<{}>) {
  return (
    <>
      <main>{children}</main>
      <Footer />
    </>
  )
}