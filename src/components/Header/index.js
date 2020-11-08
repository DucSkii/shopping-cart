import React from 'react'

import SearchBar from './SearchBar/SearchBar'
import Favourite from './Favourite/Favourite'
import Cart from './Cart/Cart'
import Title from './Title/Title'
import StoreFinder from './StoreFinder/StoreFinder'

import './Header.scss'

const Header = () => {
 
  return (
    <div className="header">
      <div className="header-section">
        <Title />
        <SearchBar />
      </div>
      <div className="header-store">
        <StoreFinder />
      </div>
      <div className="header-link">
        <Favourite />
        <div className="header-vertical-divider"></div>
        <Cart />
      </div>
    </div>
  )
}

export default Header