import React from 'react'


const ColorPickerDisplay = ({color, setBackgroundColor, setTextColor, toggleShowColorPicker }) => {
    return (
        <div className='btn-grid'>
            <button className='display-btn' onClick={()=>setBackgroundColor(color)}>Backgorund</button>
            <button className='display-btn' onClick={()=> setTextColor(color)}>Text Color</button>
            <button className='display-btn' onClick={()=>console.log('add to palette')}>Add to Palette</button>
            <button className='display-btn' onClick={()=> console.log('copy')}>Copy</button>
            {/* <button onClick={()=>toggleShowColorPicker()}>Close</button> */}
        </div>
    )
}

export default ColorPickerDisplay 
