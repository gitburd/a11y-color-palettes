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
        newColor,
        palette
    }) => {
    const onCopy = (hex) =>{
        toast.dark(`Copied ${hex}`);
    }
    const addBtnClass = palette && palette.length > 0 ? 'display-btn' : 'btn-pulse'
    return (
        <section>
            <h1 style={{padding: '5px 20px', margin: '0'}}>Tools</h1>
            <article className='btn-grid'>
                <p className='display-btn' onClick={() => setBackgroundColor(color)}>Backgorund</p>
                <p className='display-btn' onClick={() => setTextColor(color)}>Text Color</p>
                <p className={addBtnClass} onClick={() => addToPalette(newColor)}>Add to Palette</p>
                <CopyToClipboard text={color} onCopy={(color)=>onCopy(color)}>
                    <p className='display-btn' onClick={(color)=> console.log(color)}>Copy</p>
                </CopyToClipboard>
            </article>
            <ToastContainer
                autoClose={3000}
                position="top-center"
            />
        </section>
    );
};

export default ColorPickerDisplay;
