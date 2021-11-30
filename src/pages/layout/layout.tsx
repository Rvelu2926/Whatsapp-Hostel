import React from 'react'
import { Outlet } from 'react-router-dom'
import SideNav from '@components/side-nav/side-nav'
import { sideData } from '@constant/sidenav.constant'

export default function Layout(): JSX.Element {
  return (
    <div className="flex ">
      <div className="flex w-14">
        <SideNav navigationData={sideData} />
      </div>
      <div className="flex flex-1">
        <Outlet />
      </div>
    </div>
  )
}
