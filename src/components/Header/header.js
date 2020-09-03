import React from 'react';
import { Link } from 'gatsby';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
      <nav className="header_wrapper">
        <ul className="header_menu">
          <li className="header_item">
            <Link to="/">Process</Link>
          </li>
          <li className="header_item">
            <Link to="/about">ABOUT</Link>
          </li>
          <li className="header_item">
            <Link to="/portfolio">CONTACT</Link>
          </li>
        </ul>
      </nav>
      </div>
      <h1>devondemand</h1>

    </header>
  )
}

export default Header;