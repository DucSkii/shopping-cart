import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons'
import Modal from '@material-ui/core/Modal'
import Delivery from '../../Layout/Delivery/Delivery'
import { Link } from 'react-router-dom'
import { useStateValue } from '../../../context/StateContext'

import './MyModal.scss'

const MyModal = ({ ...props }) => {

  const [ addToCart, setAddToCart ] = useState(false)
  const [ open, setOpen ] = useState(false)
  const [ deliverySelect, setDeliverySelect ] = useState('standard')
  const [{cartList}, dispatch ] = useStateValue()

  const handleClose = () => {
    setOpen(false)
    setDeliverySelect('standard')
    setAddToCart(false)
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
      dispatch({type: 'add-cart', item: props})
      console.log(cartList, 'cartList')
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
          <Delivery deliverySelect={deliverySelect} setDeliverySelect={setDeliverySelect} />
          <button className="myModal-cart" onClick={addCart}>Add to cart</button>
        </div>
      </>
    )
  }

  return (
    <div className="myModal-container">
      <button className="myModal-button" type="button" onClick={() => setOpen(true)}>
        {props.children}
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