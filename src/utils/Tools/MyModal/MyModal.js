/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react'

import Modal from '@material-ui/core/Modal'
import Delivery from '../../Layout/Delivery/Delivery'

import './MyModal.scss'

const MyModal = ({ ...props }) => {


  const [ addToCart, setAddToCart ] = useState(false)
  const [ open, setOpen ] = useState(false)
  const [ deliverySelect, setDeliverySelect ] = useState('standard')

  const handleClose = () => {
    setOpen(false)
    setDeliverySelect('standard')
  }

  const renderCTA = () => {
    if (!addToCart) {
      return null
    }
    return (
      <>
        <button
          className="addToCart-modal-continue"
          onClick={() => {
            setOpen(false)
            setAddToCart(false)
          }}
        >
          Continue shopping
        </button>
        <button className="addToCart-modal-checkout">Checkout</button>
      </>
    )
  }

  const renderItemDetails = () => {
    if (addToCart) {
      return null
    }
    return (
      <>
        <img className="myModal-image" src={props.image} />
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
          {/* <AddToCart  /> */}
          <button onClick={() => setAddToCart(true)}>Add to cart</button>
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