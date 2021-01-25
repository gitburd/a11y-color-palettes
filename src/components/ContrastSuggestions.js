import React from 'react'
import {getColorSuggetions} from '../helpers/ColorSuggestions'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReactTooltip from 'react-tooltip';

const ColorTemplate  = ({c, hex, onClick, onCopy}) =>{
    return (
        <div
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
    )
}

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

    let warningHex;
    if(suggestions && suggestions.length === 3){
        warningHex = suggestions[0]==="#000000" ? "#ffffff" : "#000000"
    }

    return (
        <section>
        {palette && palette.length > 0 && 
            <>
                <h1 
                    style={{
                    backgroundColor: hex, 
                    color: textHexColor, 
                    padding: '10px', 
                    fontSize: '24px',
                    margin:'0'
                    }}
                >Contrast: {hex}</h1>
                <article className="contrast-grid">
                    {suggestions && suggestions.length > 0 && suggestions.length !== 3 &&(
                        suggestions.map((c,idx) => (
                            <ColorTemplate key={idx} c={c} hex={hex} onClick={onClick} onCopy={onCopy}/>
                        
                    )))}
                    {suggestions && suggestions.length === 3 &&(
                        <>
                        <ColorTemplate key={0} c={suggestions[0]} hex={warningHex} onClick={onClick} onCopy={onCopy}/>
                        <br/>
                        <p style={{paddingLeft:'10px'}}>WARNING: Low contrast color selected. For more matches consider:</p>
                        <br/>
                        <ColorTemplate key={1} c={suggestions[1]} hex={"#fff"} onClick={onClick} onCopy={onCopy}/>
                        <ColorTemplate key={2} c={suggestions[2]} hex={"#fff"} onClick={onClick} onCopy={onCopy}/>
                        </>

                    )}
                </article>
                <ToastContainer
                    autoClose={3000}
                    position="top-center"
                />
                <ReactTooltip place='top' effect='solid'/>
            </>
        }
        </section>
    )
}

export default ContrastSuggestions 