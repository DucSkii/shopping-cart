import React from 'react'

import PriceFilter from './PriceFilter/PriceFilter'
import ColourFilter from './ColourFilter/ColourFilter'
import SortBy from './SortBy/SortBy'

import './Filter.scss'

const Filter = ({ gender, setGender }) => {

  return (
    <div className="filter">
      <div className="filter-gender">
        <div className="filter-vertical-divider" />
        <div
          className={gender === "All" ? "filter-gender-button-selected" : "filter-gender-button"}
          onClick={() => setGender('All')}
        >All</div>
        <div className="filter-vertical-divider" />
        <div
          className={gender === "Men" ? "filter-gender-button-selected" : "filter-gender-button"}
          onClick={() => setGender('Men')}
        >Men</div>
        <div className="filter-vertical-divider" />
        <div
          className={gender === "Women" ? "filter-gender-button-f-selected" : "filter-gender-button-f"}
          onClick={() => setGender('Women')}
        >Women</div>
        <div className="filter-vertical-divider" />
      </div>
      <SortBy />
      <PriceFilter />
      <ColourFilter />
    </div>
  )
}

export default Filter