import React from 'react'
import { Link } from 'react-router-dom'
import './Title.scss'

const Title = () => {

  return (
    <Link to='/' className="title">
      <div>Duck</div>
    </Link>
  )
}

export default Title