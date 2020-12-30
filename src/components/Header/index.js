import React, { useState, useEffect } from 'react'
import { IconButton, Input } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faCircle, faSearch, faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { useStateValue } from '../../context/StateContext'

import './Header.scss'

const Header = () => {

  const [{ cartList }, dispatch] = useStateValue()
  const [{ searchBar }, searchDispatch] = useStateValue()
  const [cartCount, setCartCount] = useState(0)
  const [text, setText] = useState('')

  useEffect(() => {
    const count = cartList.reduce((amount, item) => {
      return item.quantity + amount
    }, 0)
    setCartCount(count)
  }, [cartList])

  useEffect(() => {
    searchDispatch({ type: 'SEARCH_BAR', text: text })
  }, [text])

  const getText = (e) => {
    return setText(e.target.value)
  }

  return (
    <div className="header">
      <Link to='/' style={{ textDecoration: 'none', color: '#ffffff' }}>
        <div className="header-title">Duck</div>
      </Link>
      <div className="header-searchBar">
        <Input placeholder="Search Item..."
          style={{
            width: '90%',
            marginLeft: '3%',
          }}
          onChange={(e) => getText(e)}
        />
        <IconButton>
          <FontAwesomeIcon icon={faSearch} />
        </IconButton>
      </div>
      <div className="header-storeFinder">
        <FontAwesomeIcon icon={faMapMarkerAlt} size='lg' />
        <div className="header-storeFinder-desc">
          You're shopping <br /> <b>Kidbrooke</b> <br /> <FontAwesomeIcon icon={faCircle} size='xs' /> <b>OPEN</b> until 9pm
        </div>
        <div className="header-vertical-divider" style={{ margin: '0px 8px', height: '80%' }} />
        <div className="header-storeFinder-address">
          Delivering <br /> To <br /> Kidbrooke
        </div>
      </div>
      <div className="header-navigation">
        <Link to='/favourites' style={{ textDecoration: 'none', color: '#ffffff', height: '100%' }}>
          <div className="header-navigation-button">
            Favourites <FontAwesomeIcon icon={faHeart} style={{ marginLeft: '5px' }} />
          </div>
        </Link>
        <div className="header-vertical-divider" style={{ margin: '0px 8px', height: '80%' }} />
        <Link to='/cart' style={{ textDecoration: 'none', color: '#ffffff', height: '100%' }}>
          <div className="header-navigation-button">
            Cart | {cartCount} items <FontAwesomeIcon icon={faHeart} style={{ marginLeft: '5px' }} />
          </div>
        </Link>
      </div>
    </div>
    // <div className="header">
    //   <div className="header-section">
    //     <Title />
    //     <SearchBar />
    //   </div>
    //   <div className="header-store">
    //     <StoreFinder />
    //   </div>
    //   <div className="header-link">
    //     <Favourite />
    //     <div className="header-vertical-divider"></div>
    //     <Cart />
    //   </div>
    // </div>
  )
}

export default Header