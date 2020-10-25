import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

import './Favourite.scss'

const Favourite = () => {

  return (
    <div className="favourites">
      <div className="favourites-text">Favourites</div> <FontAwesomeIcon className="favourites-heart" icon={faHeart} />
    </div>
  )
}

export default Favourite