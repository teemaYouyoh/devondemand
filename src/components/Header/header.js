import React from 'react';
import { Link } from 'gatsby';
import "./header.css";
import CloseIcon from '@material-ui/icons/Close';
import Button from '@material-ui/core/Button';
import KissIcon from "./img/kiss.png";
import Logo from "./img/devondemand.png";
const Header = () => {
  return (
    <header className="header">
        <div className="discount_header">
          <div className="container">
          <div className="discount_wrapper">
            <h5 className="discount_info">Product Hunt launch : <span> get a $50 discount until September 13, 2020 <img src={KissIcon} className="kiss_icon" alt="kiss_icon"/></span> </h5>
            <div className="icon_discount">
              <CloseIcon className="icon_close" />
            </div>
          </div>
          </div>
      </div>
      <div className="container">
      <nav className="header_wrapper">
        <ul className="header_menu navigation">
          <li className="header_item logo">
            <Link to="/"><img src={Logo} alt="logo"/></Link>
          </li>
          <li className="header_item">
            <Link to="/">Process</Link>
          </li>
          <li className="header_item">
            <Link to="/about">Extensions</Link>
          </li>
          <li className="header_item">
            <Link to="/portfolio">Pricing</Link>
          </li>
          <li className="header_item">
            <Link to="/portfolio">Portfolio</Link>
          </li>
        </ul>
        <ul className="header_menu">
          {/* <button className="button_start">Start now</button> */}
          <Button className="button_start" variant="contained" color="primary">
            Start now
          </Button>
        </ul>
      </nav>
      </div>
      
    </header>
  )
}

export default Header;