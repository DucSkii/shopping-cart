import React, { useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShippingFast, faTruck, faStoreAlt } from '@fortawesome/free-solid-svg-icons'
import {useStateValue} from '../../../context/StateContext'
import {getCartListIds} from '../../../reducers/stateReducer'
import './Delivery.scss'

const Delivery = (props) => {

  const [{cartList}, dispatch ] = useStateValue()

  const updateDeliveryType = type => {
    if(props.isModal) {
      props.setDelivery(type)
    } else if(getCartListIds(cartList).includes(props.id)) {
      dispatch({type: 'STANDARD_INCLUDES', item: {...props, selectedDelivery: type}})
    }
  }

  return (
    <div className="delivery">
      <div className="delivery-title">Delivery options</div>
      <div className="delivery-boxes">
        <div
          className={(props.selectedDelivery === 'standard') ? 'delivery-box-wrapper-selected' : 'delivery-box-wrapper'}
          onClick={() => updateDeliveryType('standard')}
        >
          <div className="delivery-box">
            <div className="delivery-box-title">STANDARD</div>
            <FontAwesomeIcon className="delivery-box-icon" icon={faTruck} size="2x" />
            <div className="delivery-price">FREE</div>
          </div>
        </div>

        <div className="delivery-gap" />
        <div
          className={(props.selectedDelivery === 'pick-up') ? 'delivery-box-wrapper-selected' : 'delivery-box-wrapper'}
          onClick={() => updateDeliveryType('pick-up')}
        >
          <div className="delivery-box">
            <div className="delivery-box-title">PICK-UP</div>
            <FontAwesomeIcon className="delivery-box-icon" icon={faStoreAlt} size="2x" />
            <div className="delivery-price">FREE</div>
          </div>
        </div>
        <div className="delivery-gap" />
        <div
          className={(props.selectedDelivery === 'pro') ? 'delivery-box-wrapper-selected' : 'delivery-box-wrapper'}
          onClick={() => updateDeliveryType('pro')}
        >
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