/**
 * @author Chien Nobi
 */


import React from 'react'
import logo from '../assets/logo.jpg';

const NavBar = () => {
    return (
        <div className="navbar flex items-center">
            <div className="navbar-left flex items-center">
                <img src={ logo } alt="logo" className="bd-circle logo" />
                <a href="#">NobBike</a>
                <form>
                    <input type="text" name="search-value" className="form-input" placeholder="Search here" />
                </form>
            </div>
            <div className="navbar-right flex items-center">
                <div className="user-infor flex items-center">
                    <img src={ logo } alt="logo" className="bd-circle user-infor__avt" />
                    <p className="user-infor__name">Chiến Nobi</p>
                </div>
                <div className="navigation flex items-center">
                    <a className="nav-link">Bãi xe</a>
                    <a className="nav-link">Thuê xe</a>
                    <a className="nav-link">Liên hệ</a>

                </div>
            </div>
        </div>
    );
}

export default NavBar;