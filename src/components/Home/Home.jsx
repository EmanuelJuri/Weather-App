import React from "react";
import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert";

import Card from '../Card/Card';
import Navbar from '../Navbar/Navbar';
import Searchbar from '../Searchbar/Searchbar';
import Maps from '../Map/Map';
import Favorite from '../Favorite/Favorite';
import Detail from "../Detail/Detail";

import {getCity, addFavorite} from '../../actions/index'
import loading from '../../assets/weather.gif'
import top from '../../assets/chevron-top.svg'

import './Home.css'

export default function Home(){
    const dispatch = useDispatch()    
    const favorites = useSelector(state => state.favorites)    
    const {
        nameCity,
        code,
        mainTemp,
        description,
        fellsLike,
        humidity,
        pressure,
        wind,
        visibility,
        tempMin,
        tempMax,        
        img,        
        lat,
        lon,
        id
    } = useSelector(state => state.city)

    if(!id) dispatch(getCity('Mendoza'))
    
    //------<Obj Date>------
    const options = { month: 'short', day: 'numeric' };
    let date = new Date().toLocaleTimeString('en', options)
    let dateTime = date.slice(0,(date.length-6))+' '+date.slice(-2).toLocaleLowerCase()
    
    function handleAddFavorite(){        
        if(favorites.map(el => el.nameCity === nameCity).includes(true)) return swal({title: "Is already in favorites"});
        dispatch(addFavorite(nameCity, mainTemp, img, id)) 
    }

    return(
        <div className="container" id="home">
            <Navbar/>
            <div className="mobile">
                <Searchbar/>
            </div>
            <div className="block-card">
                <div className="mobile">
                    {
                        id ? 
                        <Card
                            nameCity={nameCity}
                            code={code}
                            mainTemp={mainTemp}
                            description={description}
                            fellsLike={fellsLike}
                            tempMin={tempMin}
                            tempMax={tempMax}
                            dateTime={dateTime}
                            img={img}
                            id={id}
                            handleAddFavorite={handleAddFavorite}
                        />
                        :
                        <img src={loading} alt="loading" className="loading"/>                    
                    }
                </div>
                <div className="desketop">
                {
                    id ? 
                    <Card
                        nameCity={nameCity}
                        code={code}
                        mainTemp={mainTemp}
                        description={description}
                        fellsLike={fellsLike}
                        tempMin={tempMin}
                        tempMax={tempMax}
                        dateTime={dateTime}
                        img={img}
                        id={id}
                        handleAddFavorite={handleAddFavorite}                        
                        humidity={humidity}
                        pressure={pressure}
                        wind={wind}
                        visibility={visibility}
                    />
                    :
                    <img src={loading} alt="loading" className="loading"/>                    
                }
                </div>                
                <Maps
                    lat={lat || -32.8891236342233}
                    lng={lon || -68.84308599293053}
                />
            </div>
            <div className="favorites">
                <Favorite/>
            </div>            
            <div className="mobile">
                <Detail/>
            </div>
            <a href="#home" className="back-top mobile">
                <img src={top} alt="top" className="img-back-top"/>
            </a>
        </div>
    )
};