import React from 'react'
import { Link } from 'react-router-dom'

import './Navigation.scss'

const Navigation = () => {

  return (
    <div className="navigation">
      <div className="vertical-divider"></div>
      <Link to='/watches' className="nav-button" >
        <div>Watches</div>
      </Link>
      <div className="vertical-divider" ></div>
      <Link to='/necklaces' className="nav-button">
        <div >Necklaces</div>
      </Link>
      <div className="vertical-divider"></div>
      <Link to='/earrings' className="nav-button">
        <div >Earrings</div>
      </Link>
      <div className="vertical-divider"></div>
    </div>
  )
}

export default Navigation