import SideNav from '../../lib/components/side-nav/side-nav'
import React from 'react'
import { Outlet } from 'react-router-dom'
import { sideData } from '../../lib/constant/sidenav.constant'

export default function Layout() {
  return (
    <div className="bg-gray-200 flex ">
      <div className="flex w-14">
        <SideNav navigationData={sideData} />
      </div>
      <div className="flex flex-1">
        <Outlet />
      </div>
    </div>
  )
}
