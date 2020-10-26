import React from 'react'

import PriceFilter from './PriceFilter/PriceFilter'
import ColourFilter from './ColourFilter/ColourFilter'
import SortBy from './SortBy/SortBy'

import './Filter.scss'

const Filter = () => {

  return (
    <div className="filter">
      <div className="filter-gender">
        <div className="filter-vertical-divider" />
        <div className="filter-gender-button">All</div>
        <div className="filter-vertical-divider" />
        <div className="filter-vertical-divider" />
        <div className="filter-gender-button">Men</div>
        <div className="filter-vertical-divider" />
        <div className="filter-gender-button-f">Women</div>
        <div className="filter-vertical-divider" />
      </div>
      <SortBy />
      <PriceFilter />
      <ColourFilter />
    </div>
  )
}

export default Filter