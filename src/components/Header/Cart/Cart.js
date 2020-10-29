import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import './Cart.scss'

const Cart = () => {

  return (
    <a className="cart" href='/cart' >
      <div className="cart-text">Cart</div>
      <div className="cart-vertical-divider"></div>
      <div>3 items</div>
      <i><FontAwesomeIcon icon={faShoppingCart} /></i>
    </a>
  )
}

export default Cart