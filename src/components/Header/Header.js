import React from 'react'

import SearchBar from './SearchBar/SearchBar'
import Favourite from './Favourite/Favourite'
import Cart from './Cart/Cart'
import StoreFinder from './StoreFinder/StoreFinder'

import './Header.css'

const Header = () => {
  return (
    <div className="header">
      <div className="header-section">
        <SearchBar />
        <StoreFinder />
      </div>
      <div className="header-link">
        <Favourite />
        <Cart />
      </div>
    </div>
  )
}

export default Header