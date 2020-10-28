/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react'

import Modal from '@material-ui/core/Modal'
import Delivery from '../../Layout/Delivery/Delivery'

import './MyModal.scss'

const MyModal = ({ children, cost, name, image, colour, desc1, desc2, desc3 }) => {

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
          <div className="myModal-info">
            <div className="myModal-info-wrapper">
              <div className="myModal-name">{name}</div>
              <div className="myModal-colour">{colour}</div>
              <ul className="myModal-description-wrapper">
                <li className="myModal-description">{desc1}</li>
                <li className="myModal-description">{desc2}</li>
                <li className="myModal-description">{desc3}</li>
              </ul>
              <div className="myModal-cost">£{cost}</div>
            </div>
            <Delivery />
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default MyModal