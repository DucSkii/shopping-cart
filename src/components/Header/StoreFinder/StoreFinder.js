import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faCircle } from '@fortawesome/free-solid-svg-icons'

import './StoreFinder.css'

const StoreFinder = () => {

  return (
    <div className="storeFinder">
      <div className="storeFinder-info">
        <div className="location-icon"><FontAwesomeIcon icon={faMapMarkerAlt} size="lg" /></div>
        <div className="storeFinder-infoDetail">
          <div className="storeFinder-title">You're shopping</div>
          <div className="storeFinder-location">Kidbrooke</div>
          <div className="open">
            <div className="open-icon"><FontAwesomeIcon icon={faCircle} size="xs" /></div>
            <div className="open-text">OPEN</div>
            <div className="open-time">until 9 pm</div>
          </div>
        </div>
      </div>
      <div className="storeFinder-line">|</div>
      <div className="storeFinder-deliveryWrapper">
        <div className="storeFinder-deliveryContainer">
          <div className="delivering-to">Delivering to</div>
          <div className="storeFinder-address">SE39SB</div>
        </div>
      </div>
    </div>
  )
}

export default StoreFinder