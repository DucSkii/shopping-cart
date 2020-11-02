import React, {useState} from 'react'
import './CartItems.scss'
import Delivery from '../../../utils/Layout/Delivery/Delivery'
import {useStateValue} from '../../../context/StateContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faHeart as Heart } from '@fortawesome/free-solid-svg-icons'
import Modal from '@material-ui/core/Modal'

const CartItems = () => {

  const [{cartList, favouritesList}, dispatch ] = useStateValue()
  const [ open, setOpen ] = useState(false)

  const closeHandler = () => setOpen(false)
  // console.log(cartList, 'cartListPage')
  // console.log(favouritesList, 'favouriteList')

  const renderCartItems = () => {
    return cartList.map((item, index) => {

      const renderFavouriteToggle = () => {
        if (item.favourite === false) {
          return (
            <>
              <FontAwesomeIcon icon={faHeart} className='cartItems-right-options-favourite-icon' />
              Favourite
            </>
          )
        } if (item.favourite === true) {
          return (
            <>
              <FontAwesomeIcon icon={Heart} className='cartItems-right-options-favourite-icon' />
              Favourite
            </>
          )
        }
      }

      const favouriteToggle = () => {
        if (item.favourite) {
          item.favourite = false
        }
        if (!item.favourite) {
          item.favourite = true
        }
      }
      // fix favourites toggle
      const removeItem = () => {
        setOpen(false)
        console.log(item.id, 'item id')
        console.log(item, 'item')
        // dispatch({type: 'delete-cart', id: item.id})
      }

      const removeItemModal = () => {
        setOpen(true)
      }

      const renderButton = () => {
        return (
          <>
            <button className="cartItems-right-options-remove-modal-button-no" onClick={closeHandler}>No</button>
            <button className="cartItems-right-options-remove-modal-button-yes" onClick={removeItem}>Yes</button>
          </>
        )
      }
      // fix delivery selector
      return (
        <div key={index}>
          <div className='cartItems'>
            <div className='cartItems-left'>
              <div className='cartItems-left-image'>
                <img src={item.image}/>
              </div>
              <div className='cartItems-left-quantity'>
                quantity
              </div>
            </div>
            <div className='cartItems-right'>
              <div className='cartItems-right-name'>{item.name}</div>
              <div className='cartItems-right-delivery'>
                <Delivery deliverySelect={item.deliverySelect}/>
              </div>
              <div className='cartItems-right-options'>
                <div className='cartItems-right-options-favourite' onClick={favouriteToggle}>
                  {renderFavouriteToggle()}
                </div>
                <div className='vertical-divider'/>
                <div className='cartItems-right-options-remove' onClick={removeItemModal}>Remove</div>
                <Modal
                  open={open}
                  onClose={closeHandler}
                >
                  <div className="cartItems-right-options-remove-modal-container">
                    <div className="cartItems-right-options-remove-modal">
                      <div className="cartItems-right-options-remove-modal-text">
                        Are you sure you want to remove this item?
                      </div>
                      <div className="cartItems-right-options-remove-modal-button-container">
                        {renderButton()}
                      </div>
                    </div>
                  </div>
                </Modal>
              </div>
            </div>
            <div className='cartItems-cost'>£{item.cost}</div>
          </div>
        </div>
      )
    })
  }
  return (
    <div className='cartItems-container'>
      {renderCartItems()}
    </div>
  )
}

export default CartItems