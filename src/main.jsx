import React, { Component } from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <div className="site-container">
    <Navbar /> 
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </div>
      </BrowserRouter>
  </React.StrictMode>
); 
