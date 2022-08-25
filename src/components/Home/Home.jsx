import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Card from '../Card/Card';
import Navbar from '../Navbar/Navbar';
import Searchbar from '../Searchbar/Searchbar';
import Maps from '../Map/Map';
import Favorite from '../Favorite/Favorite';
import Detail from "../Detail/Detail";

import {getCity, addFavorite, removeFavorite} from '../../actions/index'
import loading from '../../assets/weather.gif'

import './Home.css'

export default function Home(){
    const dispatch = useDispatch()
    const city = useSelector(state => state.city)
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
        weather,
        img,
        cloudes,
        lat,
        lon,
        id
    } = useSelector(state => state.city)

    if(!id) dispatch(getCity('Mendoza'))
    
    // console.log('INFOOOO', img)

    //---Obj Date--------------------------------------------------------
    const options = { month: 'short', day: 'numeric' };
    let date = new Date().toLocaleTimeString('en', options)
    let dateTime = date.slice(0,(date.length-6))+' '+date.slice(-2).toLocaleLowerCase()
    // console.log('###dateTime###', dateTime)

    // console.log('###estado city###', city)
    // console.log('###estado favorites###', favorites)

    function handleAddFavorite(){
        if(Object.keys(favorites).length == 0){
            dispatch(addFavorite(nameCity, mainTemp, img, id))
        // }else if(favorites.map(el => el.nameCity === city.nameCity)) {
        }else if(favorites.includes (city.nameCity)) {
            console.log('MATCH favorites', favorites[0].nameCity)    
            console.log('MATCH city', city.nameCity)
            return alert ("Is already in favorites")
        }else{
            dispatch(addFavorite(nameCity, mainTemp, img, id))
        }
    }

    return(
        <div className="container">
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

            <Favorite/>
            
            <div className="mobile">
                <Detail/>
            </div>

        </div>
    )
};