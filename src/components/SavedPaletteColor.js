import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReactTooltip from 'react-tooltip';
import { useDispatch } from "react-redux";
import { addToPalette } from "../store/actions/paletteActions";

var wcagContrast = require("wcag-contrast")

const SavedPaletteColor = ({ hex }) => {
    const dispatch = useDispatch();

    if (hex && hex !== null) {
        let whiteHexContrast = wcagContrast.hex('#fff', hex);
        let blackHexContrast = wcagContrast.hex('#000', hex);
        let textHexColor = whiteHexContrast > blackHexContrast ? '#fff' : '#000';

        const onCopy = (hex) => {
            toast.dark(` ${hex} copied!`);
        }

        const add = (hex) => {
            toast.dark(` ${hex} added to palette!`)
            let color = { hex }
            dispatch(addToPalette(color));
        }

        return (
            <div style={{ backgroundColor: hex, color: textHexColor, padding: '.1px 6px' }}>
                <ReactTooltip place='top' effect='solid' />
                <span
                    style={{
                        float: 'right',
                        display: 'block',
                        fontSize: 'large',
                        margin: '12px'
                    }}
                >
                    <i className="fa fa-plus" data-tip="add to palette" onClick={() => add(hex)}></i>
                </span>
                <CopyToClipboard text={hex} onCopy={() => onCopy(hex)}>
                    <p
                        className='icon'
                        data-tip="copy"
                        style={{ padding: '0 15px' }}
                    >
                        {hex} <i className="fas fa-clone"></i>
                    </p>
                </CopyToClipboard>
            </div>
        )
    } else return (<></>)
}

export default SavedPaletteColor;