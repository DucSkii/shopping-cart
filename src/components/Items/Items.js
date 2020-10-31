import React, {useState} from 'react'

import './Items.scss'

import { useStateValue } from '../../context/StateContext'
import MyModal from '../../utils/Tools/MyModal/MyModal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faHeart as Heart } from '@fortawesome/free-solid-svg-icons'

const Items = ({...props}) => {

  const [{favouritesList}, dispatch ] = useStateValue()

  const [ selectFavourite, setSelectFavourite ] = useState(false)

  const toggleFavouriteTrue = () => {
    setSelectFavourite(true)
    dispatch({type: 'add', item: props})
    console.log(favouritesList, 'favouriteslist')
  }
  const toggleFavouriteFalse = () => {
    setSelectFavourite(false)
    dispatch({type: 'delete', id: props.id})
  }
  
  const changeIcon = () => {
    if(selectFavourite === false) {
      return (
        <div className="items-heart">
          <FontAwesomeIcon icon={faHeart} onClick={toggleFavouriteTrue}/>
        </div>
      )
    } if(selectFavourite === true) {
      return (
        <div className="items-heart">
          <FontAwesomeIcon icon={Heart} onClick={toggleFavouriteFalse}/>
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