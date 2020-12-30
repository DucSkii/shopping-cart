import React, { useEffect, useState } from 'react'
import Navigation from '../../Navigation/Navigation'
import CartItems from '../../Items/CartItems/CartItems'
import { useStateValue } from '../../../context/StateContext'
import { getCartSubTotal, getCartDeliveryTotal } from '../../../reducers/stateReducer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleUp } from '@fortawesome/free-solid-svg-icons'
import './Cart.scss'

const Cart = () => {

  const [{ cartList }, dispatch] = useStateValue()
  const [showScroll, setShowScroll] = useState(false)
  const [cartCount, setCartCount] = useState(0)

  useEffect(() => {
    const count = cartList.reduce((amount, item) => {
      return item.quantity + amount
    }, 0)
    setCartCount(count)
  }, [cartList])

  const displayDeliveryTotal = (cartList) => {
    if (getCartDeliveryTotal(cartList) === 0) {
      return 'Free'
    } else {
      return (`£${getCartDeliveryTotal(cartList)}`)
    }
  }

  const getSavingsTotal = (cartList) => {
    const getSavings = cartList.reduce((amount, item) => {
      return (((item.cost * 0.1) * item.quantity) + amount)
    }, 0)
    return getSavings
  }

  const getGrandTotal = (cartList) => {
    const grandTotal = ((getCartSubTotal(cartList)) + (getCartDeliveryTotal(cartList))) - (getSavingsTotal(cartList))
    return grandTotal
  }

  const checkScrollTop = () => {
    if (window.pageYOffset > 400) {
      setShowScroll(true)
    } else if (window.pageYOffset <= 400) {
      setShowScroll(false)
    }
  }

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop)
    return () => {
      window.removeEventListener('scroll', checkScrollTop)
    }
  }, [])

  return (
    <>
      <div className="page-scrollIcon" onClick={scrollTop} style={{ display: showScroll ? 'flex' : 'none' }}><FontAwesomeIcon icon={faArrowCircleUp} size='4x' /></div>
      <div className="cartPage-container">
        <Navigation />
        <div className="cartPage">
          <div className="cartPage-cart">
            <div className="cartPage-title">Your Cart ({cartCount})</div>
            <div className="cartPage-title-line" style={{ width: '45vw' }} />
            <CartItems />
          </div>
          <div className="cartPage-total">
            <div className="cartPage-total-title">Your Order</div>
            <div className="cartPage-total-title-line" />
            <div className="cartPage-total-subTotal">
              <div className="cartPage-total-subTotal-text">SubTotal</div>
              <div className="cartPage-total-subTotal-cost">£{getCartSubTotal(cartList)}</div>
            </div>
            <div className="cartPage-total-shipping">
              <div className="cartPage-total-shipping-text">Estimated Shipping</div>
              <div className="cartPage-total-shipping-cost">{displayDeliveryTotal(cartList)}</div>
            </div>
            <div className="cartPage-total-savings">
              <div className="cartPage-total-savings-text">Savings</div>
              <div className="cartPage-total-savings-cost">-£{getSavingsTotal(cartList)}</div>
            </div>
            <div className="cartPage-total-title-line" />
            <div className="cartPage-total-grandTotal">
              <div className="cartPage-total-grandTotal-text">Total</div>
              <div className="cartPage-total-grandTotal-cost">£{getGrandTotal(cartList)}</div>
            </div>
            <div className="cartPage-total-savings-description">
              <div className="cartPage-total-savings-description-normal">You saved</div>
              <div className="cartPage-total-savings-description-bold">10% Off </div>
              <div className="cartPage-total-savings-description-normal">your items</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart