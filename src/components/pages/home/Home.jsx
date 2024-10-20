import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AppNavbar from '../../header/homenav/HomeNav';
import Slider from '../../utilities/slider/Slider';
import './Home.css';

const Home = () => {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const maxHeight = 400;
      const newOpacity = Math.max(1 - scrollTop / maxHeight, 0.3);
      setOpacity(newOpacity);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <AppNavbar />
      <div style={{ opacity }}>
        <Slider />
      </div>
      {/* coffeesection */}
      <section className="coffee-section text-center py-5">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8 col-sm-12">
              <div className="cup-container">
                <div className="bouncing-cup ">
                  <img
                    src="https://retrolie.thememove.com/wp-content/uploads/2019/03/h7-cup.png"
                    alt="Bouncing Cup"
                    className="img-fluid"
                  />
                </div>
              </div>
              <h2 className="coffee-title1 mb-3">
                INCLUDE YOUR TASTE WITH THE BRAND NEW
              </h2>
              <h1 className="coffee-title mb-4">Capuccino</h1>
              <p className="coffee-description mb-4 lg-1">
                “ The taste, the smell and the bitterness of a Cappuccino.
                <br />
                They can calm the soul of a wanderer, soothe the pain of a broken heart and <br />
                warm the cold, sad heart of a depressed person. “
              </p>
              <img
                src="https://retrolie.thememove.com/wp-content/uploads/2019/03/h7-about-bg.png"
                alt="Beans"
                className="img-fluid beans-background"
              />
              <img
                src="https://retrolie.thememove.com/wp-content/uploads/2019/02/h3-signature.png"
                alt="Signature"
                className="img-fluid signature mt-4"
              />
            </div>
          </div>
        </div>
      </section>


      {/* /* Menu Section */}
      <section className="menu-section">
        <h2 className="menu-heading">Discover Our Menu</h2>
        <div className="menu-wrapper">
          {/* Starter and Desserts Column */}
          <div className="menu-column">
            <div className="menu-category">
              <h3 className="category-title">Starter</h3>
              <ul>
                <li>
                  <div className="menu-item">
                    <img src="https://retrolie.thememove.com/wp-content/uploads/2019/01/blog-14-70x70.jpg" alt="starter" />
                    <div className="menu-text">
                      <span>Meat Fruit</span>
                      <p>Mandarin, chicken liver parfait & grilled bread</p>
                      <span className="price">$15.00</span>
                    </div>
                  </div>
                  <hr className="menu-divider" />
                </li>
                <li>
                  <div className="menu-item">
                    <img src="https://retrolie.thememove.com/wp-content/uploads/2019/01/blog-14-70x70.jpg" alt="starter" />
                    <div className="menu-text">
                      <span>Meat Fruit</span>
                      <p>Mandarin, chicken liver parfait & grilled bread</p>
                      <span className="price">$15.00</span>
                    </div>
                  </div>
                  <hr className="menu-divider" />
                </li>
                <li>
                  <div className="menu-item">
                    <img src="https://retrolie.thememove.com/wp-content/uploads/2019/03/restaurant-01.png" alt="starter" />
                    <div className="menu-text">
                      <span>Savoury Porridge</span>
                      <p>Buttered crab loaf</p>
                      <span className="price">$16.50</span>
                    </div>
                  </div>
                  <hr className="menu-divider" />
                </li>
                <li>
                  <div className="menu-item">
                    <img src="https://retrolie.thememove.com/wp-content/uploads/2019/03/restaurant-03.png" alt="starter" />
                    <div className="menu-text">
                      <span>Earl Grey Tea Cured Salmon</span>
                      <p>Salmon, pickled lemon, golden tea & muesli bread</p>
                      <span className="price">$18.50</span>
                    </div>
                  </div>
                  <hr className="menu-divider" />
                </li>
              </ul>
            </div>

            <div className="menu-category">
              <h3 className="category-title">Desserts</h3>
              <ul>
                <li>
                  <div className="menu-item">
                    <img src="https://retrolie.thememove.com/wp-content/uploads/2019/03/restaurant-08.png" alt="dessert" />
                    <div className="menu-text">
                      <span>Savoury Porridge</span>
                      <p>Buttered crab loaf</p>
                      <span className="price">$12.00</span>
                    </div>
                  </div>
                  <hr className="menu-divider" />
                </li>
                <li>
                  <div className="menu-item">
                    <img src="https://retrolie.thememove.com/wp-content/uploads/2019/03/restaurant-07.png" alt="dessert" />
                    <div className="menu-text">
                      <span>Meat Fruit</span>
                      <p>Mandarin, chicken liver parfait & grilled bread</p>
                      <span className="price">$15.00</span>
                    </div>
                  </div>
                  <hr className="menu-divider" />
                </li>
              </ul>
            </div>
          </div>

          {/* Main Course Column */}
          <div className="menu-column">
            <div className="menu-category">
              <h3 className="category-title">Main Courses</h3>
              <ul>
                <li>
                  <div className="menu-item">
                    <img src="https://retrolie.thememove.com/wp-content/uploads/2019/03/restaurant-04.png" alt="main" />
                    <div className="menu-text">
                      <span>Savoury Porridge</span>
                      <p>Buttered crab loaf</p>
                      <span className="price">$25.00</span>
                    </div>
                  </div>
                  <hr className="menu-divider" />
                </li>
                <li>
                  <div className="menu-item">
                    <img src="https://retrolie.thememove.com/wp-content/uploads/2019/03/restaurant-05.png" alt="main" />
                    <div className="menu-text">
                      <span>Earl Grey Tea Cured Salmon</span>
                      <p>Salmon, pickled lemon, golden tea & muesli bread</p>
                      <span className="price">$30.00</span>
                    </div>
                  </div>
                  <hr className="menu-divider" />
                </li>
                <li>
                  <div className="menu-item">
                    <img src="https://retrolie.thememove.com/wp-content/uploads/2019/03/restaurant-06.png" alt="main" />
                    <div className="menu-text">
                      <span>Meat Fruit</span>
                      <p>Mandarin, chicken liver parfait & grilled bread</p>
                      <span className="price">$15.00</span>
                    </div>
                  </div>
                  <hr className="menu-divider" />
                </li>
                <li>
                  <div className="menu-item">
                    <img src="https://retrolie.thememove.com/wp-content/uploads/2019/03/restaurant-08.png" alt="main" />
                    <div className="menu-text">
                      <span>Savoury Porridge</span>
                      <p>Buttered crab loaf</p>
                      <span className="price">$12.00</span>
                    </div>

                  </div>
                  <hr className="menu-divider" />
                </li>
                <li>
                  <div className="menu-item">
                    <img src="https://retrolie.thememove.com/wp-content/uploads/2019/03/restaurant-08.png" alt="main" />
                    <div className="menu-text">
                      <span>Savoury Porridge</span>
                      <p>Buttered crab loaf</p>
                      <span className="price">$12.00</span>
                    </div>

                  </div>
                  <hr className="menu-divider" />
                </li>
                <li>
                  <div className="menu-item">
                    <img src="https://retrolie.thememove.com/wp-content/uploads/2019/03/restaurant-08.png" alt="main" />
                    <div className="menu-text">
                      <span>Savoury Porridge</span>
                      <p>Buttered crab loaf</p>
                      <span className="price">$12.00</span>
                    </div>

                  </div>
                  <hr className="menu-divider" />
                </li>

              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="new-menu-section container">
        <h2 className="new-menu-heading">Become a Fan of Ours</h2>

        {/* For Mobile View */}
        <div className="d-block d-md-none">
          {/* Mobile view: Only one card */}
          <div className="row justify-content-center">
            <div className="col-10 mx-1">
              <div className="new-menu-item">
                <div className="image-wrapper">
                  <img
                    src="https://retrolie.thememove.com/wp-content/uploads/2019/01/blog-14-370x250.jpg"
                    alt="Proof Bread"
                  />
                  <div className="hover-overlay"></div>
                </div>
                <h3 className="menu-title">Proof Bread When It’s Cold Outside</h3>
                <hr className="menu-divider1" />
                <p>When the temps drop, I start craving all my favorite comfort foods...</p>
                <Link to="/blog" className="button">Learn More</Link> {/* Updated button */}
              </div>
            </div>
          </div>
        </div>

        {/* For Tablet View */}
        <div className="d-none d-md-block d-lg-none">
          {/* Tablet view: Two cards in a row */}
          <div className="row justify-content-center">
            <div className="col-5 mx-1">  {/* Adjusted to col-5 for tablet view */}
              <div className="new-menu-item">
                <div className="image-wrapper">
                  <img
                    src="https://retrolie.thememove.com/wp-content/uploads/2019/01/blog-14-370x250.jpg"
                    alt="Proof Bread"
                  />
                  <div className="hover-overlay"></div>
                </div>
                <h3 className="menu-title">Proof Bread When It’s Cold Outside</h3>
                <hr className="menu-divider1" />
                <p>When the temps drop, I start craving all my favorite comfort foods...</p>
                <Link to="/blog" className="button">Learn More</Link> {/* Updated button */}
              </div>
            </div>

            <div className="col-5 mx-1">  {/* Adjusted to col-5 for tablet view */}
              <div className="new-menu-item">
                <div className="image-wrapper">
                  <img
                    src="https://retrolie.thememove.com/wp-content/uploads/2019/01/blog-07-370x250.jpg"
                    alt="Bread Kneaded Enough"
                  />
                  <div className="hover-overlay"></div>
                </div>
                <h3 className="menu-title">Is Your Bread Kneaded Enough?</h3>
                <hr className="menu-divider1" />
                <p>Making your own bread can be one of the most satisfying achievements...</p>
                <Link to="/blog" className="button">Learn More</Link> {/* Updated button */}
              </div>
            </div>
          </div>
        </div>

        {/* For Desktop View */}
        <div className="d-none d-lg-block">
          <div id="newMenuCarousel" className="carousel slide">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row justify-content-center">
                  {/* Menu Item 1 */}
                  <div className="col-lg-3 col-md-5 mx-1">
                    <div className="new-menu-item">
                      <div className="image-wrapper">
                        <img
                          src="https://retrolie.thememove.com/wp-content/uploads/2019/01/blog-14-370x250.jpg"
                          alt="Proof Bread"
                        />
                        <div className="hover-overlay"></div>
                      </div>
                      <h3 className="menu-title">Proof Bread When It’s Cold Outside</h3>
                      <hr className="menu-divider1" />
                      <p>When the temps drop, I start craving all my favorite comfort foods and i love it...</p>
                      <Link to="/blog" className="button">Learn More</Link> {/* Updated button */}
                      </div>
                  </div>

                  {/* Menu Item 2 */}
                  <div className="col-lg-3 col-md-5 mx-1">
                    <div className="new-menu-item">
                      <div className="image-wrapper">
                        <img
                          src="https://retrolie.thememove.com/wp-content/uploads/2019/01/blog-07-370x250.jpg"
                          alt="Bread Kneaded Enough"
                        />
                        <div className="hover-overlay"></div>
                      </div>
                      <h3 className="menu-title">Is Your Bread Kneaded Enough?</h3>
                      <hr className="menu-divider1" />
                      <p>Making your own bread can be one of the most satisfying achievements...</p>
                      <Link to="/blog" className="button">Learn More</Link> {/* Updated button */}
                      </div>
                  </div>

                  {/* Menu Item 3 */}
                  <div className="col-lg-3 col-md-5 mx-1">
                    <div className="new-menu-item">
                      <div className="image-wrapper">
                        <img
                          src="https://retrolie.thememove.com/wp-content/uploads/2019/03/margo-brodowicz-203225-unsplash-370x250.jpg"
                          alt="Strawberry Cream Cheese Bread"
                        />
                        <div className="hover-overlay"></div>
                      </div>
                      <h3 className="menu-title">Strawberry Cream Cheese Bread</h3>
                      <hr className="menu-divider1" />
                      <p>We bought in many, base-brown items, and even though you toasted...</p>
                      <Link to="/blog" className="button">Learn More</Link> {/* Updated button */}
                      </div>
                  </div>
                </div>
              </div>

              {/* Carousel Item 2 */}
              <div className="carousel-item">
                <div className="row justify-content-center">
                  <div className="col-lg-3 col-md-5 mx-1">
                    <div className="new-menu-item">
                      <div className="image-wrapper">
                        <img
                          src="https://retrolie.thememove.com/wp-content/uploads/2019/03/margo-brodowicz-203225-unsplash-370x250.jpg"
                          alt="Strawberry Cream Cheese Bread"
                        />
                        <div className="hover-overlay"></div>
                      </div>
                      <h3 className="menu-title">Strawberry Cream Cheese Bread</h3>
                      <hr className="menu-divider1" />
                      <p>We bought in many, base-brown items, and even though you toasted...</p>
                      <Link to="/blog" className="button">Learn More</Link> {/* Updated button */}
                      </div>
                  </div>
                  <div className="col-lg-3 col-md-5 mx-1">
                    <div className="new-menu-item">
                      <div className="image-wrapper">
                        <img
                          src="https://retrolie.thememove.com/wp-content/uploads/2019/03/margo-brodowicz-203225-unsplash-370x250.jpg"
                          alt="Strawberry Cream Cheese Bread"
                        />
                        <div className="hover-overlay"></div>
                      </div>
                      <h3 className="menu-title">Strawberry Cream Cheese Bread</h3>
                      <hr className="menu-divider1" />
                      <p>We bought in many, base-brown items, and even though you toasted...</p>
                      <Link to="/blog" className="button">Learn More</Link> {/* Updated button */}
                      </div>
                  </div>
                  <div className="col-lg-3 col-md-5 mx-1">
                    <div className="new-menu-item">
                      <div className="image-wrapper">
                        <img
                          src="https://retrolie.thememove.com/wp-content/uploads/2019/03/margo-brodowicz-203225-unsplash-370x250.jpg"
                          alt="Strawberry Cream Cheese Bread"
                        />
                        <div className="hover-overlay"></div>
                      </div>
                      <h3 className="menu-title">Strawberry Cream Cheese Bread</h3>
                      <hr className="menu-divider1" />
                      <p>We bought in many, base-brown items, and even though you toasted...</p>
                      <button className="button">
                      <Link to="/blog" className="button">Learn More</Link> {/* Updated button */}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Carousel controls */}
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#newMenuCarousel"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#newMenuCarousel"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>


      {/* footer */}

      <footer className="custom-footer container-fluid">
        <div className="footer-content">
          <div className="footer-logo">
            <img
              src="https://retrolie.thememove.com/wp-content/uploads/2019/03/h7-logo-footer.png"
              alt="Coffee Shop Logo"
              className="logo-img"
            />
            <button className="contact-button">Contact Us</button>
          </div>
          <div className="footer-address">
            <h4 className="address-title">Address</h4>
            <address>
              <p>2005 Stokes Isle Apt. 896, <br /> VenaVille 10100, USA</p>
              <p className="phone-title">Phone Number</p>
              <p>(+68) 120034509</p>
            </address>
          </div>
        </div>


      </footer>
      <div className="footerend">
        <div className="social-links">
          <span>Footer</span>
          <span>Instagram</span>
          <span>Twitter</span>
        </div>
        <div className="footer-right">
          <p>© Retrolie Studio. All Rights Reserved 2019.</p>
        </div>
      </div>

    </div>
  );
};

export default Home;
