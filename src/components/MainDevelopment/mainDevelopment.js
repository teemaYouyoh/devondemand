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
import FirstMainForm from "../FirstMainForm/firstMainForm.js";
import SecondMainForm from "../SecondMainForm/secondMainForm.js";
import ThirdMainForm from "../ThirdMainForm/trindMainForm.js";


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
               {/* FIRST FORM - STEP 1 */}
               {/* <FirstMainForm /> */}

               {/* SECOND FORM - STEP 2 */}
               {/* <SecondMainForm /> */}

               {/* THIRD FORM - STEP 3 */}
               <ThirdMainForm />
           </div>
       </div>
   </div>
  )
}

export default MainDevelopment;