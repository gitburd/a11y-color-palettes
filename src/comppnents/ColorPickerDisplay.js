import React from 'react'
import {CopyToClipboard} from 'react-copy-to-clipboard';

const ColorPickerDisplay = ({color, setBackgroundColor, setTextColor, toggleShowColorPicker }) => {
    const onCopy = () =>{
        console.log('copied')
    } 
    return (
        <div className='btn-grid'>
            <button className='display-btn' onClick={()=>setBackgroundColor(color)}>Backgorund</button>
            <button className='display-btn' onClick={()=> setTextColor(color)}>Text Color</button>
            <button className='display-btn' onClick={()=>console.log('add to palette')}>Add to Palette</button>
            <CopyToClipboard text={color} onCopy={onCopy}>
                <button className='display-btn' onClick={()=> console.log('copy')}>Copy</button>
            </CopyToClipboard>
           
            {/* <button onClick={()=>toggleShowColorPicker()}>Close</button> */}
        </div>
    )
}

export default ColorPickerDisplay 
