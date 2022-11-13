
import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './pages/NavBar'
import SideBar from './pages/SideBar'


const MainDashboard = () => {
  return (
    <>

<SideBar/>
  <Outlet/>
    </>
  )
}

export default MainDashboard