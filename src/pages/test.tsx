import React, { FC } from 'react'
import BasicTable from './table'
const Test: FC = () => {
  const headerData = ['Dessert (100g serving)', 'Calories', 'Fat', 'Carbs', 'Protein', 'meta']
  const contentData = [
    {
      'Dessert (100g serving)': 'Frozen yoghurt',
      Calories: 159,
      Fat: 6.0,
      Carbs: 24,
      Protein: 4.0,
      meta: 1,
    },
    {
      'Dessert (100g serving)': 'Frozen yoghurt',
      Calories: 159,
      Fat: 6.0,
      Carbs: 24,
      Protein: 4.0,
      meta: 1,
    },
    {
      'Dessert (100g serving)': 'Frozen yoghurt',
      Calories: 159,
      Fat: 6.0,
      Carbs: 24,
      Protein: 4.0,
      meta: 1,
    },
  ]

  const headerData2 = ['name', 'data', 'time']
  const contentData2 = [
    {
      name: 'vetri',
      data: '1str person',
      time: 'today',
    },
    {
      name: 'karthi',
      data: '2str person',
      time: 'today',
    },
    {
      name: 'kavi',
      data: '3str person',
      time: 'today',
    },
    {
      name: 'karthick',
      data: '4str person',
      time: 'today',
    },
    {
      name: 'vel',
      data: '5str person',
      time: 'today',
    },
  ]

  return (
    <div>
      <BasicTable header={headerData} content={contentData} />
      <BasicTable header={headerData2} content={contentData2} />
    </div>
  )
}

export default Test
