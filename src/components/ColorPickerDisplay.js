import React from 'react'
import {CopyToClipboard} from 'react-copy-to-clipboard';

const ColorPickerDisplay = ({color, setBackgroundColor, setTextColor, addToPalette, newColor }) => {
    const onCopy = () =>{
        console.log('copied')
    } 
    return (
        <div>
            <h1 style={{padding:'5px 20px', margin:'0'}}>Tools</h1>
            <div className='btn-grid'>
                <p className='display-btn' onClick={() => setBackgroundColor(color)}>Backgorund</p>
                <p className='display-btn' onClick={() => setTextColor(color)}>Text Color</p>
                <p className='display-btn' onClick={() => addToPalette(newColor)}>Add to Palette</p>
                <CopyToClipboard text={color} onCopy={onCopy}>
                    <p className='display-btn' onClick={()=> console.log('copy')}>Copy</p>
                </CopyToClipboard>
            </div>
        </div>
    )
}

export default ColorPickerDisplay 
