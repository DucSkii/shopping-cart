import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShippingFast, faTruck, faStoreAlt } from '@fortawesome/free-solid-svg-icons'
import './Delivery.scss'

const Delivery = () => {

  return (
    <div className="delivery">
      <div className="delivery-title">Delivery options</div>
      <div className="delivery-boxes">
        <div className="delivery-box-wrapper">
          <div className="delivery-box">
            <div className="delivery-box-title">STANDARD</div>
            <FontAwesomeIcon className="delivery-box-icon" icon={faTruck} size="2x" />
            <div className="delivery-price">FREE</div>
          </div>
        </div>

        <div className="delivery-gap" />
        <div className="delivery-box-wrapper">
          <div className="delivery-box">
            <div className="delivery-box-title">PICK-UP</div>
            <FontAwesomeIcon className="delivery-box-icon" icon={faStoreAlt} size="2x" />
            <div className="delivery-price">FREE</div>
          </div>
        </div>
        <div className="delivery-gap" />
        <div className="delivery-box-wrapper">
          <div className="delivery-box">
            <div className="delivery-box-title">PRO</div>
            <FontAwesomeIcon className="delivery-box-icon" icon={faShippingFast} size="2x" />
            <div className="delivery-price">£21.99</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Delivery