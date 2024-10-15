import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import AppNavbar from '../../header/homenav/HomeNav';
import Slider from '../../utilities/slider/Slider';
import './Home.css'; // Add a CSS file for custom styling

const Home = () => {
  return (
    <div>
      <AppNavbar />
      <Slider />
      
      {/* Coffee Section */}
      <section className="coffee-section">
        <div className="content-wrapper">
          <div className="cup-container">
            <div className="bouncing-cup">
              <img src="https://retrolie.thememove.com/wp-content/uploads/2019/03/h7-cup.png" alt="Bouncing Cup" />
            </div>
            <img
              src="https://retrolie.thememove.com/wp-content/uploads/2019/03/h7-about-bg.png"
              alt="Beans"
              className="beans-background"
            />
          </div>
          <h1 className="coffee-title">Cappuccino</h1>
          <p className="coffee-description">
            Enjoy the rich, bold flavors of our freshly brewed cappuccino, crafted from the finest beans to deliver an exceptional experience.
          </p>
          <img
            src="https://retrolie.thememove.com/wp-content/uploads/2019/02/h3-signature.png"
            alt="Signature"
            className="signature"
          />
        </div>
      </section>

      {/* Menu Section */}
      <section className="menu-section">
        <h2 className="menu-heading">Discover Our Menu</h2>
        <Link to="/login" className="menu-link"> {/* Link to login page */}
          <div className="menu-wrapper">
            {/* Starter */}
            <div className="menu-category">
              <h3 className="category-title">Starter</h3>
              <ul>
                <li>
                  <img src="https://retrolie.thememove.com/wp-content/uploads/2019/01/blog-14-70x70.jpg" alt="starter" />
                  <span>Meat Fruit</span>
                  <p>Mandarin, chicken liver parfait & grilled bread</p>
                  <span className="price">$15.00</span>
                </li>
                <li>
                  <img src="https://retrolie.thememove.com/wp-content/uploads/2019/03/restaurant-01.png" alt="starter" />
                  <span>Savoury Porridge</span>
                  <p>Buttered crab loaf</p>
                  <span className="price">$16.50</span>
                </li>
                <li>
                  <img src="https://retrolie.thememove.com/wp-content/uploads/2019/03/restaurant-03.png" alt="starter" />
                  <span>Earl Grey Tea Cured Salmon</span>
                  <p>Salmon, pickled lemon, golden tea & muesli bread</p>
                  <span className="price">$18.50</span>
                </li>
              </ul>
            </div>

            {/* Main Courses */}
            <div className="menu-category">
              <h3 className="category-title">Main Courses</h3>
              <ul>
                <li>
                  <img src="https://retrolie.thememove.com/wp-content/uploads/2019/03/restaurant-04.png" alt="main" />
                  <span>Savoury Porridge</span>
                  <p>Buttered crab loaf</p>
                  <span className="price">$25.00</span>
                </li>
                <li>
                  <img src="https://retrolie.thememove.com/wp-content/uploads/2019/03/restaurant-05.png" alt="main" />
                  <span>Earl Grey Tea Cured Salmon</span>
                  <p>Salmon, pickled lemon, golden tea & muesli bread</p>
                  <span className="price">$30.00</span>
                </li>
                <li>
                  <img src="https://retrolie.thememove.com/wp-content/uploads/2019/03/restaurant-06.png" alt="main" />
                  <span>Meat Fruit</span>
                  <p>Mandarin, chicken liver parfait & grilled bread</p>
                  <span className="price">$15.00</span>
                </li>
              </ul>
            </div>

            {/* Desserts */}
            <div className="menu-category">
              <h3 className="category-title">Desserts</h3>
              <ul>
                <li>
                  <img src="https://retrolie.thememove.com/wp-content/uploads/2019/03/restaurant-08.png" alt="dessert" />
                  <span>Savoury Porridge</span>
                  <p>Buttered crab loaf</p>
                  <span className="price">$12.00</span>
                </li>
                <li>
                  <img src="https://retrolie.thememove.com/wp-content/uploads/2019/03/restaurant-07.png" alt="dessert" />
                  <span>Meat Fruit</span>
                  <p>Mandarin, chicken liver parfait & grilled bread</p>
                  <span className="price">$15.00</span>
                </li>
                <li>
                  <img src="https://retrolie.thememove.com/wp-content/uploads/2019/03/restaurant-09.png" alt="dessert" />
                  <span>Earl Grey Tea Cured Salmon</span>
                  <p>Salmon, pickled lemon, golden tea & muesli bread</p>
                  <span className="price">$18.50</span>
                </li>
              </ul>
            </div>
          </div>
        </Link>
      </section>

      <section className="new-menu-section">
        <h2 className="new-menu-heading">Become a Fan of Ours</h2>
        <div className="new-menu-wrapper">
          {/* Menu Item 1 */}
          <div className="new-menu-item">
            <div className="image-wrapper">
              <img src="https://retrolie.thememove.com/wp-content/uploads/2019/01/blog-14-370x250.jpg" alt="Proof Bread" />
              <div className="hover-overlay"></div>
            </div>
            <h3>Proof Bread When It’s Cold Outside</h3>
            <p>When the temps drop, I start craving all my favorite comfort foods...</p>
          </div>

          {/* Menu Item 2 */}
          <div className="new-menu-item">
            <div className="image-wrapper">
              <img src="https://retrolie.thememove.com/wp-content/uploads/2019/01/blog-07-370x250.jpg" alt="Bread Kneaded Enough" />
              <div className="hover-overlay"></div>
            </div>
            <h3>Is Your Bread Kneaded Enough?</h3>
            <p>Making your own bread can be one of the most satisfying achievements...</p>
          </div>

          {/* Menu Item 3 */}
          <div className="new-menu-item">
            <div className="image-wrapper">
              <img src="https://retrolie.thememove.com/wp-content/uploads/2019/03/margo-brodowicz-203225-unsplash-370x250.jpg" alt="Strawberry Cream Cheese Bread" />
              <div className="hover-overlay"></div>
            </div>
            <h3>Strawberry Cream Cheese Bread</h3>
            <p>We bought in many, base-brown items, and even though you toasted...</p>
          </div>
        </div>
      </section>

      <footer className="custom-footer">
        <div className="footer-bottom">
          <img src="https://retrolie.thememove.com/wp-content/uploads/2019/01/blog-03.jpg" alt="Footer Image" />
        </div>
        <div className="footer-content">
          <div className="footer-logo">
            <img src="https://retrolie.thememove.com/wp-content/uploads/2019/03/h7-logo-footer.png" alt="Coffee Shop Logo" />
          </div>
          <address>
            <p>2005 Stokes Isle Apt. 896, VenaVille 10100, USA</p>
            <p>info@yourdomain.com</p>
            <p>(+68) 120034509</p>
          </address>
        </div>
      </footer>
    </div>
  );
};

export default Home;
