/* eslint-disable indent */
import React from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const wcagContrast = require("wcag-contrast");

const Color = ({
    color,
    deleteColor, 
    setContrastColor,
    setPickerColor,
    idx
    }) => { 
    const {hex} = color;

    const getComplements = (color) => {
        setContrastColor(color);
    };

    const whiteHexContrast = wcagContrast.hex('#fff', hex);
    const blackHexContrast = wcagContrast.hex('#000', hex);
    const textHexColor = whiteHexContrast > blackHexContrast ? '#fff' : '#000';

    const onCopy = (hex) =>{
        toast.dark(`Copied ${hex}`);
    } 

    return (
        <div
        style={{
            backgroundColor: hex,
            color: textHexColor,
            padding: '0.02px',
            borderBottom: '1px solid black'
        }}
        >
           <span
            style={{
                float: 'right',
                display: 'block',
                fontSize: 'large',
                margin: '12px'
            }}>
                <i
                    style={{padding: '0 7px'}}
                    onClick={()=>setPickerColor(hex)}
                    className="fa fa-eyedropper icon" aria-hidden="true"
                ></i>
                <i style={{padding: '0 7px'}} 
                    onClick={()=>getComplements(color)} 
                    className="fa fa-adjust icon" aria-hidden="true"
                ></i>
                <i style={{padding: '0 7px'}}
                    onClick={()=>deleteColor(idx)}
                    className="fa fa-times icon"
                    aria-hidden="true"
                ></i>
            </span>
            <CopyToClipboard text={hex} onCopy={()=>onCopy(hex)}>
                <p
                className='icon' 
                style={{padding: '0 15px'}}
                >
                    {hex} <i className="fas fa-clone"></i>
                </p>
            </CopyToClipboard>
            <ToastContainer
                autoClose={3000}
                position="top-center"
            />
        </div>
    );
};
export default Color;
