import React, {useState} from 'react'
import { SketchPicker, ChromePicker} from 'react-color'

const ColorPicker = ({setPickerColor, pickerColor}) => {
  const [background, setBackground] = useState(pickerColor)
  const  handleChangeComplete = (color) => {
    setBackground(color.hex);
  };

      return (
        <SketchPicker
          color={ background }
          onChange={ handleChangeComplete }
        />
      );
    
}

export default ColorPicker