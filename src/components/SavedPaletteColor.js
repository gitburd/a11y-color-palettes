import React from 'react'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

var wcagContrast = require("wcag-contrast")

const SavedPaletteColor = ({hex}) => {
    
if(hex && hex !== null){
    let whiteHexContrast = wcagContrast.hex('#fff', hex);
    let blackHexContrast = wcagContrast.hex('#000', hex);
    let textHexColor = whiteHexContrast > blackHexContrast ? '#fff' : '#000';

    const onCopy = (hex) =>{
        toast.dark(`Copied ${hex}`);
    }

    return (
        <div>
           
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
            
        </div>
    )

} else return (<></>)

}

export default SavedPaletteColor;