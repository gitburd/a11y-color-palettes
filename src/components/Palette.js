import React from 'react';
import Color from './Color'
const Palette = ({palette, setContrastColor, setPickerColor, deleteColor}) => {
  if(!palette || palette.length === 0){
    return(
      <div style={{padding:'0 20px'}}>
        <h1 style={{padding:'5px 0', margin:'0'}}>Palette</h1>
        <div style={{textAlign:'center', fontWeight:'bold'}}>
          <p>Your Palette is empty.</p>
          <p> Use the color picker to add colors.</p>
        </div>
      </div>
    )
  }  
  
  return (
    <div>
      <h1 style={{padding:'5px 20px', margin:'0'}}>Palette</h1>
      {palette && palette.length > 0 &&
      (
        palette.map((color, idx) => (
          <Color 
              key={idx} 
              color={color}
              setContrastColor = {setContrastColor}
              setPickerColor = {setPickerColor} 
              deleteColor = {deleteColor}
          />
        ))
      )}        
    </div>
  )
}
export default Palette;