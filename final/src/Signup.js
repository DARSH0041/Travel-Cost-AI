import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
//import Footer from "./components/Sections/Footer";
import LogoIcon from "./assets/svg/Logo";
import './Login.css';
function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];
    if (users.some(user => user.email === email)) {
      setMessage('User already exists.');
    } else {
      const newUser = { email, password };
      users.push(newUser);
      localStorage.setItem('users', JSON.stringify(users));
      setMessage('Signup successful! Redirecting to login...');
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    }
  };

  return (
    <div className='signin-page'>
      <header className="header">
      <h1>
            <LogoIcon /> Let's go Travel
            </h1>
      </header>
    <div className="signup-container">
      
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
    <footer className="footer">
    <p>&copy; 2024 My Application. All rights reserved.</p>
  </footer>
  </div>
    
  );
}

export default Signup;