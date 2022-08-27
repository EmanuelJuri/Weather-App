import React from "react";

import './Card.css'
import add from '../../assets/add-favorite.svg';

export default function Card({nameCity, code, mainTemp,
    description, fellsLike, tempMin, tempMax, dateTime, img, id, handleAddFavorite, 
    humidity, pressure, wind, visibility}){

    return(
        <div className="container-card">
            <div className="container-weather">
                <div className="container-name">
                    <div className="row-location">
                        <h1 className= {nameCity&&nameCity.length >= 10 ? 'title-small' : 'title'}>{nameCity}<span className="code-desk">{`, ${code}`}</span></h1>
                        <img src={code !== undefined ? `http://purecatamphetamine.github.io/country-flag-icons/3x2/${code}.svg` : null}
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
                <div className="desketop group">
                    <div className="desketop properties">                        
                        <p className="details">Humidity: {humidity} %</p>
                        <p className="details">Pressure: {pressure} hPa</p>
                    </div>
                    <div className="desketop properties">
                        <p className="details">Wind: {wind} m/s</p>
                        <p className="details">Visibility: {(visibility)/1000} km</p>
                    </div>
                </div>
            </div>
        </div>
    )
};