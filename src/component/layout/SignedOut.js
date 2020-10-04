import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedOut = () => {
    return (
        <ul className="navbar-nav align-items-center float-right">
            <li className="nav-item">
                <NavLink to="/signup" className="nav-link">Sign Up </NavLink>            
            </li>
            <li className="nav-item">
                <NavLink to="/signin" className="nav-link">Login </NavLink>         
            </li>
        </ul>
    )
}

export default SignedOut
