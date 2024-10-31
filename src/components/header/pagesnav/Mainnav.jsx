import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Button, NavDropdown, Offcanvas } from 'react-bootstrap';
import { FaBars, FaPhone, FaShoppingBag } from 'react-icons/fa';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../features/authSlice';
import './Mainnav.css';

const Mainnav = () => {
  const [navbarBackground, setNavbarBackground] = useState(false);
  const [showSideMenu, setShowSideMenu] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const cartIconColor = isLoggedIn ? 'orange' : 'Coffee';

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
      navigate('/shoppingbag');
    } else {
      navigate('/login', { state: { from: location.pathname } });
    }
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <>
      <Navbar expand="lg" className={`navbarmain ${navbarBackground ? 'scrolled1' : ''}`}>
        <div className="container-fluid">
          {/* Logo on the Left */}
          <Navbar.Brand href="/" className="left-logo">
            <img
              src="https://retrolie.thememove.com/wp-content/themes/retrolie/assets/images/dark-logo.png"
              alt="Logo"
              width="120"
            />
          </Navbar.Brand>

          {/* Menu in the Center */}
          <div className="center-menu">
            <Nav className="d-none d-lg-flex">
              <Nav.Link className="custom-nav-link" href="/">HOME</Nav.Link>
              <Nav.Link className="custom-nav-link" onClick={() => navigate('/portfolio')}>PORTFOLIO</Nav.Link>
              <Nav.Link className="custom-nav-link" onClick={() => navigate('/blog')}>BLOG</Nav.Link>
              <Nav.Link className="custom-nav-link" onClick={() => navigate('/shop')}>SHOP</Nav.Link>
              <Nav.Link className="custom-nav-link" onClick={() => navigate('/contact')}>CONTACT</Nav.Link>
            </Nav>
          </div>

          {/* Right Section */}
          <div className="right-section">
            {/* Phone Number and Icons */}
            <div className="phone-number d-none d-xl-flex">
              <FaPhone className="phone2" />
              <span className="ms-2 phone">(+68) 120034509</span>
            </div>

            <div className="icons d-none d-xl-flex">
              <FaShoppingBag
                className="cart-icon"
                onClick={handleCartClick}
                style={{ cursor: 'pointer', color: cartIconColor }}
              />
            </div>

            {isLoggedIn && (
              <NavDropdown title="Account" id="account-dropdown">
                <NavDropdown.Item onClick={handleLogout}>Log Out</NavDropdown.Item>
              </NavDropdown>
            )}

            {/* Hamburger Menu Button */}
            <Button variant="outline-warning" className="d-lg-none" onClick={() => setShowSideMenu(true)}>
              <FaBars />
            </Button>
          </div>
        </div>
      </Navbar>

      {/* Side Menu */}
      <Offcanvas show={showSideMenu} onHide={() => setShowSideMenu(false)}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link className="custom-nav-link" href="/">HOME</Nav.Link>
            <Nav.Link className="custom-nav-link" onClick={() => navigate('/portfolio')}>PORTFOLIO</Nav.Link>
            <Nav.Link className="custom-nav-link" onClick={() => navigate('/blog')}>BLOG</Nav.Link>
            <Nav.Link className="custom-nav-link" onClick={() => navigate('/shop')}>SHOP</Nav.Link>
            <Nav.Link className="custom-nav-link" onClick={() => navigate('/contact')}>CONTACT</Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Mainnav;
