/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react'

import Modal from '@material-ui/core/Modal'

import './MyModal.scss'

const MyModal = ({ children, cost, name, image }) => {

  const [ open, setOpen ] = useState(false)

  const handleClose = () => setOpen(false)

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
          <img className="myModal-image" src={image} />
          <div className="myModal-name">{name}</div>
        </div>
      </Modal>
    </div>
  )
}

export default MyModal