/* eslint-disable indent */
import React from 'react';
import paletteFromColor from '../video/paletteFromColor.mov'
import paletteFromPalette from '../video/paletteFromPalette.mov'
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <article style={{
            margin: '30px auto',
            width: '60%',
        }}>
            <h1
                style={{ textAlign: 'center', color: '#9506a0' }}
            >
                A11y Palette
            </h1>
            <h2
                style={{ textAlign: 'center' }}
            >
                Create contrasting color palettes
            </h2>
            <p style={{ paddingTop: '20px' }}>
                - Get suggested contrasting colors for any color
            </p>
            <p>
                - Test background and text color pairs for {' '}
                <a
                    href="https://www.w3.org/WAI/standards-guidelines/wcag/"
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
            <br />

            <Link to='/examples'><h2>Example Palettes</h2></Link>

            <h2 id="demos">Demos</h2>
            <p>Making a palette from a color</p>
            <video width="90%" controls >
                <source src={paletteFromColor} type="video/mp4" />
            </video>

            <p>Making a palette from an example palette</p>
            <video width="90%" controls >
                <source src={paletteFromPalette} type="video/mp4" />
            </video>

            <h2>Why is this important?</h2>
            <p>
                <a
                    href="https://www.w3.org/WAI/standards-guidelines/wcag/"
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
        </article>
    );
};
export default About;
