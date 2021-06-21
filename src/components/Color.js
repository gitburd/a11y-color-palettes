/* eslint-disable indent */
import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReactTooltip from 'react-tooltip';
import { useDispatch } from "react-redux";
import { setContrastColor, setPickerColor } from "../store/actions/toolsActions";
import { savePalette, removeFromPalette } from "../store/actions/paletteActions"

const wcagContrast = require("wcag-contrast");

const Color = ({
    color,
    idx
}) => {

    const dispatch = useDispatch();
    const { hex } = color;

    const whiteHexContrast = wcagContrast.hex('#fff', hex);
    const blackHexContrast = wcagContrast.hex('#000', hex);
    const textHexColor = whiteHexContrast > blackHexContrast ? '#fff' : '#000';

    const onCopy = (hex) => {
        toast.dark(` ${hex} copied `);
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
                }}
            >
                <i
                    style={{ padding: '0 7px' }}
                    onClick={() => console.log(color)}
                    onClick={() => dispatch(setPickerColor(color))}
                    className="fa fa-eyedropper icon" aria-hidden="true"
                    data-tip="pick"
                ></i>
                <i style={{ padding: '0 7px' }}
                    onClick={() => dispatch(setContrastColor(color))}
                    className="fa fa-adjust icon" aria-hidden="true"
                    data-tip="contrast"
                ></i>
                <i style={{ padding: '0 7px' }}
                    onClick={() => dispatch(removeFromPalette(idx))}
                    className="fa fa-times icon"
                    aria-hidden="true"
                    data-tip="delete"
                ></i>
            </span>
            <CopyToClipboard text={hex} onCopy={() => onCopy(hex)}>
                <p
                    className='icon'
                    style={{ padding: '0 15px' }}
                >
                    {hex} <i data-tip="copy" className="fas fa-clone"></i>
                </p>
            </CopyToClipboard>
            <ReactTooltip place='top' effect='solid' />
        </div>
    );
};
export default Color;
