// edit was in color 
// set as background 
// set as text color and pass back to app
import React, {useState} from 'react'
import {getRGB, getLuminacity, getHSL} from '../helpers/ColorConversions'
import {CopyToClipboard} from 'react-copy-to-clipboard';

var wcagContrast = require("wcag-contrast")

const Color = ({color, setBackgroundColor, setTextColor, deleteColor, setContrastColor, setPickerColor}) => { 
    const {hex} = color

    const getComplements = (color) => {
        setContrastColor(color);
    }

    const whiteHexContrast = wcagContrast.hex('#fff', hex);
    const blackHexContrast = wcagContrast.hex('#000', hex);
    const textHexColor = whiteHexContrast > blackHexContrast ? '#fff' : '#000'

    const onCopy = () =>{
        console.log('copied')
    } 

    return (
        <div>
            <div 
                style={{backgroundColor:hex, color:textHexColor, padding:'.1px 6px'}}
            >   
            <p style={{padding:'0 15px'}}>{hex}</p>
            <div className="btn-grid">
                <button
                    onClick={()=>setPickerColor(hex)}
                    className='color-btn'    
                >
                   Pick
                </button>
                <button
                    onClick={()=>getComplements(color)}
                    className='color-btn'
                >
                   Contrast
                </button>
                {/* <button
                    onClick={()=>setBackgroundColor(hex)}
                >
                    Background
                </button>
                <button
                    onClick={()=>setTextColor(hex)}
                >
                    Text Color
                </button> */}
                  <CopyToClipboard text={hex} onCopy={onCopy}>
                    <button
                        className='color-btn'
                    >
                    Copy
                    </button>
                  </CopyToClipboard>
                
                <button
                    onClick={()=>deleteColor(hex)}
                    className='color-btn'
                >
                   Delete
                </button>    
            </div>    
            </div>
        </div>
       
    )
}
export default Color