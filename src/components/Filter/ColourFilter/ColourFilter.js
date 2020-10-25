import React, { useState } from 'react'

import './ColourFilter.css'

const ColourFilter = () => {

  const [ toggleFilter, setToggleFilter ] = useState(false)

  const toggleHandler = () => {
    setToggleFilter(!toggleFilter)
    console.log(toggleFilter)
  }
  return (
    <div className="colourFilter">
      <button onClick={toggleHandler}>Colour</button>
    </div>
  )
}

export default ColourFilter