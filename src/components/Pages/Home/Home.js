import React from 'react'

import Navigation from '../../Navigation/Navigation'
import Watch from '../../images/watch.jpg'
import Watch2 from '../../images/watch2.jpg'
import Necklace from '../../images/necklace.jpg'
import Flower from '../../images/flower.png'
import { Fade } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'

import './Home.scss'

const Home = () => {

  const fadeImages = [
    Watch2,
    Necklace,
    Watch,
  ]

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
        <div className="home-watch">
          <Fade
            arrows={false}
          >
            <div className="each-fade">
              <img src={fadeImages[0]} alt="" />
            </div>
            <div className="each-fade">
              <img src={fadeImages[1]} alt="" />
            </div>
            <div className="each-fade">
              <img src={fadeImages[2]} alt="" />
            </div>
          </Fade>
        </div>
      </div>
    </div>
  )
}

export default Home