import React from 'react'
import Dropdown from '../../../utils/Tools/Dropdown/Dropdown'

const items = [
  {
    id: 1,
    value: 'Price low to high'
  },
  {
    id: 2,
    value: 'Price high to low'
  },
  {
    id: 3,
    value: `Our favourite's`
  },
]

const SortBy = () => {

  return (
    <div className="sortBy" >
      <Dropdown title="Sort" items={items} />
    </div >
  )
}

export default SortBy