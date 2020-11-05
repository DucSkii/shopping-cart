import React, {useState, useEffect} from 'react'

import './Filter.scss'

const Filter = ({ gender, setGender, children }) => {
 
  const [ stickFilter, setStickFilter ] = useState(false)

  const checkScrollFilter = () => {
    if (window.pageYOffset > 162) {
      setStickFilter(true)
    } else if (window.pageYOffset <= 162) {
      setStickFilter(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', checkScrollFilter)
    return () => {
      window.removeEventListener('scroll', checkScrollFilter)
      setStickFilter(false)
    }
  }, [])

  return (
    <div className={stickFilter ? 'filter-fixed' : 'filter'}>
      <div className="filter-gender">
        <div className="filter-vertical-divider" />
        <div
          className={gender === 'All' ? 'filter-gender-button-selected' : 'filter-gender-button'}
          onClick={() => setGender('All')}
        >All</div>
        <div className="filter-vertical-divider" />
        <div
          className={gender === 'Men' ? 'filter-gender-button-selected' : 'filter-gender-button'}
          onClick={() => setGender('Men')}
        >Men</div>
        <div className="filter-vertical-divider" />
        <div
          className={gender === 'Women' ? 'filter-gender-button-f-selected' : 'filter-gender-button-f'}
          onClick={() => setGender('Women')}
        >Women</div>
        <div className="filter-vertical-divider" />
      </div>
      {children}
    </div>
  )
}

export default Filter