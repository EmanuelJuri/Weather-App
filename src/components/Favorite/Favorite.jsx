import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {getCity, removeFavorite} from '../../actions/index'
import './Favorite.css';
import iconWeather from '../../assets/icon-weather.svg'
import { useEffect } from "react";

export default function Favorite(){
    const dispatch = useDispatch()
    const favorites = useSelector(state => state.favorites)
    const detail = useSelector(state => state.detail)
        
    // console.log('Favorites', favorites.length)    
    // console.log('detail', detail)

    function handleShow (nameCity){
        dispatch(getCity(nameCity))        
    }

    function handleRemove (id){
        dispatch(removeFavorite(id))        
    }

    return(
        <div className="container-favorite">
            {
                favorites ?
                    (favorites.map(el => 
                        {
                            return(
                                <div className="card-favorite" key={el.id}>
                                    <p className="name-city">{el.nameCity}</p>
                                    <p className="temp-currently">{el.mainTemp}ºC</p>                
                                    <img src={`http://openweathermap.org/img/wn/${el.img}@2x.png`}
                                        alt="icon-weather"
                                        className="icon-weather-f"
                                        onClick={()=>handleShow(el.nameCity)}
                                    />
                                    <button
                                        className="btn-remove" 
                                        onClick={()=>handleRemove(el.id)}
                                    >X</button>
                                </div>
                            )
                        }
                        ))
                :
                null
            }
        </div>
    )
};