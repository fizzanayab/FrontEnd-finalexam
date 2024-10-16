import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Shop.css'; // Assuming you'll have a CSS file for styling
import Mainnav from '../../header/pagesnav/Mainnav';
import Footer from '../../footer/pagesfooter/Footer';
const products = [
  { id: 1, name: 'Above-knee Jeans Skirt', price: 49.00, img: 'image_url_1' },
  { id: 2, name: 'Artificial Fur Coat', price: 60.00, img: 'image_url_2' },
  { id: 3, name: 'Barrio Clamshell Bag', price: 35.00, img: 'image_url_3' },
  { id: 4, name: 'Buttoned Waist Bag', price: 27.00, img: 'image_url_4' },
  // Add more products as needed
];

const Shop = () => {
  const [filterPrice, setFilterPrice] = useState(100);

  const handlePriceChange = (e) => {
    setFilterPrice(e.target.value);
  };

  return (
    <div>
      <Mainnav/>
      <div className="shop-container">
        <aside className="filter-sidebar">
          <h2>Filter by price</h2>
          <input 
            type="range" 
            min="0" 
            max="100" 
            value={filterPrice} 
            onChange={handlePriceChange} 
          />
          <span>Price: £0 — £{filterPrice}</span>
          <button>Filter</button>
          <h2>Products</h2>
          <ul>
            {products.map(product => (
              <li key={product.id}>
                <img src={product.img} alt={product.name} />
                <Link to="/login">{product.name}</Link>
                <p>£{product.price}</p>
              </li>
            ))}
          </ul>
        </aside>
        <section className="products-section">
          <div className="product-grid">
            {products.map(product => (
              <div className="product-item" key={product.id}>
                <div className="product-image">
                  <img src={product.img} alt={product.name} />
                  <div className="hover-overlay">
                    <Link to="/login">View Details</Link>
                  </div>
                </div>
                <h3>{product.name}</h3>
                <p>£{product.price}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer/>

    </div>
  );
};

export default Shop;
