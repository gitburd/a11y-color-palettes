/* eslint-disable indent */
import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'

const Navbar = ({ auth }) => {
    const links = auth.uid ? <SignedInLinks /> : <SignedOutLinks />;
    return (
        <nav>
            <ul>
                <li><Link to='/' style={{ fontSize: '24px' }}>A11y Palette</Link></li>

                {links}
                <li style={{ float: 'right' }}><Link to='about'>About</Link></li>
                <li
                    style={{ float: 'right' }}
                >
                    <Link to='/examples'>Examples</Link>
                </li>
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
