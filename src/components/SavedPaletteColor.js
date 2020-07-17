import React from 'react'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

var wcagContrast = require("wcag-contrast")

const SavedPaletteColor = ({color}) => {
    const {hex} = color

    const whiteHexContrast = wcagContrast.hex('#fff', hex);
    const blackHexContrast = wcagContrast.hex('#000', hex);
    const textHexColor = whiteHexContrast > blackHexContrast ? '#fff' : '#000';
    
    const onCopy = (hex) =>{
        toast.dark(`Copied ${hex}`);
    }

    return (
        <div>
             <div 
                style={{backgroundColor: hex, color: textHexColor, padding: '.1px 6px'}}
            >   
                <CopyToClipboard text={hex} onCopy={()=>onCopy(hex)}>
                    <p className='icon' style={{padding: '0 15px'}}>{hex} <i className="fas fa-clone"></i></p>
                </CopyToClipboard>  
            </div>
            <ToastContainer
                autoClose={3000} 
                position="top-center"
            />
        </div>
    )
}

export default SavedPaletteColor;