import * as React from 'react'
import DashboardTopBar from './components/top-bar'
import DashboardCard from './components/card'
import DashboardList from './components/list'
import TemporaryDrawer from './components/SideNav'

export default function AdminDashboard(): JSX.Element {
  return (
    <div>
      <TemporaryDrawer></TemporaryDrawer>
      <DashboardTopBar></DashboardTopBar>
      <DashboardCard></DashboardCard>
      <DashboardList></DashboardList>
    </div>
  )
}
