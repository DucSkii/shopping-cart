/* eslint-disable array-callback-return */
import React, { useState } from 'react'

import { getEarrings } from '../../../data/earrings'

import Page from '../../Page/Page'
import Items from '../../Items/Items'
import Filter from '../../Filter/Filter'
import ColourFilter from '../../Filter/ColourFilter/ColourFilter'
import SortBy from '../../Filter/SortBy/SortBy'
import PriceFilter from '../../Filter/PriceFilter/PriceFilter'

const colorsFilterList = () => {
  const colors = []
  getEarrings().map((earring) => {
    return earring.image.color.forEach(color => {
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


const Earrings = () => {
  const [ gender, setGender ] = useState('All')
  const [ selectionColour, setSelectionColour ] = useState([])
  const [ selectionSort, setSelectionSort ] = useState([])
  const [ selectionPrice, setSelectionPrice ] = useState([])

  const filterGender = () => {

    if (gender === 'All') {
      return getEarrings().map((earring, index) => {
        return <Items
          key={index}
          name={earring.name}
          cost={earring.cost}
          image={earring.image.url}
          colour={earring.image.color.join(', ').toUpperCase()}
          desc1={earring.description1}
          desc2={earring.description2}
          desc3={earring.description3}
          gender={earring.image.gender}
        />
      })
    } if (gender === 'Men') {
      return getEarrings().filter(earring => earring.image.gender.includes('Men')).map((filteredEarring, index) => {
        return <Items
          key={index}
          name={filteredEarring.name}
          cost={filteredEarring.cost}
          image={filteredEarring.image.url}
          colour={filteredEarring.image.color.join(', ').toUpperCase()}
          desc1={filteredEarring.description1}
          desc2={filteredEarring.description2}
          desc3={filteredEarring.description3}
          gender={filteredEarring.image.gender}
        />
      })
    } if (gender === 'Women') {
      return getEarrings().filter(earring => earring.image.gender.includes('Women')).map((filteredEarring, index) => {
        return <Items
          key={index}
          name={filteredEarring.name}
          cost={filteredEarring.cost}
          image={filteredEarring.image.url}
          colour={filteredEarring.image.color.join(', ').toUpperCase()}
          desc1={filteredEarring.description1}
          desc2={filteredEarring.description2}
          desc3={filteredEarring.description3}
          gender={filteredEarring.image.gender}
        />
      })
    }
  }

  return (
    <>
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
      <Page className='earrings' title="Earrings" gender={gender}>
        {filterGender()}
      </Page>
    </>
  )
}

export default Earrings