/* eslint-disable array-callback-return */
import React, { useState } from 'react'

import Page from '../../Page/Page'
import Items from '../../Items/Items'
import Filter from '../../Filter/Filter'
import ColourFilter from '../../Filter/ColourFilter/ColourFilter'
import SortBy from '../../Filter/SortBy/SortBy'
import PriceFilter from '../../Filter/PriceFilter/PriceFilter'
import Navigation from '../../Navigation/Navigation'
import { useStateValue } from '../../../context/StateContext'

const colorsFilterList = (necklaces) => {
  const colors = []
  necklaces.map((necklace) => {
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
  const [{necklaces, mapColor}, dispatch ] = useStateValue()

  const filterGender = () => {

    if (gender === 'All') {
      if (mapColor.length === 0) {
        return necklaces.map((necklace, index) => {
          return <Items
            key={index}
            id={necklace.id}
            subTotal={necklace.subTotal}
            quantity={necklace.quantity}
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
      } else {
        return necklaces.filter(item => item.image.color.some(color => mapColor.includes(color))).map((filteredColor, index) => {
          return <Items
            key={index}
            id={filteredColor.id}
            subTotal={filteredColor.subTotal}
            quantity={filteredColor.quantity}
            name={filteredColor.name}
            cost={filteredColor.cost}
            image={filteredColor.image.url}
            colour={filteredColor.image.color.join(', ').toUpperCase()}
            desc1={filteredColor.description1}
            desc2={filteredColor.description2}
            desc3={filteredColor.description3}
            gender={filteredColor.image.gender}
          />
        })
      }
    } if (gender === 'Men') {
      if (mapColor.length === 0) {
        return necklaces.filter(necklace => necklace.image.gender.includes('Men')).map((filteredNecklace, index) => {
          return <Items
            key={index}
            id={filteredNecklace.id}
            subTotal={filteredNecklace.subTotal}
            quantity={filteredNecklace.quantity}
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
      } else {
        return necklaces.filter(necklace => necklace.image.gender.includes('Men')).filter(
          item => item.image.color.some(color => mapColor.includes(color))).map((filteredColor, index) => {
          return <Items
            key={index}
            id={filteredColor.id}
            subTotal={filteredColor.subTotal}
            quantity={filteredColor.quantity}
            name={filteredColor.name}
            cost={filteredColor.cost}
            image={filteredColor.image.url}
            colour={filteredColor.image.color.join(', ').toUpperCase()}
            desc1={filteredColor.description1}
            desc2={filteredColor.description2}
            desc3={filteredColor.description3}
            gender={filteredColor.image.gender}
          />
        })
      }
    } if (gender === 'Women') {
      if (mapColor.length === 0) {
        return necklaces.filter(necklace => necklace.image.gender.includes('Women')).map((filteredNecklace, index) => {
          return <Items
            key={index}
            id={filteredNecklace.id}
            subTotal={filteredNecklace.subTotal}
            quantity={filteredNecklace.quantity}
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
      } else {
        return necklaces.filter(necklace => necklace.image.gender.includes('Women')).filter(
          item => item.image.color.some(color => mapColor.includes(color))).map((filteredColor, index) => {
          return <Items
            key={index}
            id={filteredColor.id}
            subTotal={filteredColor.subTotal}
            quantity={filteredColor.quantity}
            name={filteredColor.name}
            cost={filteredColor.cost}
            image={filteredColor.image.url}
            colour={filteredColor.image.color.join(', ').toUpperCase()}
            desc1={filteredColor.description1}
            desc2={filteredColor.description2}
            desc3={filteredColor.description3}
            gender={filteredColor.image.gender}
          />
        })
      }
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
          coloursList={colorsFilterList(necklaces)}
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