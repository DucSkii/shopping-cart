import React from 'react'

import PriceFilter from './PriceFilter/PriceFilter'
import ColourFilter from './ColourFilter/ColourFilter'

import './Filter.scss'

const Filter = () => {

  return (
    <div className="filter">
      <div className="filter-gender">
        <div className="filter-vertical-divider" />
        <div className="filter-gender-button">Men</div>
        <div className="filter-vertical-divider" />
        <div className="filter-gender-button-f">Women</div>
        <div className="filter-vertical-divider" />
      </div>
      <PriceFilter />
      <ColourFilter />
    </div>
  )
}

export default Filter