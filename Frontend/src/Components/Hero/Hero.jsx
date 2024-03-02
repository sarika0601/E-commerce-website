import React from 'react'
import  './Hero.css';
import Hand_icon from '../ImagesFolder/hand_icon.png';
import Arrow_icon from '../ImagesFolder/arrow.png';
import Hero_image  from '../ImagesFolder/hero_image.png';


const Hero = () => {
  return (
    <div className='hero'>
    <div className='hero-left'>
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
        <div className='hand-hand-icon'>
            <p>New</p>
            <img src={Hand_icon} alt="" />
        </div>
        <p>Collections </p>
        <p>For Every One</p>
    </div>
     <div className="hero-latest-btn">
        <div>Latest Collection</div>
          <img src={Arrow_icon} alt="" />
     </div>
     </div>
     <div className="hero-right">
        <img src={Hero_image} alt="" />
     </div>
    </div>

  )
}

export default Hero;