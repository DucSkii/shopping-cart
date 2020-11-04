import React, {useState} from 'react'
import './CartItems.scss'
import Delivery from '../../../utils/Layout/Delivery/Delivery'
import {useStateValue} from '../../../context/StateContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faHeart as Heart, faSortUp, faCaretDown } from '@fortawesome/free-solid-svg-icons'
import Modal from '@material-ui/core/Modal'
import { getFavouritesListIds } from '../../../reducers/stateReducer'

const CartItems = () => {

  const [{cartList, favouritesList}, dispatch ] = useStateValue()
  const [ open, setOpen ] = useState(false)
  const [ clickedItem, setClickedItem ] = useState()

  const closeHandler = () => setOpen(false)

  const removeItem = () => {
    //remove item

    //reset clickedItem
    setOpen(false)
    dispatch({type: 'delete-cart', id: clickedItem.id})
  }
      
  const renderModalButtons = () => {
    return (
      <>
        <button className="cartItems-right-options-remove-modal-button-no" onClick={closeHandler}>No</button>
        <button className="cartItems-right-options-remove-modal-button-yes" onClick={removeItem}>Yes</button>
      </>
    )
  }

  const renderCartItems = () => {

    const renderFavouriteToggle = (item) => {
      // if (item.favourite === false) {
      //   return (
      //     <>
      //       <FontAwesomeIcon icon={faHeart} className='cartItems-right-options-favourite-icon' />
      //       Favourite
      //     </>
      //   )
      // } if (item.favourite === true) {
      //   return (
      //     <>
      //       <FontAwesomeIcon icon={Heart} className='cartItems-right-options-favourite-icon' />
      //       Favourite
      //     </>
      //   )
      // }
      let icon = faHeart
      
      if(getFavouritesListIds(favouritesList).includes(item.id)) {
        icon = Heart
      }

      return (
        <>
          <FontAwesomeIcon icon={icon} className='cartItems-right-options-favourite-icon'/>
          Favourite
        </>
      )
    }

    const favouriteToggle = (item) => {
      if(getFavouritesListIds(favouritesList).includes(item.id)) {
        //REMOVE_FROM_FAVOURITES
        dispatch({type: 'delete', item})
      }else {
        //ADD_TO_FAVOURITES
        dispatch({type: 'add', item})
      }
    }

    const removeItemModal = (item) => {
      setClickedItem(item)
      setOpen(true)
    }
    
    const itemQuantityIncrement = (item) => {
      const newQuantity = item.quantity + 1
      dispatch({type: 'CHANGE_QUANTITY', item, quantity: newQuantity})
    }

    const itemQuantityDecrement = (item) => {
      if(item.quantity === 1) {
        return null
      } else {
        const newQuantity = item.quantity - 1
        dispatch({type: 'CHANGE_QUANTITY', item, quantity: newQuantity})
      }
    }

    const itemSubTotal = (item) => {
      if(item.selectedDelivery === 'pro') {
        return (item.cost * item.quantity) + 50
      } else {
        return (item.cost * item.quantity)
      }
    }

    return cartList.map((item, index) => {
      // fix delivery selector
      return (
        <div key={index}>
          <div className='cartItems'>
            <div className='cartItems-left'>
              <div className='cartItems-left-image-container'>
                <img src={item.image} className="cartItems-left-image"/>
              </div>
              <div className="cartItems-left-quantity-container">
                <div className='cartItems-left-quantity'>{item.quantity} </div>
                <div className="cartItems-left-quantity-buttons">
                  <button className="cartItems-left-quantity-buttons-button-up" onClick={() => itemQuantityIncrement(item)}><FontAwesomeIcon icon={faSortUp} /></button>
                  <button className="cartItems-left-quantity-buttons-button-down" onClick={() => itemQuantityDecrement(item)}><FontAwesomeIcon icon={faCaretDown} /></button>
                </div>
              </div>
            </div>
            <div className='cartItems-right'>
              <div className='cartItems-right-name'>{item.name}</div>
              <div className='cartItems-right-delivery'>
                <Delivery
                  selectedDelivery={item.selectedDelivery}
                  id={item.id}
                  cost={item.cost}
                  name={item.name}
                  image={item.image}
                  index={item.index}
                  colour={item.colour}
                  desc1={item.desc1}
                  desc2={item.desc2}
                  desc3={item.desc3}
                  gender={item.gender}
                />
              </div>
              <div className='cartItems-right-options'>
                <div className='cartItems-right-options-favourite' onClick={() => favouriteToggle(item)}>
                  {renderFavouriteToggle(item)}
                </div>
                <div className='vertical-divider'/>
                <div className='cartItems-right-options-remove' onClick={() => removeItemModal(item)}>Remove</div>
              </div>
            </div>
            <div className="cartItems-cost-container">
              <div className='cartItems-cost'>Item price: £ {item.cost}</div>
              <div className="cartItems-cost-quantity">Quantity: {item.quantity}</div>
              <div className="cartItems-cost-delivery">Delivery: {(item.selectedDelivery === 'pro') ? '£21.99' : 'Free'}</div>
              <div className="cartItems-cost-subTotal-title">SubTotal</div>
              <div className="cartItems-cost-subTotal-divider" />
              <div className="cartItems-cost-subTotal">£ {itemSubTotal(item)}</div>
            </div>
          </div>
        </div>
      )
    })
  }
  return (
    <div className='cartItems-container'>
      {renderCartItems()}
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
              {renderModalButtons()}
            </div>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default CartItems