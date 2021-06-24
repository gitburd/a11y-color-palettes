import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedOutLinks = () => {
    return (
        <li style={{ float: 'right' }}><NavLink to='/login'>Login</NavLink></li>
    )
}

export default SignedOutLinks
