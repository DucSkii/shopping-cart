import React from 'react'

import './Navigation.scss'

const Navigation = () => {

  return (
    <div className="navigation">
      <div className="vertical-divider"></div>
      <a className="nav-button" href='/watches'>Watches</a>
      <div className="vertical-divider"></div>
      <a className="nav-button" href='/necklaces'>Necklaces</a>
      <div className="vertical-divider"></div>
      <a className="nav-button" href='/earrings'>Earrings</a>
      <div className="vertical-divider"></div>
    </div>
  )
}

export default Navigation