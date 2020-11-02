import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import {useStateValue} from '../../../context/StateContext'

import './Cart.scss'

const Cart = () => {

  const [{cartList}, dispatch ] = useStateValue()

  return (
    <Link to='/cart' className="cart-container">
      <div className="cart">
        <div className="cart-text">Cart</div>
        <div className="cart-vertical-divider"></div>
        <div>{cartList.length} items</div>
        <i><FontAwesomeIcon icon={faShoppingCart} /></i>
      </div>
    </Link>
  )
}

export default Cart