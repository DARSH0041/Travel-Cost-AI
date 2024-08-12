import React, { useEffect, useState } from 'react';
import '../../style/HomeNav.css';
import LogoIcon from "../../assets/svg/Logo";
import { useNavigate } from 'react-router-dom';
import { Menu, MenuItem } from '@mui/material'; // Importing Menu and MenuItem from Material-UI

function HomeNav() {
  const [currentUser, setCurrentUser] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null); // For Material-UI Menu
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    if (user) {
      setCurrentUser(user);
    }
    
    
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    navigate('/login');
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const redirect = () => {
    navigate('/');
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h2 onClick={redirect}>
          <LogoIcon /> Let's go Travel
        </h2>
      </div>
      {currentUser && (
        <div className="user-profile">
          <button onClick={handleMenuOpen} className="menu-button">
            {currentUser.email} {/* Display the current user's name */}
          </button>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </div>
      )}
    </nav>
  );
}

export default HomeNav;
