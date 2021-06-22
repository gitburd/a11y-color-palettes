import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../store/actions/authActions'

const SignedInLinks = ({ signOut }) => {
    return (
        <>
            <li style={{ float: 'right' }}><a onClick={signOut}>Logout</a></li>
            <li style={{ float: 'right' }}><NavLink to='/palettes'>Palettes</NavLink></li>
        </>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)