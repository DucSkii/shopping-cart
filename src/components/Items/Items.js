/* eslint-disable jsx-a11y/alt-text */
import React from 'react'

import './Items.scss'

import MyModal from '../../utils/Tools/MyModal/MyModal'

const Items = ({ name, cost, image, index }) => {

  return (
    <div className="items-container">
      <MyModal cost={cost} name={name} image={image} index={index}>
        <div className="items">
          <div className="items-wrapper">
            <img className="items-image" src={image} />
          </div>
          <div>{name}</div>
          <div>£{cost}</div>
        </div>
      </MyModal>
      <div className="items-gap" />
    </div>
  )
}

export default Items