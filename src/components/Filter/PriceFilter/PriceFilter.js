import React from 'react'

import Dropdown from '../../../utils/Dropdown/Dropdown'

import './PriceFilter.scss'

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

const PriceFilter = () => {

  return (
    <div className="priceFilter">
      <Dropdown title="Price Range" items={items} />
    </div>
  )
}

export default PriceFilter