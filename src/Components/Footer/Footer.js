import React from 'react';
import Twitter from '../../assets/icons/icon-twitter.svg';
import Facebook from '../../assets/icons/icon-facebook.svg';
import GPlus from '../../assets/icons/icon-g+.svg';
import './Footer.css';

function Footer(props) {

  return (
    <div className="footer-container">
      <div className="copywrite">
        © 2016 Cardinal Solutions. All rights reserved.
      </div>
      <div className="sm-container">
        <a href="#">
          <img src={Twitter} alt="Twitter" className="twitter-icon" />
        </a>
        <a href="#">
          <img src={Facebook} alt="Facebook" className="facebook-icon" />
        </a>
        <a href="#">
          <img src={GPlus} alt="Google Plus" className="gplus-icon" />
        </a>
      </div>
    </div>
  )
}

export default Footer;
