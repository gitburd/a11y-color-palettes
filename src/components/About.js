import React from 'react';

const About = () => {
    return (
        <div style={{
            margin: '30px auto',
            width: '60%'
        }}>
            <h1 style={{textAlign: 'center', color: '#9506a0'}}> A11y Palette </h1>
            <h3 style={{textAlign: 'center'}}>Create contrasting color palettes</h3>
            <p style={{paddingTop: '20px'}}>
                - Get suggested contrasting colors for any color
            </p>
            <p>
                - Test background and text color pairs for {' '}
                <a 
                    href= "https://www.w3.org/WAI/standards-guidelines/wcag/" 
                    target="_blank" 
                    rel="noopener"
                    className='link'
                >
                 WCAG AA and AAA
                </a> a11y guidline compliance
            </p>
            <p>
                - Save your palettes
            </p>
            <h3 style={{paddingTop: '40px', textAlign: 'center'}}>
                Ally Palette was made as part of a {' '}
                <a
                    href="https://mlh.io/" 
                    target="_blank" 
                    rel="noopener"
                    className='link'
                >
                    Major League Hacking
                </a> Hackathon!
            </h3>
        </div>
    )
}
export default About;
