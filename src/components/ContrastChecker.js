import React, { Component } from 'react'
var wcagContrast = require("wcag-contrast")

const ContrastChecker = ({backgroundColor, textColor}) => {
    // render() {
        const res = wcagContrast.hex(backgroundColor, textColor).toFixed(2);
        // const score = wcagContrast.score(res);
        const headerContrastAAA = res > 4.5 ? `✅` : `❌`
        const boldContrastAAA = res > 4.5 ? `✅` : `❌`
        const smallContrastAAA = res > 7.1 ? `✅` : `❌`
        
        const headerContrastAA = res >  3.1 ? `✅` : `❌`
        const boldContrastAA = res > 3.1 ? `✅` : `❌`
        const smallContrastAA = res > 4.5 ? `✅` : `❌`

        return (
            <div className='example-text' >
                <div style={{borderBottom:'2px solid'}}>
                    <div style={{padding:'10px 20px', borderBottom:'1px solid'}}>
                        <span className='checker-emoji'>Background Color: {backgroundColor} </span> 
                        <span className='checker-emoji'>Text Color: {textColor} </span>
                        <span className='checker-emoji'>Contrast {res} </span>
                    </div>
                    <div style={{padding:'2px 20px' }}>
                        <span>AA Standards : </span>
                        <span className='checker-emoji'>{headerContrastAA} Large & Bold Text </span> 
                        <span className='checker-emoji'> {smallContrastAA} Small Text </span>
                    </div>
                    <div style={{padding:'2px 20px', }}>
                        <span>AAA Standards : </span>
                        <span className='checker-emoji'>{headerContrastAAA} Large & Bold Text </span> 
                        <span className='checker-emoji'> {smallContrastAAA} Small Text </span>
                    </div>

                </div>
                    <div style={{backgroundColor:backgroundColor, color:textColor, margin:'-.25px', padding:'15px'}}>
                    <h1> The quick brown fox jumps over the lazy dog</h1>
                    <p styel={{fontSize:'18px'}}><b>The quick brown fox jumps over the lazy dog</b></p>
                    <p styel={{fontSize:'14px'}}>The quick brown fox jumps over the lazy dog</p>
                    </div>
                <div>
                   
                </div>
            </div>
        )

}

export default ContrastChecker

//will get colors as props