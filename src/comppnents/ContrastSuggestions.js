import React from 'react'
import {getColorSuggetions} from '../helpers/ColorSuggestions'
import {getRGB, getLuminacity, getHSL} from '../helpers/ColorConversions'

const ContrastSuggestions = ({contrastColor}) => {
    var wcagContrast = require("wcag-contrast")

    let RGB = getRGB(contrastColor);
    // let luminacity = getLuminacity(RGB);
    let HSL = getHSL(RGB);
    const suggestions = getColorSuggetions(HSL);

    let textHexColor
    if (contrastColor[0]==='#'){
        const whiteHexContrast = wcagContrast.hex('#fff', contrastColor);
        const blackHexContrast = wcagContrast.hex('#000', contrastColor);
        textHexColor = whiteHexContrast > blackHexContrast ? '#fff' : '#000'
    }
    return (
        <div >
            <div style={{backgroundColor:contrastColor, color:textHexColor, padding:'10px', width:'400px100%'}}>{contrastColor}</div>
            <div className="contrast-grid">
                {suggestions && suggestions.length > 0 && (
                suggestions.map(color => (
                            <div style={{backgroundColor:color, color:contrastColor, border:`1px solid ${contrastColor}`, padding:'10px'}}>
                                {color}
                            </div>
                    ))
                )}
            </div>
            
        </div>
    )
}

export default ContrastSuggestions 