import React from "react";

import './Navbar.css';
import logo from '../../assets/logo.svg'
import bars from '../../assets/menu-bars.svg'

export default function Navbar(){
    return(
        <div className="container-nav">
            <div className="logo-nav">
                <img src={logo} alt="logo" className="logo"/>
                <p className="name-nav">The Weather App</p>
            </div>
            <div >
                <img src={bars} alt="menu" className="menu"/>
            </div>
        </div>
    )
}