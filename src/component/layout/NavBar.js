import React from 'react'
import { Link } from 'react-router-dom'
import SignedIn from './SignedIn'

const NavBar = () =>{
    return (
        <div className="container-fluid shadow-sm m-0 p-0">
        <div className="bg-orange align-items-center d-none d-sm-flex justify-content-end"><div className="text-white font-weight-bolder py-2 mr-2">Logged In</div></div>
            <nav className="navbar navbar-expand-lg navbar-light bg-white">
            <Link className="brand-primary font-weight-bolder" to="/">UHAS <span className="brand-secondary">Connect</span></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>

            <SignedIn/>
            </nav>
        </div>
    )
}

export default NavBar
