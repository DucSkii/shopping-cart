/* eslint-disable jsx-a11y/alt-text */
import React from 'react'

import './Items.scss'

const Items = ({ name, cost, image }) => {

  return (
    <div className="items">
      <div>
        <img className="items-image" src={image} />
        <div>{name}</div>
        <div>£{cost}</div>
      </div>
    </div>
  )
}

export default Items