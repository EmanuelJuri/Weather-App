import React from "react";
import {Link} from 'react-router-dom'

import './About.css';

import Linkedin from '../assets/ln.svg';
import GitHub from '../assets/Github.svg';

export default function About(){
    return(
        <div className="container-about">
            <div className="card-about">
                <div className="title-group">
                    <p className="title-hi">¿Hola como estas?</p>                    
                    <p className="title-name">Soy <span className="name-change">Emanuel Juri</span> <br/> FullStack Web Developer</p>
                </div>
                <div>
                    <p className="about-pa">
                    The Weather App, es una single-page application construida con React, que permite obtener el pronóstico del tiempo de cualquier ciudad.
                    </p>
                </div>
                <div className="social-media">
                    <a href="https://www.linkedin.com/in/emanuel-juri/">
                        <img src={Linkedin} alt='ln-logo' className='logosSocialMedia'/>
                    </a>

                    <a href="https://github.com/EmanuelJuri">
                        <img src={GitHub} alt='github-logo' className='logosSocialMedia'/>
                    </a>
                </div>
            </div>
            <div>
                <Link to= '/'>
                    <button className='button-home'>Back</button>
                </Link>
            </div>
        </div>
    )
};