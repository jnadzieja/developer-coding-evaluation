import React from 'react';
import CHHNImg from '../../assets/images/pic-chhn.png';
import './CHHN.css';

function CHHN(props) {

  return (
    <div className="chhn-container">
      <div className="chhn-overlay">
        <img src={CHHNImg} alt="overlay-img" className="chhn-img" />
      </div>
      <div className="chhn-info">
        <h2 className="chhn-header">
          The Christ Hospital <br /> Health Network
        </h2>
        <h3 className="chhn-subtitle">
          DIGITAL PLATFORM
        </h3>
        <p className="chhn-text">
          A digital front door to the finest patient <br /> experiences.
        </p>
        <button className="chhn-button">
          Learn More
        </button>
      </div>
    </div>
  )
}

export default CHHN;
