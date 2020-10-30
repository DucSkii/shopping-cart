import React from 'react'

import Navigation from '../../Navigation/Navigation'
import Model from '../../images/websiteModel.jpg'
import Flower from '../../images/flower.png'

import './Home.scss'

const Home = () => {

  return (
    <div className="home-container">
      <Navigation />
      
      <div className="home-title" >Duck</div>
      <div className="home-subTitle" >Watches and Jewellery</div>
      <div className="home-description">
        <div className="home-description-text">Finest Quality</div>
        <div className="home-description-text">Dreamy</div>
        <div className="home-description-text">Just for her</div>
      </div>
      <div className="home-model-wrapper" >
        <img className="home-flower" src={Flower} alt='' />
        <img className="home-model" src={Model} alt='' />
      </div>
    </div>
  )
}

export default Home