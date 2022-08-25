import React, {useState} from "react";

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
                <img src={logo} alt="logo" className="logo"/>
                <p className="name-nav">The Weather App</p>
            </div>
            <div className="desketop">
                <Searchbar/>
            </div>
            <div className="hide-mobile">
                <div className={`menu-links ${clicked ? 'active' : ''}`}>
                    <a href="https://github.com/EmanuelJuri">About</a>
                    <a href="">Reload</a>
                    <a /* href="" */ onClick={()=>alert('Que onda wey')}>Info</a>                    
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