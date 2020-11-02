import React, {useState} from 'react'

import './FavouriteItems.scss'

import { useStateValue } from '../../../context/StateContext'
import MyModal from '../../../utils/Tools/MyModal/MyModal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as Heart } from '@fortawesome/free-solid-svg-icons'

const FavouriteItems = ({...props}) => {

  const [{favouritesList}, dispatch ] = useStateValue()

  const [ selectFavourite, setSelectFavourite ] = useState(true)

  const toggleFavouriteFalse = () => {
    setSelectFavourite(false)
    dispatch({type: 'delete', id: props.id})
  }
  
  const changeIcon = () => {
    return (
      <div className="favouriteItems-heart">
        <FontAwesomeIcon icon={Heart} onClick={toggleFavouriteFalse}/>
      </div>
    )
  }

  return (
    <div className="favouriteItems-container">
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
        <div className="favouriteItems">
          <div className="favouriteItems-wrapper">
            <img className="favouriteItems-image" src={props.image} alt=''/>
          </div>
          <div>{props.name}</div>
          <div>£{props.cost}</div>
        </div>
      </MyModal>
      <div className="favouriteItems-gap" />
    </div>
  )
}

export default FavouriteItems