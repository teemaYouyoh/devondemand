import React from 'react';
import { Link } from 'gatsby';
// import { Button } from 'gatsby';
import "./mainDevelopment.css";


const MainDevelopment = () => {
  return (
   <div className="development">
       <div className="container">
           <div className="development-wrapper">
               <div className="development-info">
                   <h2>Front end development on demand</h2>
                   <p>Attract talent with beautiful job posts and manage candidates in an easy-to-use and powerful tool.</p>
                    <ul>
                        <li>Delivery in 3 business days</li>
                        <li>No contract</li>
                    </ul>
               </div>
               <div className="development-form">
               <form name="design" method="" action="">
                    <h5>Let’s bring your design to life</h5>
                    <div className="from-section">
                    <span>You are looking for</span>
                    <div className="form-tabs">
                        <button className="form-tabs__active">Front Only</button>
                        <button>Front + API</button>
                    </div>
                    <span>Link to your design (you can also drag and drop a file)</span>
                    <input name="link" type="text" value="Https://www.figmaorsketch.com/yourdesign" />
                    <span>Number of pages</span>
                    <input name="pages" type="text" value="3" />
                    <span>Your e-mail</span>
                    <input name="email" type="text" value="name@email.com" />
                    {/* <Button variant="contained">Default</Button> */}
                    </div>
                </form>
               </div>
           </div>
       </div>
   </div>
  )
}

export default MainDevelopment;