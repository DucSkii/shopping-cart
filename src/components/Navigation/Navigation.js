import React from 'react'

import HomeDecor from './HomeDecor/HomeDecor'
import KitchenWare from './KitchenWare/KitchenWare'
import Furniture from './Furniture/Furniture'

import './Navigation.css'

const Navigation = () => {

  return (
    <div className="navigation">
      <HomeDecor />
      <KitchenWare />
      <Furniture />
    </div>
  )
}

export default Navigation