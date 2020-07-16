// edit was in color 
// set as background 
// set as text color and pass back to app
import React, {useState} from 'react'
import {getRGB, getLuminacity, getHSL} from '../helpers/ColorConversions'

var wcagContrast = require("wcag-contrast")

const Color = ({color, setBackgroundColor, setTextColor, setContrastColor}) => { 

    const getComplements = (color) => {
        // let RGB = getRGB(color)
        // let luminacity = getLuminacity(RGB)
        // // console.log(luminacity)
        // let HSL = getHSL(RGB)
        // console.log('h',HSL)
        setContrastColor(color);
    }

    const whiteHexContrast = wcagContrast.hex('#fff', color.hex);
    const blackHexContrast = wcagContrast.hex('#000', color.hex);
    const textHexColor = whiteHexContrast > blackHexContrast ? '#fff' : '#000'
    
    return (
        <div>
            <div 
                style={{backgroundColor:color.hex, color:textHexColor, padding:'10px 20px'}}
            >
                <p>{color.hex}</p>
                <button
                    onClick={()=>setBackgroundColor(color.hex)}
                    className='btn'
                >Background</button>
                <button
                    onClick={()=>setTextColor(color.hex)}
                    className='btn'
                >Text Color</button>
                <button
                    onClick={()=>getComplements(color)}
                    className='btn'
                >
                   Contrast
                </button>
            
            </div>
        </div>
       
    )
}
export default Color