import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

import './Favourite.scss'

const Favourite = () => {

  return (
    <Link to='/favourites' className="favourites-container">
      <div className="favourites">
        <div className="favourites-text">Favourites</div> <FontAwesomeIcon className="favourites-heart" icon={faHeart} />
      </div>
    </Link>
  )
}

export default Favourite