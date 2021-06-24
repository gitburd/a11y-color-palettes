/* eslint-disable indent */
import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'

const Navbar = ({ auth }) => {
    const links = auth.uid ? <SignedInLinks /> : <SignedOutLinks />;
    return (
        <nav>
            <ul>
                <li><NavLink to='/' style={{ fontSize: '24px' }}>A11y Palette</NavLink></li>
                {links}
                <li style={{ float: 'right' }}>
                    <NavLink to='/examples'>Examples</NavLink>
                </li>
                <li style={{ float: 'right' }}><NavLink to='about'>About</NavLink></li>
                {auth.uid && (<li style={{ float: 'right' }}><NavLink to='/palettes'>Palettes</NavLink></li>)}
            </ul>
        </nav>
    );
};

const mapStateToProps = (state) => {
    console.log({ state })
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(Navbar);
