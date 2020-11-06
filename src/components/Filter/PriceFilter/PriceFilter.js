import React from 'react'

import DropdownPrice from '../../../utils/Tools/DropdownPrice/DropdownPrice'

const PriceFilter = ({ min, max, setMin, setMax, difference, addition, setSelectedPrice}) => {

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
        setSelectedPrice={setSelectedPrice}
      />
    </div>
  )
}

export default PriceFilter