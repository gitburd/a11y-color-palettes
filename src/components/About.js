/* eslint-disable indent */
import React from 'react';
import paletteFromColor from '../video/paletteFromColor.mov'
import paletteFromPalette from '../video/paletteFromPalette.mov'

const About = () => {
    return (
        <article style={{
            margin: '30px auto',
            width: '60%',
        }}>
            <h1
                style={{textAlign: 'center', color: '#9506a0'}}
            >
                A11y Palette
            </h1>
            <h2
                style={{textAlign: 'center'}}
            >
                Create contrasting color palettes
            </h2>
            <p style={{paddingTop: '20px'}}>
                - Get suggested contrasting colors for any color
            </p>
            <p>
                - Test background and text color pairs for {' '}
                <a
                    href= "https://www.w3.org/WAI/standards-guidelines/wcag/"
                    target="_blank"
                    rel="noreferrer"
                    className='link'
                >
                 WCAG AA and AAA
                </a> a11y guidline compliance
            </p>
            <p>
                - Save your palettes
            </p>
            <br/>

            <h2 id="demos">Demos</h2>
            <p>Making a palette from a color</p>
            <video width="90%"  controls >
                <source src={paletteFromColor} type="video/mp4"/>
            </video>

            <p>Making a palette from an example palette</p>
            <video width="90%"  controls >
                <source src={paletteFromPalette} type="video/mp4"/>
            </video>

            <h2>Why is this important?</h2>
            <p>
            <a
                    href= "https://www.w3.org/WAI/standards-guidelines/wcag/"
                    target="_blank"
                    rel="noreferrer"
                    className='link'
                >
                 WCAG AA and AAA
                </a> 
                {' '}
                accessibility guidlines help designers pick text and background colors that have enough luminosity contrast to be easily read by people how experince low vision or don't see color.
                There are differnt standards for large and bold text than for small text.  
            </p>

            <h3 style={{paddingTop: '40px', textAlign: 'center'}}>
                Ally Palette was made as part of a {' '}
                <a
                    href="https://mlh.io/"
                    target="_blank"
                    rel="noreferrer"
                    className='link'
                >
                    Major League Hacking
                </a> Hackathon!
            </h3>
        </article>
    );
};
export default About;
