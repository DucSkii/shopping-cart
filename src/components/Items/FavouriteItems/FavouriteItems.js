import React from 'react'

import './FavouriteItems.scss'

import { useStateValue } from '../../../context/StateContext'
import MyModal from '../../../utils/Tools/MyModal/MyModal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as Heart } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { getFavouritesListIds } from '../../../reducers/stateReducer'

const FavouriteItems = ({...props}) => {

  const [{favouritesList}, dispatch ] = useStateValue()

  const toggleFavourite = () => {
    // This checks if current item is already a favourite
    if(getFavouritesListIds(favouritesList).includes(props.id)) {
      //REMOVE_FROM_FAVOURITES
      dispatch({type: 'delete', item: props})
    }else {
      //ADD_TO_FAVOURITES
      dispatch({type: 'add', item: props})
    }
  }
  
  const changeIcon = () => {
    let icon = faHeart
    if(getFavouritesListIds(favouritesList).includes(props.id)) {
      icon = Heart
    }

    return (
      <div className="items-heart">
        <FontAwesomeIcon icon={icon} onClick={toggleFavourite}/>
      </div>
    )
  }

  return (
    <div className="favouriteItems-container">
      {changeIcon()}
      <MyModal
        id={props.id}
        subTotal={props.subTotal}
        cost={props.cost}
        quantity={props.quantity}
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
          <div style={{ zIndex: '5' }}>{props.name}</div>
          <div style={{ zIndex: '5' }}>£{props.cost}</div>
        </div>
      </MyModal>
      <div className="favouriteItems-gap" />
    </div>
  )
}

export default FavouriteItems