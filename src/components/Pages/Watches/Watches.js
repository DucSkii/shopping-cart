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
import { filter } from 'lodash'

// const test = () => {
//   watches.filter(watch => {
//     if(watch.image.color.includes('Black')){
//       return watch
//     }
//   })
// }

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
  const [ selectionPrice, setSelectionPrice ] = useState([])
  const [ min, setMin ] = useState(1000)
  const [ max, setMax ] = useState(20000)
  const [{watches, mapColor, getSort, clearAll}, dispatch ] = useStateValue()

  const difference = 190
  const addition = 1000

  useEffect(() => {
    if (selectionColour.length !== 0 || selectionSort.length !== 0 || selectionPrice.length !== 0) {
      dispatch({type: 'CHANGE_TRUE'})
    } else {
      dispatch({type: 'CHANGE_FALSE'})
    }
  }, [ selectionColour, selectionPrice, selectionSort ])

  useEffect(() => {
    if(clearAll === true){
      setSelectionColour([])
      setSelectionSort([])
      setSelectionPrice([])
      dispatch({type: 'CLEAR_RESET'})
    }
  }, [clearAll])

  const filterGender = () => {
    if (gender === 'All') {
      if (mapColor.length === 0) {
        return watches.map((watch, index) => {
          return watch
        })
      } else {
        return watches.filter(item => item.image.color.some(color => mapColor.includes(color))).map((watch, index) => {
          return watch
        })
      }
    } if (gender === 'Men') {
      if (mapColor.length === 0) {
        return watches.filter(watch => watch.image.gender.includes('Men')).map((watch, index) => {
          return watch
        })
      } else {
        return watches.filter(watch => watch.image.gender.includes('Men')).filter(
          item => item.image.color.some(color => mapColor.includes(color))).map((watch, index) => {
          return watch
        })
      }
    } if (gender === 'Women') {
      if (mapColor.length === 0) {
        return watches.filter(watch => watch.image.gender.includes('Women')).map((watch, index) => {
          return watch
        })
      } else {
        return watches.filter(watch => watch.image.gender.includes('Women')).filter(
          item => item.image.color.some(color => mapColor.includes(color))).map((watch, index) => {
          return watch
        })
      }
    }
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
    })
  }

  return (
    <>
      <Navigation />
      <Filter gender={gender} setGender={setGender}>
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
        />
        <ColourFilter
          coloursList={colorsFilterList(watches)}
          selection={selectionColour}
          setSelection={setSelectionColour}
        />
      </Filter>
      <Page className='watches' title="Watches" gender={gender}>
        {renderOrderedArray()}
      </Page>
    </>
  )
}

export default Watches