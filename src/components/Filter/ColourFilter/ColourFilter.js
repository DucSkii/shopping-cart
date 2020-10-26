import React from 'react'

import Dropdown from '../../../utils/Dropdown/Dropdown'

import './ColourFilter.scss'

const items = [
  {
    id: 1,
    value: 'Gold'
  },
  {
    id: 2,
    value: 'Black'
  },
  {
    id: 3,
    value: 'Silver'
  },
]

const ColourFilter = () => {

  return (
    <div className="colourFilter">
      <Dropdown title="Colour" items={items} multiSelect />
    </div>
  )
}

export default ColourFilter