import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/home/Home';
import Login from './components/pages/login/Login';
import Shop from './components/pages/shop/Shop';
import Blog from './components/pages/blog/Blog';
import Portfolio from './components/pages/portfolio/Portfolio'; // Import Portfolio component
import Contact from './components/pages/contact/Contact'; // Import Contact component
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/shop" element={<Shop />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/portfolio" element={<Portfolio />} /> {/* Add Portfolio route */}
        <Route path="/contact" element={<Contact />} /> {/* Add Contact route */}
      </Routes>
    </div>
  );
}

export default App;
