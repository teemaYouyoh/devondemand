import React from 'react';
import { Link } from 'gatsby';
import Button from '@material-ui/core/Button';
import Alert from '@material-ui/lab/Alert';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Collapse from '@material-ui/core/Collapse';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CircleChecked from '@material-ui/icons/CheckCircleOutline';
import CircleCheckedFilled from '@material-ui/icons/CheckCircle';
import CircleUnchecked from '@material-ui/icons/RadioButtonUnchecked';
import { DropzoneArea } from 'material-ui-dropzone';
import "./mainDevelopment.css";
import listIcon from "./img/main-list.svg";
import folder from "./img/folder.svg";


const MainDevelopment = () => {
  const [open, setOpen] = React.useState(true);
  return (
   <div className="development">
       <div className="container">
           <div className="development-wrapper">
               <div className="development-info">
                   <h2>Front end development on demand</h2>
                   <p>Attract talent with beautiful job posts and manage candidates in an easy-to-use and powerful tool.</p>
                    <ul>
                        <li>
                            <img src={listIcon} alt="list"/>
                            <span>Delivery in 3 business days</span>
                        </li>
                        <li>
                            <img src={listIcon} alt="list"/>
                            <span>No contract</span>
                        </li>
                    </ul>
                    <Collapse in={open}>
                        <Alert action={
                            <IconButton aria-label="close" color="inherit" size="small" onClick={() => {
                                    setOpen(false);
                                }}>
                                <CloseIcon fontSize="inherit" />
                            </IconButton>
                            }>
                        By using this website, you agree to our <a href="#">cookie policy</a>
                        </Alert>
                    </Collapse>
               </div>
               {/* <div className="development-form first-form">
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
               </div> */}
               <div className="development-form second-form">
               <form name="check" method="" action="">
                    <h5>Let’s bring your design to life</h5>
                    <a className="previous-step" href="#">Previous step</a>
                    <div className="development-form__header">
                        <p>Choose the APIs to integrate</p>
                        <p>We charge $200 per connection</p>
                    </div>
                    <div className="form-check">
                        <div className="form-check__choose">
                            <Checkbox icon={<CircleUnchecked />} checkedIcon={<CircleCheckedFilled />}/>
                            <p>Connect Stripe</p>
                            <span>+2 business days</span>
                        </div>
                        <a href="#">stripe</a>
                    </div>
                    <div className="form-check">
                        <div className="form-check__choose">
                            <Checkbox icon={<CircleUnchecked />} checkedIcon={<CircleCheckedFilled />}/>
                            <p>Connect Stripe</p>
                            <span>+2 business days</span>
                        </div>
                        <a href="#">stripe</a>
                    </div>
                    <div className="form-check">
                        <div className="form-check__choose">
                            <Checkbox icon={<CircleUnchecked />} checkedIcon={<CircleCheckedFilled />}/>
                            <p>Connect Stripe</p>
                            <span>+2 business days</span>
                        </div>
                        <a href="#">stripe</a>
                    </div>
                    <div className="form-check">
                        <div className="form-check__choose">
                            <Checkbox icon={<CircleUnchecked />} checkedIcon={<CircleCheckedFilled />}/>
                            <p>Connect Stripe</p>
                            <span>+2 business days</span>
                        </div>
                        <a href="#">stripe</a>
                    </div>
                    <div className="form-check">
                        <div className="form-check__choose">
                            <Checkbox icon={<CircleUnchecked />} checkedIcon={<CircleCheckedFilled />}/>
                            <p>Connect Stripe</p>
                            <span>+2 business days</span>
                        </div>
                        <a href="#">stripe</a>
                    </div>
                    <div className="form-check">
                        <div className="form-check__choose">
                            <Checkbox icon={<CircleUnchecked />} checkedIcon={<CircleCheckedFilled />}/>
                            <p>Connect Stripe</p>
                            <span>+2 business days</span>
                        </div>
                        <a href="#">stripe</a>
                    </div>
                    <Button variant="contained">get started</Button>
                </form>
                <div className="development-footer">
                   <a href="#"><span>By clicking on the button, you agree to our Terms of Service and have read and acknowledge our Privacy Policy.</span></a>
                </div>
               </div>
               {/* <div className="development-form third-form">
                    <form name="drop" method="" action="">
                        <h5>Upload your files</h5>
                        <DropzoneArea acceptedFiles={['image/*']} dropzoneText={"Drag & Drop your files here"} onChange={(files) => console.log('Files:', files)}/>
                    </form>
                    <div className="development-footer">
                    <a href="#"><span>By clicking on the button, you agree to our Terms of Service and have read and acknowledge our Privacy Policy.</span></a>
                    </div>
               </div>  */}
           </div>
       </div>
   </div>
  )
}

export default MainDevelopment;