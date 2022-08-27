import React, {useState} from "react";
import {Link} from 'react-router-dom';
import swal from "sweetalert";

import MenuBurger from './Menuburger'
import Searchbar from '../Searchbar/Searchbar';

import './Navbar.css';
import logo from '../../assets/logo.svg'

export default function Navbar(){
    const [clicked, setClicked] = (useState(false))

    function handleClick (){
        setClicked(!clicked)        
    }

    return(
        <div className="container-nav">
            <div className="logo-nav">
                <a href="">
                    <img src={logo} alt="logo" className="logo"/>
                </a>
                <p className="name-nav">The Weather App</p>
            </div>
            <div className="desketop">
                <Searchbar/>
            </div>
            <div className="hide-mobile">
                <div className={`menu-links ${clicked ? 'active' : ''}`}>
                    <Link to={'/about'}>About</Link>                    
                    <a href="">Reload</a>
                    <a onClick={()=>
                        swal({
                            title: "API info",
                            text: "information provided by openweathermap.org",                            
                            buttons: {
                                cancel: true,
                                Go: true,
                              },
                          })
                          .then(Go => {
                            if (Go) {                 
                                window.location.href = 'https://openweathermap.org/'                            
                            }
                          })
                        }
                    >Info</a>                    
                </div>
                <MenuBurger
                    clicked={clicked}
                    handleClick={handleClick}
                />
                <div className={`initial ${clicked ? 'active' : ''}`}></div>
            </div>
        </div>
    )
}