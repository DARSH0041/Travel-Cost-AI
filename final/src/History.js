import React, { useState, useEffect } from 'react';
import axios from 'axios';

const History = () => {
  const [historyData, setHistoryData] = useState([]);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const response = await axios.get('/api/history'); // Replace with your actual API endpoint
        setHistoryData(response.data);
      } catch (error) {
        console.error('Error fetching history data:', error);
      }
    };

    fetchHistory();
  }, []);

  return (
    <div>
      <h1>History</h1>
      {historyData.length > 0 ? (
        <ul>
          {historyData.map((item, index) => (
            <li key={index}>
              <p>From: {item.from}</p>
              <p>To: {item.to}</p>
              <p>Cost: ₹{item.cost}</p>
              <p>Date: {item.date}</p>
              <p>Departure: {item.departure}</p>
              <p>Arrival: {item.arrival}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No history available.</p>
      )}
    </div>
  );
};

export default History;
