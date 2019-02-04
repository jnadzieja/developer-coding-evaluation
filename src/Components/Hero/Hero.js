import React from 'react';
import CardinalLogo from '../../assets/logos/logo-cardinal.png';
import './Hero.css';

function Hero(props) {

  return (
    <div className="bg-img">
    <div className="buffer"></div>
      <img src={CardinalLogo} className="cardinal-logo" alt="Cardinal Logo" />
      <h1 className="tagline">
        Enjoy the proven success of our experience.
      </h1>
    </div>
  )
}

export default Hero;
