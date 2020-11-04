import React, {useEffect, useState} from 'react'
import Navigation from '../../Navigation/Navigation'
import CartItems from '../../Items/CartItems/CartItems'
import {useStateValue} from '../../../context/StateContext'
import {getCartTotal} from '../../../reducers/stateReducer'
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
    <div className="cartPage-container">
      <Navigation />
      <div className="cartPage">
        <div className="cartPage-cart">
          <div className="cartPage-title">Your Cart ({cartCount})</div>
          <div className="cartPage-title-line"/>
          <CartItems />
        </div>
        <div className="cartPage-total">
          {getCartTotal(cartList)}
        </div>
      </div>
    </div>
  )
}

export default Cart