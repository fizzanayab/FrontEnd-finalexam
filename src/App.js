import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/home/Home';
import Login from './components/pages/login/Login'
import Shop from './components/pages/shop/Shop';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/shop" element={<Shop />} /> 
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
         
