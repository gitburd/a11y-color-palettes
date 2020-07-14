// edit was in color 
// set as background 
// set as text color and pass back to app
import React from 'react'
var wcagContrast = require("wcag-contrast")

const Color = ({color, setBackgroundColor, setTextColor}) => {
    let textHexColor
    if (color[0]==='#'){
        const whiteHexContrast = wcagContrast.hex('#fff', color);
        const blackHexContrast = wcagContrast.hex('#000', color);
        textHexColor = whiteHexContrast > blackHexContrast ? '#fff' : '#000'
    }
    
    return (
        <div 
            style={{backgroundColor:color, color:textHexColor, padding:'10px 20px'}}
        >
            <p>{color}</p>
            <button
                onClick={()=>setBackgroundColor(color)}
                className='btn'
            >Background</button>
            <button
             onClick={()=>setTextColor(color)}
             className='btn'
            >Text Color</button>
            
        </div>
    )
}
export default Color