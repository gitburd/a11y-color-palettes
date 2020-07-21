import React from 'react'
import {getColorSuggetions} from '../helpers/ColorSuggestions'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReactTooltip from 'react-tooltip';

const ContrastSuggestions = ({contrastColor, setPickerColor, palette}) => {
    var wcagContrast = require("wcag-contrast")
    const {hex} = contrastColor

    const suggestions = getColorSuggetions(contrastColor);
   
    const whiteHexContrast = wcagContrast.hex('#fff', hex);
    const blackHexContrast = wcagContrast.hex('#000', hex);
    const textHexColor = whiteHexContrast > blackHexContrast ? '#fff' : '#000'

    const onClick = (color) => {
        setPickerColor(color);
    }

    const onCopy = (c) =>{
        toast.dark(`Copied ${c}`)
    } 

    return (
        <div>
            {palette && palette.length > 0 && 
                <div>
                    <div 
                        style={{
                            backgroundColor: hex, 
                            color: textHexColor, 
                            padding: '5px 10px', 
                            fontSize: '12px'
                        }}
                    > 
                        <h1 style={{padding: '3px 15px', margin: '0'}}>Contrast: {hex}</h1>
                    </div>
                    <div className="contrast-grid">
                        {suggestions && suggestions.length > 0 && (
                        suggestions.map((c,idx) => (
                        <div 
                            key={idx} 
                            style={{
                                color:hex, 
                                backgroundColor:c, 
                                border:`1px solid ${hex}`, 
                                padding: '0 5px'
                            }}
                        >
                            <span 
                            style={{
                            float: 'right', 
                            display: 'block', 
                            fontSize: 'large', 
                            margin: '12px'
                            }}
                            >
                            <i
                            style={{padding: '0 7px'}}
                            onClick={()=>onClick(c)}
                            className="fa fa-eyedropper icon" data-tip="pick" aria-hidden="true"
                            >    
                            </i>
                            </span>
                            <CopyToClipboard text={c} onCopy={()=>onCopy(c)}>
                                <p style={{padding: '0 15px'}}>{c}{' '} 
                                <i className="fas fa-clone icon" data-tip="copy"></i></p>
                            </CopyToClipboard>
                         </div>
                        )))}
                    </div>
                    <ToastContainer
                        autoClose={3000}
                        position="top-center"
                    />
                    <ReactTooltip place='top' effect='solid'/>
            </div>
            }
        </div>
    )
}

export default ContrastSuggestions 