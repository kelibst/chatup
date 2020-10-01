import React from 'react';
import userPic from '../../assets/images/user.jpg';
import Icofont from 'react-icofont';
import { NavLink } from 'react-router-dom';

const SignedIn = () => {
    return (
        <div className="collapse  navbar-collapse justify-content-end" id="navbarSupportedContent">
        <ul className="navbar-nav align-items-center float-right">
          <li className="nav-item active">
            <button type="button" className="btn bg-orange text-white"> New Post</button>
          </li>
         
          <li className="nav-item mx-2">
            <div className="user-container d-flex">
                <div className="img-container" style={{backgroundImage: `url(${userPic})`}}></div>
                <div className="user-name ml-3">
                    <h6 className="font-weight-bolder">Keli</h6>
                    <p className="text-secondary m-0">Booster</p>
                </div>
            </div>
          </li>

          <li className="nav-item notepar">
            <NavLink to="/" className="nav-link"><Icofont icon="love" className="text-secondary" size="2" /> </NavLink>
            <p className="bg-success note">3</p>
          </li>

          <li className="nav-item notepar">
            <NavLink to="/" className="nav-link"><Icofont icon="letter" className="text-secondary" size="2" /> </NavLink>
            <p className="bg-success note">14</p>
          </li>
        </ul>
      </div>
    )
}

export default SignedIn
