import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import './Card.css'
// import flags from '../../assets/flags.png';
import add from '../../assets/add-favorite.svg';
import iconWeather from '../../assets/icon-weather.svg'

export default function Card({nameCity, code, mainTemp,
    description, fellsLike, tempMin, tempMax, dateTime, img, id, handleAddFavorite}){

    return(
        <div className="container-card">
            <div className="container-weather">
                <div className="container-name">
                    <div className="row-location">
                        <h1 className= {nameCity&&nameCity.length > 12 ? 'title-small' : 'title'}>{nameCity}</h1>

                        <img src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${code}.svg`}
                            alt="flag"
                            className="flags"
                        />
                        

                        <img onClick={e=>handleAddFavorite(e)} src={add} alt="add" className="add-favorite"/>

                    </div>
                    <h3 className="date">{dateTime}</h3>
                </div>
                <div className="container-temperature">
                    <div className="temperature">                        
                        <p className="main-temperature">{mainTemp}ºC</p>                        
                        {/* <img src={iconWeather} alt="icon-weather" className="icon-weather"/> */}
                        <img className="icon-weather" src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="icon-weather" />                        
                    </div>
                    <div className="container-extends">
                        <div>
                            <p className="description">{description}</p>
                            <p className="feels-like">Feels like: {fellsLike}ºC</p>
                            <div className="temp-min-max">
                            <span><p className="temp-min">{tempMin}ºC</p>min</span>
                            <p className="temp-min">-</p>
                            <span><p className="temp-max">{tempMax}ºC</p>max</span>
                            </div>
                        </div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    )
};