import React, { useState } from 'react';
import HomeNav from './components/Nav/HomeNav';
import HomeFooter from './components/Nav/HomeFooter';
import Prediction from './prediction';
import History from './History'; // This will be created in the next step

import './Home.css'
function Homepage() {
  const [activeComponent, setActiveComponent] = useState(''); // Track which component to show

  const renderComponent = () => {
    switch (activeComponent) {
      case 'prediction':
        return <Prediction />;
      case 'history':
        return <History />;
      default:
        return <p>Select an option from the left.</p>;
    }
  };

  return (
    <div className="Home">
      <HomeNav />
      <div className="layout">
        <div className="sidebar">
          <button onClick={() => setActiveComponent('prediction')}>Predict</button>
          <button onClick={() => setActiveComponent('history')}>History</button>
        </div>
        <div className="content">
          {renderComponent()}
        </div>
      </div>
      <HomeFooter />
    </div>
  );
}

export default Homepage;
