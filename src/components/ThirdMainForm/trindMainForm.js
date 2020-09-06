import React, { useState }  from "react";
import { DropzoneArea } from 'material-ui-dropzone';
const ThirdMainForm = () => {
    return(
        <div className="development-form third-form">
            <form name="drop" method="" action="">
                <h5>Upload your files</h5>
                <DropzoneArea acceptedFiles={['image/*']} dropzoneText={"Drag & Drop your files here"} onChange={(files) => console.log('Files:', files)}/>
            </form>
            <div className="development-footer">
            <a href="#"><span>By clicking on the button, you agree to our Terms of Service and have read and acknowledge our Privacy Policy.</span></a>
            </div>
        </div> 
    )
}

export default ThirdMainForm;