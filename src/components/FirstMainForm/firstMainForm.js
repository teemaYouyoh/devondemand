import React, { useState }  from "react";
import { DropzoneArea } from 'material-ui-dropzone';
import "./firstMainForm.css";
import Checkbox from '@material-ui/core/Checkbox';
import CircleCheckedFilled from '@material-ui/icons/CheckCircle';
import CircleUnchecked from '@material-ui/icons/RadioButtonUnchecked';
import Button from '@material-ui/core/Button';
const FirstMainForm = () => {
    const [isFrontOnly, setFrontOnly] = useState(true);
    const [isShowFirst, setShowFirst] = useState("first");
    const getStarted = "get started";
    const continueLabel = "continue";
    return(
        <div className="wrapper_full_form">
            {isShowFirst === "first" &&
                <div className="development-form first-form">
                <div className="form_dev">
                        <h5>Let’s bring your design to life</h5>
                        <div className="from-section">
                        <span className="from-section__text">You are looking for</span>
                        <div className="form-tabs">
                            <button onClick={() => setFrontOnly(true)} className={isFrontOnly ? "form-tabs__active" : "no"}>Front Only</button>
                            <button onClick={() => setFrontOnly(false)} className={!isFrontOnly ? "form-tabs__active" : "no"}>Front + API</button>
                        </div>
                        <span className="from-section__text">Link to your design (you can also drag and drop a file)</span>
                        <input onDragOver={() => setShowFirst("third")} name="link" type="text" placeholder="Https://www.figmaorsketch.com/yourdesign" />
                        <span className="from-section__text">Number of pages</span>
                        <input name="pages" type="text" placeholder="3" />
                        <span className="from-section__text">Your e-mail</span>
                        <input name="email" type="text" placeholder="name@email.com" />
                        <Button onClick={() => setShowFirst("second")} variant="contained">{isFrontOnly ? getStarted : continueLabel}</Button>
                        </div>
                    </div>
                    <div className="development-footer">
                    <a href="#"><span>By clicking on the button, you agree to our Terms of Service and have read and acknowledge our Privacy Policy.</span></a>
                    </div>
               </div>
            }
            {
                isShowFirst === "second" &&
                <div className="development-form second-form">
                <form name="check" method="" action="">
                     <h5>Let’s bring your design to life</h5>
                     <a onClick={() => setShowFirst("first")} className="previous-step">Previous step</a>
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
            }
            { isShowFirst === "third" &&
                    <div className="development-form third-form">
                        <form name="drop" method="" action="">
                            <h5>Upload your files</h5>
                            <DropzoneArea acceptedFiles={['image/*']} dropzoneText={"Drag & Drop your files here"} onChange={(files) => console.log('Files:', files)}/>
                        </form>
                        <div className="development-footer">
                        <a href="#"><span>By clicking on the button, you agree to our Terms of Service and have read and acknowledge our Privacy Policy.</span></a>
                        </div>
                    </div> 

            }

            
            </div>
    )
}

export default FirstMainForm;