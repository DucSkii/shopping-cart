import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

import './Favourite.scss'

const Favourite = () => {

  return (
    <a className="favourites" href='/favourites' >
      <div className="favourites-text">Favourites</div> <FontAwesomeIcon className="favourites-heart" icon={faHeart} />
    </a>
  )
}

export default Favourite