import React from 'react';
import Iconbi from '../../assets/icons/icon-bi.svg';
import IconAppDev from '../../assets/icons/icon-appdev.svg';
import Iconba from '../../assets/icons/icon-ba.svg';
import './InfoPanels.css';

function InfoPanels(props) {

  return (
    <div className="info-container">
      <div className="panels">
        <img src={Iconbi} className="icons" alt="img" />
        <h2 className="panel-headers">
          Business Intelligence
        </h2>
        <p className="panel-text">
          We use technology to turn data into knowldge that can help you manage and moitor your business, from anywhere.
        </p>
      </div>
      <div className="panels">
      <img src={IconAppDev} className="icons" alt="img" />
        <h2 className="panel-headers">App Development</h2>
        <p className="panel-text">
          Our mobile specialists work to create rich, easy-to-use consumer enterprise experiences for iOS, and Android.
        </p>
      </div>
      <div className="panels">
      <img src={Iconba} className="icons" alt="img" />
        <h2 className="panel-headers">

          Business Analysis
        </h2>
        <p className="panel-text">
          Great Strategy begins with listening. We learn about businesses from the inside out, and then propose improvements.
        </p>
      </div>
    </div>
  )
}

export default InfoPanels;
