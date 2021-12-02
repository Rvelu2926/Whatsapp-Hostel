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
    components: React.lazy(() => import('./pages/enquiry-form/Enquiry-Form')),
  },
  {
    path: 'complaint',
    components: React.lazy(() => import('./pages/complaint-form/Complaint-form')),
  },
  {
    path: 'test',
    components: React.lazy(() => import('./pages/test')),
  },
  {
    path: 'user-creation',
    components: React.lazy(() => import('@pages/user-creation-form/user-creation-form')),
  },
  {
    path: 'room-creation',
    components: React.lazy(() => import('@pages/room-creation/room-creation')),
  },
  {
    path: 'location-creation',
    components: React.lazy(() => import('@pages/location-form/location-form')),
  },
]
