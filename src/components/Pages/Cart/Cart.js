import React, {useEffect} from 'react'
import Navigation from '../../Navigation/Navigation'
import CartItems from '../../Items/CartItems/CartItems'
import {useStateValue} from '../../../context/StateContext'
import './Cart.scss'

const Cart = () => {

  const [{cartList, itemCount}, dispatch ] = useStateValue()
  
  useEffect(() => {
    const totalSum = quantityCount.reduce(
      (previousCount, currentCount) => previousCount + currentCount, 0)
    dispatch({type: 'DISPLAY_COUNT', count: totalSum})
  }, [cartList])
  
  const quantityCount = cartList.map(item => {
    return item.quantity
  })
  return (
    <div className="cartPage-container">
      <Navigation />
      <div className="cartPage">
        <div className="cartPage-cart">
          <div className="cartPage-title">Your Cart ({itemCount})</div>
          <div className="cartPage-title-line"/>
          <CartItems />
        </div>
        <div className="cartPage-total">
          CART TOTAL
        </div>
      </div>
    </div>
  )
}

export default Cart