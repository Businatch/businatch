// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './containers/HomePage';
import AboutUsPage from './containers/AboutUsPage';
import ServicesPage from './containers/ServicesPage';
import PortfolioPage from './containers/PortfolioPage';
import ContactUsPage from './containers/ContactUsPage';
import FAQPage from './containers/FAQPage';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/faq" element={<FAQPage />} />
      </Routes>