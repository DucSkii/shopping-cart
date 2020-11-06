import React from 'react'

import DropdownPrice from '../../../utils/Tools/DropdownPrice/DropdownPrice'

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

const PriceFilter = ({ min, max, setMin, setMax, difference, addition }) => {

  return (
    <div className="priceFilter">
      <DropdownPrice
        title="Price Range"
        min={min}
        max={max}
        setMin={setMin}
        setMax={setMax}
        difference={difference}
        addition={addition}
      />
    </div>
  )
}

export default PriceFilter