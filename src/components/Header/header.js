import React from 'react';
import { Link } from 'gatsby';
import "./header.css";
import CloseIcon from '@material-ui/icons/Close';


const Header = () => {
  return (
    <header className="header">
        <div className="discount_header">
          <div className="container">
          <div className="discount_wrapper">
            <h5 className="discount_info">Product Hunt launch : get a $50 discount until September 13, 2020 😘</h5>
            <div className="icon_discount">
              <CloseIcon className="icon_close" />
            </div>
          </div>
          </div>
      </div>
      <div className="container">
      <nav className="header_wrapper">
        <ul className="header_menu">
          <li className="header_item logo">
            <Link to="/">devondemand</Link>
          </li>
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
        <ul className="header_menu">
          <button className="button_start">Start now</button>
        </ul>
      </nav>
      </div>

    </header>
  )
}

export default Header;