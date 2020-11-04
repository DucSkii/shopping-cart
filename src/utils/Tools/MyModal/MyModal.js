import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons'
import Modal from '@material-ui/core/Modal'
import Delivery from '../../Layout/Delivery/Delivery'
import { Link } from 'react-router-dom'
import { useStateValue } from '../../../context/StateContext'
import {getCartListIds} from '../../../reducers/stateReducer'

import './MyModal.scss'

const MyModal = ({ children, ...props }) => {

  const [ addToCart, setAddToCart ] = useState(false)
  const [ open, setOpen ] = useState(false)
  const [{cartList}, dispatch ] = useStateValue()
  const [ delivery, setDelivery ] = useState('standard')

  const handleClose = () => {
    setOpen(false)
    setAddToCart(false)
    setDelivery('standard')
  }

  const renderCTA = () => {
    if (!addToCart) {
      return null
    }

    return (
      <div className="addToCart-modal">
        <div className="addToCart-modal-message">
          <FontAwesomeIcon icon={faCheckCircle} className="addToCart-modal-message-icon" size='5x'/>
          <div className="addToCart-modal-message-text">
            This item has been added to your cart
          </div>
        </div>
        <div className="addToCart-modal-button">
          <button
            className="addToCart-modal-button-continue"
            onClick={() => {
              setOpen(false)
              setAddToCart(false)
            }}
          >
            Continue shopping
          </button>
          <Link to='/cart' >
            <button className="addToCart-modal-button-checkout">Checkout</button>
          </Link>
        </div>
      </div>
    )
  }

  const renderItemDetails = () => {
    const addCart = () => {
      setAddToCart(true)
      if (getCartListIds(cartList).includes(props.id)) {
        const test = cartList.find(item => item.id === props.id)
        dispatch({type: 'add-cart-quantity', item: {...test, selectedDelivery: delivery, quantity: test.quantity + 1}})
      } else {
        dispatch({type: 'add-cart', item: {...props, selectedDelivery: delivery}})
      }
    }

    if (addToCart) {
      return null
    }

    return (
      <>
        <img className="myModal-image" src={props.image} alt='' />
        <div className="myModal-info">
          <div className="myModal-info-wrapper">
            <div className="myModal-name">{props.name}</div>
            <div className="myModal-gender">{props.gender}</div>
            <div className="myModal-colour">{props.colour}</div>
            <ul className="myModal-description-wrapper">
              <li className="myModal-description">{props.desc1}</li>
              <li className="myModal-description">{props.desc2}</li>
              <li className="myModal-description">{props.desc3}</li>
            </ul>
            <div className="myModal-cost">£{props.cost}</div>
          </div>
          <Delivery
            selectedDelivery={delivery}
            setDelivery={setDelivery}
            isModal
            id={props.id}
            subTotal={props.subTotal}
            cost={props.cost}
            name={props.name}
            image={props.image}
            index={props.index}
            colour={props.colour}
            desc1={props.desc1}
            desc2={props.desc2}
            desc3={props.desc3}
            gender={props.gender}
          />
          <button className="myModal-cart" onClick={addCart}>Add to cart</button>
        </div>
      </>
    )
  }

  return (
    <div className="myModal-container">
      <button className="myModal-button" type="button" onClick={() => setOpen(true)}>
        {children}
      </button>
      <Modal
        className="myModal"
        open={open}
        onClose={handleClose}
      >
        <div className="myModal-wrapper">
          {renderItemDetails()}
          {renderCTA()}
        </div>
      </Modal>
    </div>
  )
}

export default MyModal