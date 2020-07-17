import React from 'react'

const Navbar = () => {
    return (
        <ul>
            <li><a href="/" style={{fontSize: '24px'}}>A11y Palette Picker</a></li>
            <li style={{float: "right"}}><a  href="/about">About</a></li>
            <li style={{float: "right"}}><a  href="/examples">Examples</a></li>
            <li style={{float: "right"}}><a  href="/">Home</a></li>
        </ul>
    )
}

export default Navbar;