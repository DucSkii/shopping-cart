import React, { useState } from 'react'

import Modal from '@material-ui/core/Modal'

import './AddToCart.scss'

const AddToCart = ({ setOpenParent }) => {

  const [ open, setOpen ] = useState(false)

  const closeHandler = () => {
    setOpen(false)
    setOpenParent(false)
  }
  return (
    <div className="addToCart">
      <button className="addToCart-button" onClick={() => setOpen(true)}>Add to cart</button>
      <Modal
        open={open}
        className="addToCart-modal">
        <button className="addToCart-modal-continue" onClick={closeHandler}>Continue shopping</button>
        <button className="addToCart-modal-checkout">Checkout</button>
      </Modal>
    </div>
  )
}

export default AddToCart