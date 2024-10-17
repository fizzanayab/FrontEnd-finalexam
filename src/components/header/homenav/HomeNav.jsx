// src/components/AppNavbar.js
import React, { useState, useEffect } from 'react'; 
import { Navbar, Nav, Button, NavDropdown } from 'react-bootstrap';
import { FaBars, FaSearch, FaPhone, FaEllipsisV, FaShoppingBag } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../features/authSlice'; 
import './HomeNavbar.css';

const AppNavbar = () => {
  const [navbarBackground, setNavbarBackground] = useState(false);
  const [showIcons, setShowIcons] = useState(false);
  const [showSideMenu, setShowSideMenu] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  
  // Change shopping bag color based on login state
  const cartIconColor = isLoggedIn ? 'orange' : 'white';

  const handleScroll = () => {
    setNavbarBackground(window.scrollY > 100);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleCartClick = () => {
    if (isLoggedIn) {
      navigate('/shoppingbag'); // Redirect to shopping bag page if logged in
    } else {
      navigate('/login'); // Redirect to login page if not logged in
    }
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate('/'); // Redirect to home page after logging out
  };

  return (
    <Navbar expand="lg" className={`navbar ${navbarBackground ? 'scrolled' : ''}`}>
      <div className="container-fluid">
        <div className="left-section">
          <Nav className="d-none d-lg-flex">
            <Nav.Link href="/">HOME</Nav.Link>
            <Nav.Link onClick={() => navigate('/portfolio')}>PORTFOLIO</Nav.Link>
            <Nav.Link onClick={() => navigate('/blog')}>BLOG</Nav.Link>
            <Nav.Link onClick={() => navigate('/shop')}>SHOP</Nav.Link>
            <Nav.Link onClick={() => navigate('/contact')}>CONTACT</Nav.Link>
          </Nav>
        </div>

        <Navbar.Brand href="/" className="center-logo">
          <img
            src="https://retrolie.thememove.com/wp-content/themes/retrolie/assets/images/light-logo@2x.png"
            alt="Logo"
            width="120"
          />
        </Navbar.Brand>

        <div className="right-section">
          <div className="phone-number d-none d-xl-flex">
            <FaPhone className="phone1" />
            <span className="ms-2 phone">(+68) 120034509</span>
          </div>
          <div className="icons d-none d-xl-flex">
            <FaShoppingBag 
              className="cart-icon" 
              onClick={handleCartClick} 
              style={{ cursor: 'pointer', color: cartIconColor }} 
            />
            <FaSearch className="search-icon" />
          </div>
          {isLoggedIn && (
            <NavDropdown title="Account" id="account-dropdown">
              <NavDropdown.Item onClick={handleLogout}>Log Out</NavDropdown.Item>
            </NavDropdown>
          )}
        </div>

        <Button variant="outline-primary" className="d-xl-none" onClick={() => setShowIcons(!showIcons)}>
          <FaEllipsisV />
        </Button>

        <Button variant="outline-primary" className="d-lg-none navbar-toggler" onClick={() => setShowSideMenu(!showSideMenu)}>
          <FaBars />
        </Button>
      </div>
    </Navbar>
  );
};

export default AppNavbar;
