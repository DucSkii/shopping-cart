import React from 'react'

import { getWatches } from '../../data/watches'

import Page from '../Page/Page'
import Items from '../Items/Items'
import Filter from '../Filter/Filter'
import ColourFilter from '../Filter/ColourFilter/ColourFilter'
import SortBy from '../Filter/SortBy/SortBy'
import PriceFilter from '../Filter/PriceFilter/PriceFilter'

// const test = () => {
//   getWatches().filter(watch => {
//     if(watch.image.color.include('Black')){
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

const Watches = ({ gender, setGender }) => {
  return (
    <>
      <Filter gender={gender} setGender={setGender}>
        <SortBy />
        <PriceFilter />
        <ColourFilter coloursList={colorsFilterList()} />
      </Filter>
      <Page className='watches' title="Watches" gender={gender}>
        {getWatches().map((watch, index) => {
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
        })}
      </Page>
    </>
  )
}

export default Watches