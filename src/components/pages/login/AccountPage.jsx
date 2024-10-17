import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../features/authSlice'; 
import './AccountPage.css';

const AccountPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loggedInUser = useSelector((state) => state.auth.user); 

  // State for user information
  const [userInfo, setUserInfo] = useState({
    username: '',
    email: '',
  });

  // Populate userInfo with logged-in user data from Redux
  useEffect(() => {
    if (loggedInUser) {
      setUserInfo({
        username: loggedInUser.username,
        email: loggedInUser.email,
      });
    }
  }, [loggedInUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogout = () => {
    dispatch(logout()); 
    navigate('/'); 
  };

  const handleDeleteAccount = () => {
    const confirmDelete = window.confirm("Are you sure you want to delete your account?");
    if (confirmDelete) {
      localStorage.removeItem('user'); 
      dispatch(logout()); 
      navigate('/'); 
    }
  };

  return (
    <div className="account-page">
      <h1>Account Page</h1>
      <div className="account-info">
        <h2>User Information</h2>
        <div className="info-group">
          <label>Username:</label>
          <input 
            type="text" 
            name="username" 
            value={userInfo.username} 
            onChange={handleChange} 
          />
        </div>
        <div className="info-group">
          <label>Email:</label>
          <input 
            type="email" 
            name="email" 
            value={userInfo.email} 
            onChange={handleChange} 
          />
        </div>
      </div>

      <div className="account-actions">
        <button onClick={handleLogout}>Log Out</button>
        <button onClick={handleDeleteAccount} className="delete-button">Delete Account</button>
      </div>
    </div>
  );
};

export default AccountPage;
