import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Button, NavDropdown } from 'react-bootstrap';
import { FaBars, FaSearch, FaPhone, FaEllipsisV, FaShoppingBag } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './HomeNavbar.css';

const AppNavbar = () => {
  const [navbarBackground, setNavbarBackground] = useState(false);
  const [showIcons, setShowIcons] = useState(false);
  const [showSideMenu, setShowSideMenu] = useState(false);
  const navigate = useNavigate();  // Initialize navigate hook

  const handleScroll = () => {
    setNavbarBackground(window.scrollY > 100);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleIcons = () => {
    setShowIcons(!showIcons);
  };

  const toggleSideMenu = () => {
    setShowSideMenu(!showSideMenu);
  };

  const handleCartClick = () => {
    navigate('/login'); // Redirect to login page
  };

  const handleShopClick = () => {
    navigate('/shop'); // Redirect to shop page
  };

  return (
    <Navbar expand="lg" className={`navbar ${navbarBackground ? 'scrolled' : ''}`}>
      <div className="container-fluid">
        <div className="left-section">
          <Nav className="d-none d-lg-flex">
            <Nav.Link href="/">HOME</Nav.Link>
            <NavDropdown title="PORTFOLIO" id="portfolio-dropdown">
              <NavDropdown.Item href="#action1">Action 1</NavDropdown.Item>
              <NavDropdown.Item href="#action2">Action 2</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#blog">BLOG</Nav.Link>
            <Nav.Link onClick={handleShopClick}>SHOP</Nav.Link> {/* Updated SHOP link */}
            <Nav.Link href="#page">PAGE</Nav.Link>
            <Nav.Link href="#elements">ELEMENTS</Nav.Link>
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
            <FaShoppingBag className="cart-icon" onClick={handleCartClick} style={{ cursor: 'pointer' }} />
            <FaSearch className="search-icon" />
          </div>
        </div>

        <Button variant="outline-primary" className="d-xl-none" onClick={toggleIcons}>
          <FaEllipsisV />
        </Button>

        <Button variant="outline-primary" className="d-lg-none navbar-toggler" onClick={toggleSideMenu}>
          <FaBars />
        </Button>
      </div>
    </Navbar>
  );
};

export default AppNavbar;
