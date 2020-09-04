import React from 'react';
import { Link } from 'gatsby';
import "./header.css";
import CloseIcon from '@material-ui/icons/Close';
import Button from '@material-ui/core/Button';
import KissIcon from "./img/kiss.png";
import Logo from "./img/devondemand.png";
import github from "./img/github.svg";
import instagram from "./img/instagram.svg";
import twitter from "./img/twitter.svg";

const Header = () => {
  const container = document.querySelector(".mob-humburger");

  container.onclick = function(){
    container.classList.toggle("open");
  }
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
      <div className="mobile-menu">
      <input id="burger" type="checkbox" />

        <label className="mob-humburger" for="burger">
            <span></span>
            <span></span>
            <span></span>
        </label>
        <nav>    
          <ul>
              <li><a href="#"><img src={Logo} alt="logo"/></a></li>
              <li><a href="#">Process</a></li>
              <li><a href="#">Extensions</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Portfolio</a></li> 
              <li><Button className="button_start" variant="contained" color="primary">Start now</Button></li>
              <li><a href="#">Terms of service</a></li> 
              <li><a href="#">Privacy policy</a></li> 
              <div className="mobile-foor">
                  <img src={github} alt="github"/>
                  <img src={instagram} alt="instagram"/>
                  <img src={twitter} alt="twitter"/>
              </div>
              <li><span>© 2020, DEVONDEMAND.CO. All Rights Reserved.</span></li>
          </ul>  
        </nav>
      </div>
      </div>
      
    </header>
  )
}

export default Header;