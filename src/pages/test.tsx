import React, { FC } from 'react'
import BasicTable from './table'
const Test: FC = () => {
  const headerData2 = ['name', 'phone', 'email', 'location', 'building', 'sharing']
  const contentData2 = [
    {
      name: 'vetriselvan',
      phone: 973738739379,
      email: 'mail@mainModule.com',
      location: 'saravanapatti',
      building: 'wu hostel',
      sharing: 2,
    },
    {
      name: 'vetriselvan',
      phone: 973738739379,
      email: 'mail@mainModule.com',
      location: 'saravanapatti',
      building: 'wu hostel',
      sharing: 2,
    },
    {
      name: 'vetriselvan',
      phone: 973738739379,
      email: 'mail@mainModule.com',
      location: 'saravanapatti',
      building: 'wu hostel',
      sharing: 2,
    },
    {
      name: 'vetriselvan',
      phone: 973738739379,
      email: 'mail@mainModule.com',
      location: 'saravanapatti',
      building: 'wu hostel',
      sharing: 2,
    },
    {
      name: 'vetriselvan',
      phone: 973738739379,
      email: 'mail@mainModule.com',
      location: 'saravanapatti',
      building: 'wu hostel',
      sharing: 2,
    },
  ]

  return (
    <div className="flex align-center justify-center">
      <BasicTable header={headerData2} content={contentData2} />
    </div>
  )
}

export default Test
