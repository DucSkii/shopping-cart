import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShippingFast, faTruck, faStoreAlt } from '@fortawesome/free-solid-svg-icons'
import {useStateValue} from '../../../context/StateContext'
import {getCartListIds} from '../../../reducers/stateReducer'
import './Delivery.scss'

const Delivery = (props) => {

  const [{cartList}, dispatch ] = useStateValue()

  const setStandard = () => {
    console.log(props)
    if(getCartListIds(cartList).includes(props.id)) {
      return console.log(props.id, 'includes')
    } else {
      console.log(props.id, 'doesnot include')
    }
  }

  return (
    <div className="delivery">
      <div className="delivery-title">Delivery options</div>
      <div className="delivery-boxes">
        <div
          className={(props.selectDelivery === 'standard') ? 'delivery-box-wrapper-selected' : 'delivery-box-wrapper'}
          onClick={setStandard}
        >
          <div className="delivery-box">
            <div className="delivery-box-title">STANDARD</div>
            <FontAwesomeIcon className="delivery-box-icon" icon={faTruck} size="2x" />
            <div className="delivery-price">FREE</div>
          </div>
        </div>

        <div className="delivery-gap" />
        <div
          className={(props.selectDelivery === 'pick-up') ? 'delivery-box-wrapper-selected' : 'delivery-box-wrapper'}
          // onClick={() => setDeliverySelect('pick-up')}
        >
          <div className="delivery-box">
            <div className="delivery-box-title">PICK-UP</div>
            <FontAwesomeIcon className="delivery-box-icon" icon={faStoreAlt} size="2x" />
            <div className="delivery-price">FREE</div>
          </div>
        </div>
        <div className="delivery-gap" />
        <div
          className={(props.selectDelivery === 'pro') ? 'delivery-box-wrapper-selected' : 'delivery-box-wrapper'}
          // onClick={() => setDeliverySelect('pro')}
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