import React, { Component } from 'react';
import Hero from './Components/Hero/Hero.js';
import InfoPanels from './Components/InfoPanels/InfoPanels.js';
import Clients from './Components/Clients/Clients.js';
import Gojo from './Components/Gojo/Gojo.js';
import FifthThird from './Components/FifthThird/FifthThird.js';
import CHHN from './Components/CHHN/CHHN.js';
import Contact from './Components/Contact/Contact.js';
import Footer from './Components/Footer/Footer.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Hero />
        <InfoPanels />
        <Clients />
        <Gojo />
        <FifthThird />
        <CHHN />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
