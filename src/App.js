// src/App.js
import React from 'react';
import {  Routes, Route } from 'react-router-dom';
import Home from './components/pages/home/Home';
import Portfolio from './components/pages/portfolio/Portfolio';
import Blog from './components/pages/blog/Blog';
import Shop from './components/pages/shop/Shop';
import Contact from './components/pages/contact/Contact';
import Login from './components/pages/login/Login';
import ShoppingBag from './components/pages/shoppingbag/ShoppingBag'; 
import BlogDetail from './components/pages/blog/BlogDetail';
import PortfolioDetails from './components/pages/portfolio/PortfolioDetails';

const App = () => {
  return (
    
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/:id" element={<PortfolioDetails />} /> 
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/shoppingbag" element={<ShoppingBag items={[]} />} /> {/* Add ShoppingBag route */}
      </Routes>
   
  );
};

export default App;
