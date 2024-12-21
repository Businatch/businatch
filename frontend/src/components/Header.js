// Header.js
import React from 'react';

function Header() {
  return (
    <header>
      <h1>Businatch</h1>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/portfolio">Portfolio</a></li>
          <li><a href="/contact">Contact Us</a></li>
          <li><a href="/faq">FAQ</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;