import React, {useState, useEffect} from 'react'

import './Items.scss'

import { useStateValue } from '../../context/StateContext'
import MyModal from '../../utils/Tools/MyModal/MyModal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faHeart as Heart } from '@fortawesome/free-solid-svg-icons'
import { getFavouritesListIds } from '../../reducers/stateReducer'

const Items = ({...props}) => {
  const [{favouritesList}, dispatch ] = useStateValue()

  const [ selectFavourite, setSelectFavourite ] = useState(false)
  
  //watch - favourites - false
  //getid [1,2,3,4]
  //render the heart icon if it exists

  const toggleFavourite = () => {
    // favouritesList = [id]
    // watchData
    // watches.filter(item => favouritesListIds.includes(item.id))
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
    <div className="items-container">
      {changeIcon()}
      <MyModal
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