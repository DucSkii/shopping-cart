/* eslint-disable array-callback-return */
import React, { useState } from 'react'

import { getNecklaces } from '../../../data/necklaces'

import Page from '../../Page/Page'
import Items from '../../Items/Items'
import Filter from '../../Filter/Filter'
import ColourFilter from '../../Filter/ColourFilter/ColourFilter'
import SortBy from '../../Filter/SortBy/SortBy'
import PriceFilter from '../../Filter/PriceFilter/PriceFilter'
import Navigation from '../../Navigation/Navigation'

const colorsFilterList = () => {
  const colors = []
  getNecklaces().map((necklace) => {
    return necklace.image.color.forEach(color => {
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


const Necklaces = () => {
  const [ gender, setGender ] = useState('All')
  const [ selectionColour, setSelectionColour ] = useState([])
  const [ selectionSort, setSelectionSort ] = useState([])
  const [ selectionPrice, setSelectionPrice ] = useState([])

  const filterGender = () => {

    if (gender === 'All') {
      return getNecklaces().map((necklace, index) => {
        return <Items
          key={index}
          name={necklace.name}
          cost={necklace.cost}
          image={necklace.image.url}
          colour={necklace.image.color.join(', ').toUpperCase()}
          desc1={necklace.description1}
          desc2={necklace.description2}
          desc3={necklace.description3}
          gender={necklace.image.gender}
        />
      })
    } if (gender === 'Men') {
      return getNecklaces().filter(necklace => necklace.image.gender.includes('Men')).map((filteredNecklace, index) => {
        return <Items
          key={index}
          name={filteredNecklace.name}
          cost={filteredNecklace.cost}
          image={filteredNecklace.image.url}
          colour={filteredNecklace.image.color.join(', ').toUpperCase()}
          desc1={filteredNecklace.description1}
          desc2={filteredNecklace.description2}
          desc3={filteredNecklace.description3}
          gender={filteredNecklace.image.gender}
        />
      })
    } if (gender === 'Women') {
      return getNecklaces().filter(necklace => necklace.image.gender.includes('Women')).map((filteredNecklace, index) => {
        return <Items
          key={index}
          name={filteredNecklace.name}
          cost={filteredNecklace.cost}
          image={filteredNecklace.image.url}
          colour={filteredNecklace.image.color.join(', ').toUpperCase()}
          desc1={filteredNecklace.description1}
          desc2={filteredNecklace.description2}
          desc3={filteredNecklace.description3}
          gender={filteredNecklace.image.gender}
        />
      })
    }
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
          selection={selectionPrice}
          setSelection={setSelectionPrice}
        />
        <ColourFilter
          coloursList={colorsFilterList()}
          selection={selectionColour}
          setSelection={setSelectionColour}
        />
      </Filter>
      <Page className='necklaces' title="Necklaces" gender={gender}>
        {filterGender()}
      </Page>
    </>
  )
}

export default Necklaces