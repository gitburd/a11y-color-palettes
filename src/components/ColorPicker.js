import React, {useState} from 'react';
import {SketchPicker} from 'react-color';

const ColorPicker = ({pickerColor}) => {
  const [background, setBackground] = useState(pickerColor);
  const handleChangeComplete = (color) => {
    setBackground(color.hex);
  };

    return (
      <SketchPicker
        color={ background }
        onChange={ handleChangeComplete }
        disableAlpha={true}
      />
    );
    
}

export default ColorPicker;