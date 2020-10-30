import React from 'react'
import Dropdown from '../../../utils/Tools/Dropdown/Dropdown.js'

const ColourFilter = ({ coloursList, selection, setSelection }) => {
  return (
    <div className="colourFilter">
      <Dropdown title="Colour" items={coloursList} multiSelect
        selection={selection}
        setSelection={setSelection}
      />
    </div>
  )
}

export default ColourFilter