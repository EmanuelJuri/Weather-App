import React from "react";

import './Navbar.css';

export default function MenuBurger({handleClick, clicked}){
    return(
        <div className="container-burger" onClick={handleClick}>
            <div className={`icon nav-icon-5 ${clicked ? 'open' : ''}`}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    )
};