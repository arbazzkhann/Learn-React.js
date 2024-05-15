import React, { PureComponent } from 'react'
import Header from './components/Header/header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

export class Layout extends PureComponent {
  render() {
    return (
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    )
  }
}

export default Layout