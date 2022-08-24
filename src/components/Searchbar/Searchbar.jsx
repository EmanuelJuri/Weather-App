import React, { useState } from "react";
import { useDispatch } from "react-redux";

import {getCity} from '../../actions/index'
import './Searchbar.css';
import icon from '../../assets/icon-search.svg'

export default function Searchbar(){
    const dispatch = useDispatch()
    const [city, setCity] = useState('')    

    function handleInputChange(e){
        e.preventDefault()
        setCity(e.target.value)        
    };

    function handleSubmit(e){
        e.preventDefault();
        if(city.length === 0) {
            return alert ("Please enter a value to search")
        } else{
            dispatch(getCity(city));            
            setCity('')
        }
    };

    return(
        <div className="container-search">
            <div className="group-search">
            <input 
                className="input_search"
                type="search" 
                placeholder="Search city..."
                onKeyPress={e => e.key === 'Enter'  && handleSubmit(e) }
                onChange={e=>handleInputChange(e)}
            />
            <img 
                src={icon} 
                alt="icon-search" 
                onClick={e=>handleSubmit(e)}
            />
            </div>
        </div>
    )
};