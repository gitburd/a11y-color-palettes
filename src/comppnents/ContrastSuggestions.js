import React from 'react'
import {getColorSuggetions} from '../helpers/ColorSuggestions'
import {getRGB, getLuminacity, getHSL} from '../helpers/ColorConversions'

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
            <div style={{backgroundColor:contrastColor.hex, color:textHexColor, padding:'10px', width:'400px100%'}}>{contrastColor.hex}</div>
            <div className="contrast-grid">
                {suggestions && suggestions.length > 0 && (
                suggestions.map(color => (
                    <div 
                        style={{color:contrastColor.hex, backgroundColor:color, border:`1px solid ${contrastColor.hex}`, padding:'10px'}}
                        onClick = {()=>onClick(color)}
                    >
                        {color}
                    </div>
                    ))
                )}
            </div>
            
        </div>
    )
}

export default ContrastSuggestions 