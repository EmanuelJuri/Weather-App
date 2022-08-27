import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {getCity, removeFavorite} from '../../actions/index'
import './Favorite.css';

export default function Favorite(){
    const dispatch = useDispatch()
    const favorites = useSelector(state => state.favorites)    

    function handleShow (nameCity){
        dispatch(getCity(nameCity))        
    }

    function handleRemove (id){
        dispatch(removeFavorite(id))        
    }

    return(
        <div className={favorites.length > 0 ? "container-favorite" : 'container-fav'}>
            {
                favorites ?
                    (favorites.map(el => 
                        {
                            return(
                                <div className="card-favorite" key={el.id} onClick={()=>handleShow(el.nameCity)}>
                                    <p className="name-city">{el.nameCity}</p>
                                    <p className="temp-currently">{el.mainTemp}ºC</p>                
                                    <img src={`http://openweathermap.org/img/wn/${el.img}@2x.png`}
                                        alt="icon-weather"
                                        className="icon-weather-f"                                        
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