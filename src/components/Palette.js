import React from 'react';
import Color from './Color';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Palette = ({
  palette,
  savePalette,
  setContrastColor,
  setPickerColor,
  deleteColor}) => {

  if(!palette || palette.length === 0) {
    return (
      <div style={{padding: '20px', boxShadow: '5px 5px 5px 5px #aaaaaa', margin: '40px auto', width: '85%'}}>
        <div style={{textAlign: 'center', fontWeight: 'bold'}}>
          <h2>Your Palette is empty.</h2>
          <h2> Use the color picker get started.</h2>
          <i style={{animation: 'slide1 1s ease-in-out infinite', fontSize: '60px'}} className="fa fa-long-arrow-right arrow1" aria-hidden="true"></i>
        </div>
      </div>
    );
  }
  const onSave = (palette) =>{
    savePalette(palette);
    toast.dark(`Palette Saved`);
  }   
  return (
    <div>
      <h1 style={{padding: '5px 20px', margin: '0'}}>
        Palette {' '}
        <i 
          onClick={()=>onSave(palette)} 
          className="fa fa-floppy-o icon" aria-hidden="true"
        ></i>
      </h1>
     
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
      <ToastContainer
        autoClose={3000}
        position="top-center"
      />
    </div>
  )
}

export default Palette;