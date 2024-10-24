import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addItem } from '../../features/cartSlice';
import './Shop.css';
import Mainnav from '../../header/pagesnav/Mainnav';
import Footer from '../../footer/pagesfooter/Footer';

// Import images
import img1 from '../../img/blog/totoutrial8-kitchen2.jpg';
import img2 from '../../img/blog/totoutrial11-kitchen1.jpg';
import img3 from '../../img/blog/kitchen3.jpg';
import img4 from '../../img/blog/kitchen4.jpg';
import img5 from '../../img/blog/kitchen5.jpg';
import img6 from '../../img/blog/kitchen6.jpg';
import img7 from '../../img/blog/kitchen7.jpg';
import img8 from '../../img/blog/kitchen8.jpg';
import img9 from '../../img/blog/kitchen9.jpg';
import img10 from '../../img/shop/img10.jpg';
import img11 from '../../img/shop/img11.jpg';
import img12 from '../../img/shop/img12.jpg';
import img13 from '../../img/shop/img13.jpg';
import img14 from '../../img/shop/img14.jpg';
import img15 from '../../img/shop/img15.jpg';
import img16 from '../../img/shop/img16.jpg';
import img17 from '../../img/shop/img17.jpg';
import img18 from '../../img/shop/img18.jpg';
import img19 from '../../img/shop/img19.jpg';
import img20 from '../../img/shop/img20.jpg';
import img21 from '../../img/shop/img21.jpg';

const products = [
  { id: 1, name: 'Tasty Grilled Sandwich', price: 49.00, img: img1, category: 'fastfood' },
  { id: 2, name: 'Morning Breakfast', price: 60.00, img: img2, category: 'lunch/dinner' },
  { id: 3, name: 'Tuna Salad', price: 35.00, img: img3, category: 'salads' },
  { id: 4, name: 'Butter Coffee', price: 27.00, img: img4, category: 'drinks' },
  { id: 5, name: 'Diet Food', price: 26.00, img: img5, category: 'salads' },
  { id: 6, name: 'Special Cappuccino', price: 27.00, img: img6, category: 'drinks' },
  { id: 7, name: 'Multiple Drinks', price: 27.00, img: img7, category: 'drinks' },
  { id: 8, name: 'Black Coffee', price: 29.00, img: img8, category: 'drinks' },
  { id: 9, name: 'Gluten-Free Menu', price: 27.00, img: img9, category: 'lunch/dinner' },
  { id: 10, name: 'Gluten-Free Menu', price: 47.00, img: img10, category: 'lunch/dinner' },
  { id: 11, name: 'Pancakes', price: 27.00, img: img11, category: 'sweets' },
  { id: 12, name: 'Special Burger', price: 27.00, img: img12, category: 'fastfood' },
  { id: 13, name: 'Indian Cuisine', price: 67.00, img: img13, category: 'lunch/dinner' },
  { id: 14, name: 'Orange Pancake', price: 27.00, img: img14, category: 'sweets' },
  { id: 15, name: 'Crispy Fries', price: 77.00, img: img15, category: 'fastfood' },
  { id: 16, name: 'Dinner Menu', price: 87.00, img: img16, category: 'lunch/dinner' },
  { id: 17, name: 'Beef Burger for 2', price: 27.00, img: img17, category: 'fastfood' },
  { id: 18, name: 'Banana Pancakes', price: 97.00, img: img18, category: 'sweets' },
  { id: 19, name: 'Macrons', price: 27.00, img: img19, category: 'sweets' },
  { id: 20, name: 'Pizza', price: 39.00, img: img20, category: 'fastfood' },
  { id: 21, name: 'Salad', price: 56.00, img: img21, category: 'salads' },
];

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const productRefs = useRef([]);

  // Filter products based on the selected category
  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(product => product.category === selectedCategory);

  // Intersection Observer for animation
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1 // Trigger when 10% of the element is visible
    });

    // Observe the current product references
    productRefs.current.forEach((product) => {
      if (product) {
        observer.observe(product);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [filteredProducts]); // Only run this when filteredProducts change

  const handleAddToCart = (product) => {
    if (isLoggedIn) {
      dispatch(addItem(product));
      alert(`${product.name} added to your shopping bag.`);
    } else {
      navigate('/login');
    }
  };

  return (
    <div>
      <Mainnav />
      <div className="container-fluid shopmain mt-5">
        <div className="row">
          {/* Category Filter Sidebar */}
          <div className="col-lg-3 col-md-4 mb-4">
            <div className="category-sidebar">
              <h5>Filter by Category</h5>
              <ul className="list-unstyled">
                {['all', 'fastfood', 'sweets', 'drinks', 'lunch/dinner', 'salads'].map((category) => (
                  <li key={category}>
                    <button
                      onClick={() => setSelectedCategory(category)}
                      className={`btn ${selectedCategory === category ? 'active' : ''}`}
                    >
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Shop Label Div */}
          <div className="col-lg-8 col-md-7 mb-12">
            <div className="shop-label p-3 bg-light border rounded text-center">
              <h1 className="h3">Shop</h1>
              <p>
                <Link to="/">Home</Link>
              </p>
            </div>
          </div>

          {/* Products Section */}
          <div className="col-lg-12 col-md-12 product-cardmain ">
            <div className="row">
              {filteredProducts.map((product, index) => (
                <div
                  className="col-md-6 col-lg-4 mb-4 product-card"
                  key={product.id}
                  ref={el => productRefs.current[index] = el}
                >
                  <div className="card product-item h-100 position-relative">
                    <img src={product.img} className="card-img-top" alt={product.name} />
                    <div className="hover-overlay">
                      <button
                        onClick={() => handleAddToCart(product)}
                        className="btn btn-outline-warning shopping-bag-btn"
                      >
                        <i className="fa fa-shopping-bag" aria-hidden="true"></i> Add to Bag
                      </button>
                    </div>
                    <div className="card-body text-center">
                      <h5 className="card-title">{product.name}</h5>
                      <p className="card-text">£{product.price}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Shop;