import React from 'react';
import FifthThirdImg from '../../assets/images/pic-fifththird.png';
import './FifthThird.css';

function FifthThird(props) {

  return (
    <div className="fifthThird-container">
      <div className="fifthThird-info">
        <h2 className="fifthThird-header">
          Fifth Third Bank
        </h2>
        <h3 className="fifthThird-subtitle">
          MOBILE APP
        </h3>
        <p className="fifthThird-text">
          Reimagine what a mobile banking <br /> experience should be, focusing on the <br /> user rather than the technology.
        </p>
        <button className="fifthThird-button">
          View App
        </button>
      </div>
      <div className="fifthThird-overlay">
        <img src={FifthThirdImg} alt="img" className="fifthThird-img" />
      </div>
    </div>
  )
}

export default FifthThird;
