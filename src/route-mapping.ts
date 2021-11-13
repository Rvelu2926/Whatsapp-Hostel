/* eslint-disable @typescript-eslint/no-explicit-any */

import React from 'react'

export interface IRoute {
  path: string
  components: any
}

export const routesConfig: IRoute[] = [
  {
    path: 'admin-dashboard',
    components: React.lazy(() => import('./pages/admin-dashboard/AdminDashboard')),
  },
  {
    path: 'enquiry',
    components: React.lazy(() => import('./pages/enquiry-form/components/Enquiry-Form')),
  },
]
