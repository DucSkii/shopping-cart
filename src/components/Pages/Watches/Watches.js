/* eslint-disable array-callback-return */
import React, { useState } from 'react'

import { getWatches } from '../../../data/watches'

import Navigation from '../../Navigation/Navigation'
import Page from '../../Page/Page'
import Items from '../../Items/Items'
import Filter from '../../Filter/Filter'
import ColourFilter from '../../Filter/ColourFilter/ColourFilter'
import SortBy from '../../Filter/SortBy/SortBy'
import PriceFilter from '../../Filter/PriceFilter/PriceFilter'

// const test = () => {
//   getWatches().filter(watch => {
//     if(watch.image.color.includes('Black')){
//       return watch
//     }
//   })
// }

const colorsFilterList = () => {
  const colors = []
  getWatches().map((watch) => {
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

  const filterGender = () => {

    if (gender === 'All') {
      return getWatches().map((watch, index) => {
        return <Items
          key={index}
          name={watch.name}
          cost={watch.cost}
          image={watch.image.url}
          colour={watch.image.color.join(', ').toUpperCase()}
          desc1={watch.description1}
          desc2={watch.description2}
          desc3={watch.description3}
          gender={watch.image.gender}
        />
      })
    } if (gender === 'Men') {
      return getWatches().filter(watch => watch.image.gender.includes('Men')).map((filteredWatch, index) => {
        return <Items
          key={index}
          name={filteredWatch.name}
          cost={filteredWatch.cost}
          image={filteredWatch.image.url}
          colour={filteredWatch.image.color.join(', ').toUpperCase()}
          desc1={filteredWatch.description1}
          desc2={filteredWatch.description2}
          desc3={filteredWatch.description3}
          gender={filteredWatch.image.gender}
        />
      })
    } if (gender === 'Women') {
      return getWatches().filter(watch => watch.image.gender.includes('Women')).map((filteredWatch, index) => {
        return <Items
          key={index}
          name={filteredWatch.name}
          cost={filteredWatch.cost}
          image={filteredWatch.image.url}
          colour={filteredWatch.image.color.join(', ').toUpperCase()}
          desc1={filteredWatch.description1}
          desc2={filteredWatch.description2}
          desc3={filteredWatch.description3}
          gender={filteredWatch.image.gender}
        />
      })
    }
  }

  // const filterColour = () => {
  //   if (selectionColour.length !== 0) {
  //     return
  //   }
  // }

  return (
    <>
      <Navigation />
      <Filter gender={gender} setGender={setGender}>
        <SortBy
          selection={selectionSort}
          setSelection={setSelectionSort}
        />
        <PriceFilter
          selection={selectionPrice}
          setSelection={setSelectionPrice}
        />
        <ColourFilter
          coloursList={colorsFilterList()}
          selection={selectionColour}
          setSelection={setSelectionColour}
        />
      </Filter>
      <Page className='watches' title="Watches" gender={gender}>
        {filterGender()}
      </Page>
    </>
  )
}

export default Watches