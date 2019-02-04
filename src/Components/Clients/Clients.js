import React from 'react';
import fifthThirdLogo from '../../assets/logos/logo-fifththird.png';
import chhnLogo from '../../assets/logos/logo-chhn.png';
import chsLogo from '../../assets/logos/logo-chs.png';
import skanskaLogo from '../../assets/logos/logo-skanska.png';
import rackroomLogo from '../../assets/logos/logo-rackroom.png';
import pngLogo from '../../assets/logos/logo-p&g.png';
import './Clients.css';

function Clients(props) {

  return (
    <div className="clients-container">
      <div className="clients-box">
        <h2 className="clients-header">
          Our Clients
        </h2>
        <p className="clients-text">
          Over the years, our team has had the distinction of working with a
          variety of brands in different industries. Here is a short list of
          some of the names we have worked with.
        </p>
      </div>
      <div className="logo-box">
        <img src={fifthThirdLogo} className="fifthThird-logo" alt="logo" />
      </div>
      <div className="logo-box">
        <img src={chhnLogo} className="chhn-logo" alt="logo" />
      </div>
      <div className="logo-box">
        <img src={chsLogo} className="chs-logo" alt="logo" />
      </div>
      <div className="logo-box">
        <img src={skanskaLogo} className="skanska-logo" alt="logo" />
      </div>
      <div className="logo-box">
        <img src={rackroomLogo} className="client-logos" alt="logo" />
      </div>
      <div className="logo-box">
        <img src={pngLogo} className="client-logos" alt="logo" />
      </div>
    </div>
  )
}

export default Clients;
