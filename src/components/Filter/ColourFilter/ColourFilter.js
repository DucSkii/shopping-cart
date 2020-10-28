import React from 'react'
import Dropdown from '../../../utils/Tools/Dropdown/Dropdown'

const ColourFilter = ({ coloursList }) => {
  return (
    <div className="colourFilter">
      <Dropdown title="Colour" items={coloursList} multiSelect />
    </div>
  )
}

export default ColourFilter