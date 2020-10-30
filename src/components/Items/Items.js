import React from 'react'

import './Items.scss'

import MyModal from '../../utils/Tools/MyModal/MyModal'

const Items = ({ name, cost, image, index, colour, desc1, desc2, desc3, gender }) => {

  return (
    <div className="items-container">
      <MyModal
        cost={cost}
        name={name}
        image={image}
        index={index}
        colour={colour}
        desc1={desc1}
        desc2={desc2}
        desc3={desc3}
        gender={gender}
      >
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