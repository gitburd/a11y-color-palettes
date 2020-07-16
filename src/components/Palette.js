import React from 'react';
import Color from './Color'
const Palette = ({palette, setContrastColor, setPickerColor, deleteColor}) => {
    return (
      <div>
          <h1>Palette</h1>
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