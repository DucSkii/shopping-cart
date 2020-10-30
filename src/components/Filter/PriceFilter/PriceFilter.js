import React from 'react'

import Dropdown from '../../../utils/Tools/Dropdown/Dropdown.js'

const items = [
  {
    id: 1,
    value: 'Gold',
  },
  {
    id: 2,
    value: 'Black',
  },
  {
    id: 3,
    value: 'Silver',
  },
]

const PriceFilter = ({ selection, setSelection }) => {

  return (
    <div className="priceFilter">
      <Dropdown title="Price Range"
        items={items}
        multiSelect
        selection={selection}
        setSelection={setSelection}
      />
    </div>
  )
}

export default PriceFilter