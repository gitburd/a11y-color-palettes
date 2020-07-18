/* eslint-disable indent */
import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <ul>
            <li><Link to='/' style={{fontSize: '24px'}}>A11y Palette</Link></li>
            <li style={{float: 'right'}}><Link to='about'>About</Link></li>
            <li
            style={{float: 'right'}}
            >
                <Link to='/examples'>Examples</Link>
            </li>
            <li style={{float: 'right'}}><Link to='/'>Home</Link></li>
        </ul>
    );
};

export default Navbar;
