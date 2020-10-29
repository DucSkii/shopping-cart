import React from 'react'
import Dropdown from '../../../utils/Tools/Dropdown/Dropdown.js'

const items = [
  {
    id: 1,
    value: 'Price low to high'
  },
  {
    id: 2,
    value: 'Price high to low'
  },
]

const SortBy = ({ selection, setSelection }) => {

  return (
    <div className="sortBy" >
      <Dropdown title="Sort"
        items={items}
        selection={selection}
        setSelection={setSelection}
      />
    </div >
  )
}

export default SortBy