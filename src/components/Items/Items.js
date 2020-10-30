import React, {useState} from 'react'

import './Items.scss'

import MyModal from '../../utils/Tools/MyModal/MyModal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faHeart as Heart } from '@fortawesome/free-solid-svg-icons'

const Items = ({...props}) => {

  const [ selectFavourite, setSelectFavourite ] = useState(false)

  const toggleFavouriteTrue = () => {
    setSelectFavourite(true)
  }
  const toggleFavouriteFalse = () => {
    setSelectFavourite(false)
  }
  
  const changeIcon = () => {
    if(selectFavourite === false) {
      return (
        <div className="items-heart" onClick={toggleFavouriteTrue}>
          <FontAwesomeIcon icon={faHeart} />
        </div>
      )
    } if(selectFavourite === true) {
      return (
        <div className="items-heart" onClick={toggleFavouriteFalse}>
          <FontAwesomeIcon icon={Heart} />
        </div>
      )
    }
  }

  return (
    <div className="items-container">
      {changeIcon()}
      <MyModal
        cost={props.cost}
        name={props.name}
        image={props.image}
        index={props.index}
        colour={props.colour}
        desc1={props.desc1}
        desc2={props.desc2}
        desc3={props.desc3}
        gender={props.gender}
      >
        <div className="items">
          <div className="items-wrapper">
            <img className="items-image" src={props.image} alt=''/>
          </div>
          <div>{props.name}</div>
          <div>£{props.cost}</div>
        </div>
      </MyModal>
      <div className="items-gap" />
    </div>
  )
}

export default Items