import React from 'react'
import {CopyToClipboard} from 'react-copy-to-clipboard';

const ColorPickerDisplay = ({color, setBackgroundColor, setTextColor, addToPalette, newColor }) => {
    const onCopy = () =>{
        console.log('copied')
    } 
    return (
        <div className='btn-grid'>
            <button className='display-btn' onClick={() => setBackgroundColor(color)}>Backgorund</button>
            <button className='display-btn' onClick={() => setTextColor(color)}>Text Color</button>
            <button className='display-btn' onClick={() => addToPalette(newColor)}>Add to Palette</button>
            <CopyToClipboard text={color} onCopy={onCopy}>
                <button className='display-btn' onClick={()=> console.log('copy')}>Copy</button>
            </CopyToClipboard>
        </div>
    )
}

export default ColorPickerDisplay 
