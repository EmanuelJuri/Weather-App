import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import './Detail.css'

export default function Detail (){
    const dispatch = useDispatch()
    const city = useSelector(state => state.city)

    return(
        <div className="container-detail">
            <div className="card-detail">
                <div className="title-column">
                    <p className="name-city">{city.nameCity}, {city.code}</p>
                    <p className="description">{city.description}</p>
                </div>
                <div className="temp-group">
                    <p className="temperature">{city.mainTemp}ºC</p>                    
                    <img className="icon-weather" src={`http://openweathermap.org/img/wn/${city.img}@2x.png`} alt="icon-weather" />
                </div>
                <div className="details-group">
                    <p className="details">Feels like: {city.fellsLike}ºC</p>
                    <p className="details">Humidity: {city.humidity} %</p>
                    <p className="details">Pressure: {city.pressure} hPa</p>
                    <p className="details">Wind: {city.wind} m/s</p>
                    <p className="details">Visibility: {(city.visibility)/1000} km</p>
                </div>
            </div>
        </div>
    )
};