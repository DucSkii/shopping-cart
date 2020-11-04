import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import {useStateValue} from '../../../context/StateContext'

import './Cart.scss'

const Cart = () => {

  const [{cartList}, dispatch ] = useStateValue()

  const [ cartCount, setCartCount ] = useState(0)

  useEffect(() => {
    const count = cartList.reduce((amount, item) => {
      return item.quantity + amount
    }, 0)
    setCartCount(count)
  }, [cartList])

  return (
    <Link to='/cart' className="cart-container">
      <div className="cart">
        <div className="cart-text">Cart</div>
        <div className="cart-vertical-divider"></div>
        <div>{cartCount} items</div>
        <i><FontAwesomeIcon icon={faShoppingCart} /></i>
      </div>
    </Link>
  )
}

export default Cart