import React, { useState, useEffect } from 'react'; 
import { Navbar, Nav, Button, NavDropdown } from 'react-bootstrap';
import { FaBars,  FaPhone, FaEllipsisV, FaShoppingBag } from 'react-icons/fa';
import { useNavigate, useLocation } from 'react-router-dom'; // Import useLocation
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../features/authSlice'; 
import './Mainnav.css';

const Mainnav = () => {
  const [navbarBackground, setNavbarBackground] = useState(false);
  const [showIcons, setShowIcons] = useState(false);
  const [showSideMenu, setShowSideMenu] = useState(false);
  const navigate = useNavigate();
  const location = useLocation(); // To get the previous page
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
      navigate('/login', { state: { from: location.pathname } }); // Pass the previous page to the login
    }
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate('/'); // Redirect to home page after logging out
  };

  return (
    <Navbar expand="lg" className={`navbar ${navbarBackground ? 'scrolled1' : ''}`}>
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
            src="https://retrolie.thememove.com/wp-content/themes/retrolie/assets/images/dark-logo.png"
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

export default Mainnav;
