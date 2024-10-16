import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container-fluid">
        <div className="row">
          {/* Quick Links Section */}
          <div className="col-md-4 quick-links">
            <h5>QUICK LINKS</h5>
            <ul>
              <li>F.A.Qs</li>
              <li>Support</li>
              <li>Sitemap</li>
              <li>Community</li>
            </ul>
          </div>

          {/* Subscribe Section */}
          <div className="col-md-4 subscribe">
            <h5>SUBSCRIBE</h5>
            <input
              type="email"
              placeholder="Your email address"
              className="email-input"
            />
            <button className="subscribe-button">&rarr;</button>
            <div className="social-icons">
              <FaFacebookF />
              <FaInstagram />
              <FaTwitter />
            </div>
          </div>

          {/* Contact Section */}
          <div className="col-md-4 contact-us">
            <h5>CONTACT US</h5>
            <p>2005 Stokes Isle Apt. 896, Venaville 10010, USA</p>
            <p>info@yourdomain.com</p>
            <p>(+68) 120034509</p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; Retrolie Studio. All Rights Reserved 2019.</p>
      </div>
    </footer>
  );
};

export default Footer;
