import React from "react";
import Logo from "./img/devondemand.png";
import { Link } from 'gatsby';
import Button from '@material-ui/core/Button';
import "./success.css";

const SuccessPage = () =>{
    return(
        <div className="success">
            <div className="container">
                <nav className="success_header">
                    <ul className="success_header-list">
                        <li className="success_header-item logo"><Link to="/"><img src={Logo} alt="logo"/></Link></li>
                        <li className="success_header-item">
                            <Button className="button_start" variant="contained" color="primary">
                            Make another order
                            </Button>
                        </li>
                    </ul>
                </nav>
            
                
            </div>
        </div>
    )
}

export default SuccessPage;