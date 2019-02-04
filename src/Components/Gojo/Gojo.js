import React from 'react';
import GojoImg from '../../assets/images/pic-gojo.png';
import './Gojo.css';

function Gojo(props) {

  return (
    <div>
      <div className="gojo-container">
        <div className="overlay-container">
          <img src={GojoImg} alt="img" className="overlay-img" />
        </div>
        <div className="gojo-info">
          <h2 className="gojo-header">
            Gojo
          </h2>
          <h3 className="gojo-subtitle">
            THE INTERNET OF THINGS
          </h3>
          <p className="gojo-text">
            Reducing the spread of hospital infections with the Internet of Things.
          </p>
          <button className="gojo-button">
            Learn More
          </button>
        </div>
      </div>
    </div>
  )
}

export default Gojo;
