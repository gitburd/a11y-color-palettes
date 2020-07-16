import React from 'react'
import {getColorSuggetions} from '../helpers/ColorSuggestions'
// import {getRGB, getLuminacity, getHSL} from '../helpers/ColorConversions'

const ContrastSuggestions = ({contrastColor, setPickerColor, toggleShowColorPicker}) => {
    var wcagContrast = require("wcag-contrast")
    const {hsl, rgb, hex} = contrastColor

    const suggestions = getColorSuggetions(hsl);
   
    const whiteHexContrast = wcagContrast.hex('#fff', contrastColor.hex);
    const blackHexContrast = wcagContrast.hex('#000', contrastColor.hex);
    const textHexColor = whiteHexContrast > blackHexContrast ? '#fff' : '#000'

    const onClick = (color) => {
        setPickerColor(color);
    }

    return (
        <div >
            <div style={{backgroundColor:hex, color:textHexColor, padding:'5px 10px', fontSize:'12px'}}> <h2>Contrast: {hex}</h2></div>
            <div className="contrast-grid">
                {suggestions && suggestions.length > 0 && (
                suggestions.map(color => (
                    
                    <div 
                        style={{color:hex, backgroundColor:color, border:`1px solid ${hex}`, padding:'10px'}}
                    >
                        {color}
                        <button 
                            className='color-btn'  
                            style={{width:'40%', float:'right'}}
                            onClick = {()=>onClick(color)}
                        >
                            Pick
                        </button>
                    </div>
                    ))
                )}
            </div>
            
        </div>
    )
}

export default ContrastSuggestions 