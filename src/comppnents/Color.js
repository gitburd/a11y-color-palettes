// edit was in color 
// set as background 
// set as text color and pass back to app
import React, {useState} from 'react'
import {getRGB, getLuminacity, getHSL} from '../helpers/ColorConversions'
import {getColorSuggetions} from '../helpers/ColorSuggestions'
var wcagContrast = require("wcag-contrast")

const Color = ({color, setBackgroundColor, setTextColor}) => {
    const [complements, setComplements] = useState([])
    const [luminacity, setLuminacity] = useState(1)

    const getComplements = (color) => {
        let RGB = getRGB(color)
        let luminacity = getLuminacity(RGB)
        // console.log(luminacity)
        let HSL = getHSL(RGB)
        console.log('h',HSL)
        setComplements(getColorSuggetions(HSL), console.log(complements));
    }

    let textHexColor
    if (color[0]==='#'){
        const whiteHexContrast = wcagContrast.hex('#fff', color);
        const blackHexContrast = wcagContrast.hex('#000', color);
        textHexColor = whiteHexContrast > blackHexContrast ? '#fff' : '#000'
    }
    
    return (
        <div>
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
                <button
                    onClick={()=>getComplements(color)}
                    className='btn'
                >
                    Get complement
                </button>
            
            </div>

            <h1>complements</h1>

{complements && complements.length}
            {complements && complements.length > 0 && (
                complements.map(color => (
                    <div style={{backgroundColor:color}}>
                        COMP:
                        {color}
                    </div>
                ))    
            )}
            


        </div>
       
    )
}
export default Color