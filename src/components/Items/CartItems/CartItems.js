import React, {useState} from 'react'
import './CartItems.scss'
import Delivery from '../../../utils/Layout/Delivery/Delivery'
import {useStateValue} from '../../../context/StateContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faHeart as Heart } from '@fortawesome/free-solid-svg-icons'
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
      let isSelectFavourite = !getFavouritesListIds(favouritesList).includes(item.id)
      // if(getFavouritesListIds(favouritesList).includes(item.id)) {
      //   isSelectFavourite = false
      // }
      dispatch({type: 'add', item: {...item, selectFavourite: isSelectFavourite}})
    }

    const removeItemModal = (item) => {
      setClickedItem(item)
      setOpen(true)
    }

    return cartList.map((item, index) => {
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
                <div className='cartItems-right-options-favourite' onClick={() => favouriteToggle(item)}>
                  {renderFavouriteToggle(item)}
                </div>
                <div className='vertical-divider'/>
                <div className='cartItems-right-options-remove' onClick={() => removeItemModal(item)}>Remove</div>
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