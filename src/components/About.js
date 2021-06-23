/* eslint-disable indent */
import React from 'react';
import paletteFromColor from '../video/paletteFromColor.mov'
import paletteFromPalette from '../video/paletteFromPalette.mov'
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <article style={{
            margin: '30px auto'
        }}>
            <section style={{ textAlign: 'center', marginTop: '20px auto' }}>
                <h1>
                    Create contrasting color palettes
                </h1>

                <Link to='/examples'><h2>Example Palettes</h2></Link>
            </section>


            <section className="about-box">
                <p >
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
            </section>

            <section className="demos">
                <h2>Demos</h2>
                <p>Making a palette from a color</p>
                <video width="100%" controls >
                    <source src={paletteFromColor} type="video/mp4" />
                </video>

                <p>Making a palette from an example palette</p>
                <video width="100%" controls >
                    <source src={paletteFromPalette} type="video/mp4" />
                </video>

            </section>
            <section className="demos">
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

            </section>
        </article>
    );
};
export default About;
