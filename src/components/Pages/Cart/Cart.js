import React from 'react'
import Navigation from '../../Navigation/Navigation'
import CartItems from '../../Items/CartItems/CartItems'
import {useStateValue} from '../../../context/StateContext'
import './Cart.scss'

const Cart = () => {

  const [{cartList}, dispatch ] = useStateValue()

  return (
    <div className="cartPage-container">
      <Navigation />
      <div className="cartPage">
        <div className="cartPage-cart">
          <div className="cartPage-title">Your Cart ({cartList.length})</div>
          <div className="cartPage-title-line"/>
          <CartItems />
        </div>
        <div className="cartPage-subTotal">
          SUBTOTAL
        </div>
      </div>
    </div>
  )
}

export default Cart