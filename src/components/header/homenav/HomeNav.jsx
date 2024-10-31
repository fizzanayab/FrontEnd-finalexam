import React, { useState, useEffect } from 'react'; 
import { Navbar, Nav, Button, NavDropdown, Offcanvas } from 'react-bootstrap';
import { FaBars, FaPhone,  FaShoppingBag } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../features/authSlice'; 
import './HomeNavbar.css';

const AppNavbar = () => {
  const [navbarBackground, setNavbarBackground] = useState(false);
  const [showSideMenu, setShowSideMenu] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  
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
      navigate('/shoppingbag'); 
    } else {
      navigate('/login'); 
    }
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate('/'); 
  };

  return (
    <>
      <Navbar expand="lg" className={`navbar ${navbarBackground ? 'scrolled' : ''}`}>
        <div className="container-fluid">
          <div className="left-section">
            <Nav className="d-none d-lg-flex">
              <Nav.Link className='menunav' href="/">HOME</Nav.Link>
              <Nav.Link className='menunav' onClick={() => navigate('/portfolio')}>PORTFOLIO</Nav.Link>
              <Nav.Link className='menunav' onClick={() => navigate('/blog')}>BLOG</Nav.Link>
              <Nav.Link className='menunav' onClick={() => navigate('/shop')}>SHOP</Nav.Link>
              <Nav.Link className='menunav' onClick={() => navigate('/contact')}>CONTACT</Nav.Link>
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
            <div className="phone-number1 d-none d-xl-flex">
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
            <Nav.Link className='menunav' href="/">HOME</Nav.Link>
            <Nav.Link className='menunav' onClick={() => navigate('/portfolio')}>PORTFOLIO</Nav.Link>
            <Nav.Link className='menunav' onClick={() => navigate('/blog')}>BLOG</Nav.Link>
            <Nav.Link className='menunav' onClick={() => navigate('/shop')}>SHOP</Nav.Link>
            <Nav.Link className='menunav' onClick={() => navigate('/contact')}>CONTACT</Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default AppNavbar;
