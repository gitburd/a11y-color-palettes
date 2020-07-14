import React, { Component } from 'react'
var wcagContrast = require("wcag-contrast")

class ContrastChecker extends Component {
    render() {
        const res = wcagContrast.hex('#820000', '#CBCEF1');
        const score = wcagContrast.score(res);
        return (
            <div>
              <h1>res:  {res}</h1> 
                <h1>score: {score} </h1>
            </div>
        )
    }
}

export default ContrastChecker

//will get colors as props