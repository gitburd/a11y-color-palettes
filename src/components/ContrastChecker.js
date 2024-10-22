import React from 'react'
import { useSelector, shallowEqual } from "react-redux";

var wcagContrast = require("wcag-contrast")

const ContrastChecker = () => {
    const { backgroundColor, textColor } = useSelector(
        (state) => ({
          textColor: state.tools.textColor,
          backgroundColor: state.tools.backgroundColor,
        }),
        shallowEqual
      );

    const res = wcagContrast.hex(backgroundColor.hex, textColor.hex).toFixed(2);
    const headerContrastAAA = res >= 4.5 ? `✅` : `❌`
    const boldContrastAAA = res >= 4.5 ? `✅` : `❌`
    const smallContrastAAA = res >= 7.1 ? `✅` : `❌`
    
    const headerContrastAA = res >=  3.1 ? `✅` : `❌`
    const boldContrastAA = res >= 3.1 ? `✅` : `❌`
    const smallContrastAA = res >= 4.5 ? `✅` : `❌`

    return (
        <section className='example-text'>
            <article style={{borderBottom: '1px solid #181416'}}>
                <div style={{padding: '10px 20px', borderBottom: '1px solid #181416'}}>
                    <h1 style={{paddingBottom: '5px', margin: '0'}}>Contrast Checker</h1>
                    <span className='checker-emoji'>Background: {backgroundColor.hex} </span>
                    <span className='checker-emoji'>Text: {textColor.hex} </span>
                    <span className='checker-emoji'>Contrast: {res} </span>
                </div>
                <div style={{padding: '2px 20px'}}>
                    <span>AA Standards : </span>
                    <span className='checker-emoji'>{headerContrastAA} Large & Bold Text </span> 
                    <span className='checker-emoji'> {smallContrastAA} Small Text </span>
                </div>
                <div style={{padding: '2px 20px'}}>
                    <span>AAA Standards : </span>
                    <span className='checker-emoji'>{headerContrastAAA} Large & Bold Text </span> 
                    <span className='checker-emoji'> {smallContrastAAA} Small Text </span>
                </div>
            </article>
            <article style={{backgroundColor: backgroundColor.hex, color: textColor.hex, minHeight: '40vh', margin: '0', padding: '15px'}}>
                <h1 style={{marginTop: '0'}}> The quick brown fox jumps over the lazy dog</h1>
                <p styel={{fontSize: '16px'}}><b>The quick brown fox jumps over the lazy dog</b></p>
                <p styel={{fontSize: '14px'}}>The quick brown fox jumps over the lazy dog</p>
            </article>
        </section>
    )
}

export default ContrastChecker
