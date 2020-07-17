import React from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ColorPickerDisplay = (
    {
        color,
        setBackgroundColor,
        setTextColor,
        addToPalette,
        newColor
    }) => {
    const onCopy = (hex) =>{
        toast.dark(`Copied ${hex}`);
    }
    return (
        <div>
            <h1 style={{padding: '5px 20px', margin: '0'}}>Tools</h1>
            <div className='btn-grid'>
                <p className='display-btn' onClick={() => setBackgroundColor(color)}>Backgorund</p>
                <p className='display-btn' onClick={() => setTextColor(color)}>Text Color</p>
                <p className='display-btn' onClick={() => addToPalette(newColor)}>Add to Palette</p>
                <CopyToClipboard text={color} onCopy={(color)=>onCopy(color)}>
                    <p className='display-btn' onClick={(color)=> console.log(color)}>Copy</p>
                </CopyToClipboard>
            </div>
            <ToastContainer
                autoClose={3000}
                position="top-center"
            />
        </div>
    );
};

export default ColorPickerDisplay;
