import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './prediction.css';
import { useNavigate } from 'react-router-dom';


const Prediction = () => {
  const [domesticData, setDomesticData] = useState([]);
  const [internationalData, setInternationalData] = useState([]);
  const [trainData, setTrainData] = useState([]);
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [mode, setMode] = useState('flight');
  const [flightType, setFlightType] = useState('domestic');
  const [results, setResults] = useState([]);
  const [selectedDate, setSelectedDate] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const flightResult = await axios.get('/flight_data_large.json');
        setDomesticData(flightResult.data.flights.domestic);
        setInternationalData(flightResult.data.flights.international);
      } catch (error) {
        console.error('Error fetching flight data:', error);
      }

      try {
        const trainResult = await axios.get('/train_data_large.json');
        setTrainData(trainResult.data.train);
      } catch (error) {
        console.error('Error fetching train data:', error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = () => {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    if (user) {
      let data = [];
    
      if (mode === 'flight') {
        data = flightType === 'domestic' ? domesticData : internationalData;
      } else {
        data = trainData;
      }
    
      // Find data for exact entered date
      const exactDateData = data.filter(
        (item) => (
          item.from.toLowerCase() === from.toLowerCase() &&
          item.to.toLowerCase() === to.toLowerCase() &&
          item.date === selectedDate
        )
      );
    
      // If exact date data found, set results and return
      if (exactDateData.length > 0) {
        setResults(exactDateData);
        return;
      }
    
      // Find nearest future date data
      const futureData = data
        .filter(item => new Date(item.date) >= new Date()) // Filter out past dates
        .sort((a, b) => new Date(a.date) - new Date(b.date));
    
      // Find the first item with matching from and to values in futureData
      const nearestDateItem = futureData.find(item =>
        item.from.toLowerCase() === from.toLowerCase() &&
        item.to.toLowerCase() === to.toLowerCase()
      );
    
      if (nearestDateItem) {
        setResults([nearestDateItem]);
      } else {
        setResults([]);
      }
    }
    else{
      navigate('/login');
    }
  };
  

  const handleSavePlan = () => {
    const dataStr = JSON.stringify(results, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'travel_plan.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleModeChange = (mode) => {
    setMode(mode);
    setFrom('');
    setTo('');
    setResults([]);
  };

  const handleFlightTypeChange = (flightType) => {
    setFlightType(flightType);
    setFrom('');
    setTo('');
    setResults([]);
  };

  return (
    <div className="App">
      <h1>Travel Cost Prediction and Trip Planning</h1>
      <div className="search-form">
        <select value={mode} onChange={(e) => handleModeChange(e.target.value)}>
          <option value="flight">Flight</option>
          <option value="train">Train</option>
        </select>
        {mode === 'flight' && (
          <select value={flightType} onChange={(e) => handleFlightTypeChange(e.target.value)}>
            <option value="domestic">Domestic</option>
            <option value="international">International</option>
          </select>
        )}
        <input
          type="text"
          placeholder="From"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
        />
        <input
          type="text"
          placeholder="To"
          value={to}
          onChange={(e) => setTo(e.target.value)}
        />
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
        />
        <button onClick={handleSearch}>{mode === 'flight' ? 'Search Flights' : 'Search Trains'}</button>
      </div>
      <div className="results">
        {results.length > 0 ? (
          <>
            {results.map((item, index) => (
              <div key={index} className="result-item">
                <p>From: {item.from}</p>
                <p>To: {item.to}</p>
                <p>Cost: ₹{item.cost}</p>
                <p>Date: {item.date}</p>
                <p>Departure: {item.departure}</p>
                <p>Arrival: {item.arrival}</p>
              </div>
            ))}
            <button onClick={handleSavePlan}>Save Plan</button>
          </>
        ) : (
          <p>No results found</p>
        )}
      </div>
    </div>
  );
};

export default Prediction;
