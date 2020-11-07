/* eslint-disable array-callback-return */
import React, { useState, useEffect } from 'react'

import Navigation from '../../Navigation/Navigation'
import Page from '../../Page/Page'
import Items from '../../Items/Items'
import Filter from '../../Filter/Filter'
import ColourFilter from '../../Filter/ColourFilter/ColourFilter'
import SortBy from '../../Filter/SortBy/SortBy'
import PriceFilter from '../../Filter/PriceFilter/PriceFilter'
import { useStateValue } from '../../../context/StateContext'

const colorsFilterList = (watches) => {
  const colors = []
  watches.map((watch) => {
    return watch.image.color.forEach(color => {
      if (!colors.includes(color)) {
        colors.push(color)
      }
    })
  })
  return colors.map((color, index) => ({
    id: index,
    value: color,
  }))
}

const Watches = () => {
  const [ gender, setGender ] = useState('All')
  const [ selectionColour, setSelectionColour ] = useState([])
  const [ selectionSort, setSelectionSort ] = useState([])
  const [ min, setMin ] = useState(1000)
  const [ max, setMax ] = useState(20000)
  const [ selectedPrice, setSelectedPrice ] = useState(false)
  const [{watches, mapColor, getSort, clearAll, searchBar}, dispatch ] = useStateValue()

  const difference = 190
  const addition = 1000

  useEffect(() => {
    if (selectionColour.length !== 0 || selectionSort.length !== 0 || selectedPrice !== false) {
      dispatch({type: 'CHANGE_TRUE'})
    } else {
      dispatch({type: 'CHANGE_FALSE'})
    }
  }, [ selectionColour, selectedPrice, selectionSort ])

  useEffect(() => {
    if(clearAll === true){
      setSelectionColour([])
      setSelectionSort([])
      setSelectedPrice(false)
      dispatch({type: 'CLEAR_RESET'})
    }
  }, [clearAll])

  // .filter

  // .map
  const filterGender = () => {
    return watches.filter(watch => {
      const hasGender = watch.image.gender.includes(gender)
      // If gender is Men or Women
      if(gender !== 'All') {
        // If color filter
        if(mapColor.length) {
          // return true if right gender and color
          return hasGender && watch.image.color.some(color => mapColor.includes(color))
        }
        // if no color filter, return if it's the right gender
        return hasGender
      } if(mapColor.length) {
        return watch.image.color.some(color => mapColor.includes(color))
      }
      return watch
    })
  }

  const sortArray = () => {
    let filterSort = []
    const filterNumber = filterGender().map(item => {
      return item.cost
    })
    if (getSort.length === 0) {
      filterSort = filterNumber
    } else if (getSort.toString() === 'Price low to high') {
      filterSort = filterNumber.sort((a, b) => {
        return a - b
      })
    } else if (getSort.toString() === 'Price high to low') {
      filterSort = filterNumber.sort((a, b) => {
        return b - a
      })
    }
    return filterSort
  }

  const mapOrder = (array, order, key) => {
    array.sort((a, b) => {
      let A = a[key]
      let B = b[key]

      if(order.indexOf(A) > order.indexOf(B)) {
        return 1
      } else {
        return -1
      }
    })
    return array
  }

  const orderedArray = mapOrder(filterGender(), sortArray(), 'cost')

  const renderOrderedArray = () => {
    return orderedArray.filter(item => {
      if (min <= item.cost && item.cost <= max) {
        return item
      }
    }).map((item, index) => {
      if(searchBar !== '' && item.name.toLowerCase().indexOf(searchBar.toLowerCase()) === -1 ){
        return null
      } else {
        return <Items
          key={index}
          id={item.id}
          subTotal={item.subTotal}
          quantity={item.quantity}
          name={item.name}
          cost={item.cost}
          image={item.image.url}
          colour={item.image.color.join(', ').toUpperCase()}
          desc1={item.description1}
          desc2={item.description2}
          desc3={item.description3}
          gender={item.image.gender}
        />
      }
    })
  }

  const itemPageCount = renderOrderedArray().filter(array => array !== null)

  return (
    <>
      <Navigation />
      <Filter
        gender={gender}
        setGender={setGender}
        setMin={setMin}
        setMax={setMax}
        difference={difference}
        addition={addition}
      >
        <SortBy
          selection={selectionSort}
          setSelection={setSelectionSort}
        />
        <PriceFilter
          min={min}
          max={max}
          setMin={setMin}
          setMax={setMax}
          difference={difference}
          addition={addition}
          setSelectedPrice={setSelectedPrice}
        />
        <ColourFilter
          coloursList={colorsFilterList(watches)}
          selection={selectionColour}
          setSelection={setSelectionColour}
        />
      </Filter>
      <Page className='watches' title="Watches" gender={gender} itemPageCount={itemPageCount.length}>
        {renderOrderedArray()}
      </Page>
    </>
  )
}

export default Watches