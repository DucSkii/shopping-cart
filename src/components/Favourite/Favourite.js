import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

import './Favourite.css'

const Favourite = () => {

  return (
    <div>
      Favourites <FontAwesomeIcon icon={faStar} />
    </div>
  )
}

export default Favourite