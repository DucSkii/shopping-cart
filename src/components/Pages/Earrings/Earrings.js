/* eslint-disable array-callback-return */
import React, { useState } from 'react'

import Navigation from '../../Navigation/Navigation'
import Page from '../../Page/Page'
import Items from '../../Items/Items'
import Filter from '../../Filter/Filter'
import ColourFilter from '../../Filter/ColourFilter/ColourFilter'
import SortBy from '../../Filter/SortBy/SortBy'
import PriceFilter from '../../Filter/PriceFilter/PriceFilter'
import { useStateValue } from '../../../context/StateContext'

const colorsFilterList = (earrings) => {
  const colors = []
  earrings.map((earring) => {
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
  const [{earrings, mapColor}, dispatch ] = useStateValue()

  const filterGender = () => {
    if (gender === 'All') {
      if (mapColor.length === 0) {
        return earrings.map((earring, index) => {
          return <Items
            key={index}
            id={earring.id}
            subTotal={earring.subTotal}
            quantity={earring.quantity}
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
      } else {
        return earrings.filter(item => item.image.color.some(color => mapColor.includes(color))).map((filteredColor, index) => {
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
        return earrings.filter(earring => earring.image.gender.includes('Men')).map((filteredEarring, index) => {
          return <Items
            key={index}
            id={filteredEarring.id}
            subTotal={filteredEarring.subTotal}
            quantity={filteredEarring.quantity}
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
      } else {
        return earrings.filter(earring => earring.image.gender.includes('Men')).filter(
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
        return earrings.filter(earring => earring.image.gender.includes('Women')).map((filteredEarring, index) => {
          return <Items
            key={index}
            id={filteredEarring.id}
            subTotal={filteredEarring.subTotal}
            name={filteredEarring.name}
            quantity={filteredEarring.quantity}
            cost={filteredEarring.cost}
            image={filteredEarring.image.url}
            colour={filteredEarring.image.color.join(', ').toUpperCase()}
            desc1={filteredEarring.description1}
            desc2={filteredEarring.description2}
            desc3={filteredEarring.description3}
            gender={filteredEarring.image.gender}
          />
        })
      } else {
        return earrings.filter(earring => earring.image.gender.includes('Women')).filter(
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
          coloursList={colorsFilterList(earrings)}
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