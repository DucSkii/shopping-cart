import React from 'react'

import Dropdown from '../../../utils/Tools/Dropdown/Dropdown'

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
      <Dropdown title="Price Range" items={items} multiSelect />
    </div>
  )
}

export default PriceFilter