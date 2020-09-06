import React, { useState }  from "react";
import "./firstMainForm.css";
import Button from '@material-ui/core/Button';
const FirstMainForm = () => {
    return(
        <div className="development-form first-form">
        <form name="design" method="" action="">
                <h5>Let’s bring your design to life</h5>
                <div className="from-section">
                <span className="from-section__text">You are looking for</span>
                <div className="form-tabs">
                    <button className="form-tabs__active">Front Only</button>
                    <button>Front + API</button>
                </div>
                <span className="from-section__text">Link to your design (you can also drag and drop a file)</span>
                <input name="link" type="text" placeholder="Https://www.figmaorsketch.com/yourdesign" />
                <span className="from-section__text">Number of pages</span>
                <input name="pages" type="text" placeholder="3" />
                <span className="from-section__text">Your e-mail</span>
                <input name="email" type="text" placeholder="name@email.com" />
                <Button variant="contained">get started</Button>
                </div>
            </form>
            <div className="development-footer">
            <a href="#"><span>By clicking on the button, you agree to our Terms of Service and have read and acknowledge our Privacy Policy.</span></a>
            </div>
       </div>
    )
}

export default FirstMainForm;