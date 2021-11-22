import SideNav from '../../lib/components/side-nav/side-nav'
import React from 'react'
import { Outlet } from 'react-router-dom'
import { sideData } from '../../lib/constant/sidenav.constant'

export default function Layout() {
  return (
    <div className="bg-gray-200">
      <SideNav navigationData={sideData} />
      <div className="flex items-center justify-center text-5xl text-gray-300 h-screen">
        <Outlet />
      </div>
    </div>
  )
}
