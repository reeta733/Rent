import React from 'react'

import Header from '../components/Header'
import SideBar from '../components/SideBar'


import { Outlet } from 'react-router-dom'

const ProtacatedeRoute = () => {
  return (
    <div className="wrapper">

      <SideBar />
      <div className="main-panel">
        <Header />
        <Outlet />
      </div>
    </div>

  )
}

export default ProtacatedeRoute