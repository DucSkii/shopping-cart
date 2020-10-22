import React from 'react'

import SearchBar from '../SearchBar/SearchBar'
import Favourite from '../Favourite/Favourite'
import Cart from '../Cart/Cart'

import './Header.css'

const Header = () => {
  return (
    <div>
      <SearchBar />
      <Favourite />
      <Cart />
    </div>
  )
}

export default Header