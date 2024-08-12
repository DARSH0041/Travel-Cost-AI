import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const [location1, setLocation1] = useState('');
  const [location2, setLocation2] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (!currentUser) {
      navigate('/login');
    }
  }, [navigate]);

  const handleLocationSubmit = (e) => {
    e.preventDefault();
    alert(`Location 1: ${location1}, Location 2: ${location2}`);
  };

  return (
    <div className="dashboard-container">
      <h2>Dashboard</h2>
      <form onSubmit={handleLocationSubmit}>
        <div className="form-group">
          <label>Location 1</label>
          <input
            type="text"
            value={location1}
            onChange={(e) => setLocation1(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Location 2</label>
          <input
            type="text"
            value={location2}
            onChange={(e) => setLocation2(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit Locations</button>
      </form>
    </div>
  );
}

export default Dashboard;
