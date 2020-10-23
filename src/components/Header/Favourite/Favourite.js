import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

import './Favourite.css'

const Favourite = () => {

  return (
    <div className="favourites">
      <div className="favourites-text">Favourites</div> <FontAwesomeIcon className="favourites-star" icon={faStar} />
    </div>
  )
}

export default Favourite