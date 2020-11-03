import React, {useState} from 'react'

import './FavouriteItems.scss'

import { useStateValue } from '../../../context/StateContext'
import MyModal from '../../../utils/Tools/MyModal/MyModal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as Heart } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { getFavouritesListIds } from '../../../reducers/stateReducer'

const FavouriteItems = ({...props}) => {

  const [{favouritesList}, dispatch ] = useStateValue()

  const [ selectFavourite, setSelectFavourite ] = useState(true)

  const toggleFavourite = () => {
    setSelectFavourite(true)
    let isSelectFavourite = true
    if(getFavouritesListIds(favouritesList).includes(props.id)) {
      isSelectFavourite = false
    }
    dispatch({type: 'add', item: {...props, selectFavourite: isSelectFavourite}})
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
        selectFavourite={selectFavourite}
        id={props.id}
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