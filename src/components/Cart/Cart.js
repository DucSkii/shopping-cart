import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import './Cart.css'

const Cart = () => {

  return (
    <div>
      <div>Cart</div>
      <div>3 items</div>
      <i><FontAwesomeIcon icon={faShoppingCart} /></i>
    </div>
  )
}

export default Cart