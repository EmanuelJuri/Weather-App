import axios from 'axios';
import swal from 'sweetalert'

export const GET_CITY = "GET_CITY";
export const ADD_FAVORITE = 'ADD_FAVORITE';
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';

const API_KEY = process.env.REACT_APP_API_KEY

export function getCity(city) {    
    return async function (dispatch) {
      try {
        const res = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`,    
        );      
        if(res.data.main !== undefined){
          var ciudad = {
              nameCity : res.data.name,
              code : res.data.sys.country,
              mainTemp : Math.round(res.data.main.temp),
              tempMin : Math.round(res.data.main.temp_min),
              tempMax : Math.round(res.data.main.temp_max),
              fellsLike : Math.round(res.data.main.feels_like),
              humidity : Math.round(res.data.main.humidity),
              pressure : Math.round(res.data.main.pressure),
              weather: res.data.weather[0].main,
              description : res.data.weather[0].description,
              img: res.data.weather[0].icon,
              wind: res.data.wind.speed,
              visibility: Math.round(res.data.visibility),
              clouds: res.data.clouds.all,
              id: res.data.id,
              lat: res.data.coord.lat,
              lon: res.data.coord.lon
              };            
          }
        return dispatch({
          type: GET_CITY,        
          payload: ciudad,
        });
        
      } catch (error) {                    
          swal({
            title: "City not found",            
          })
      }
    };
};

export function addFavorite(nameCity, mainTemp, img, id){
    return {
        type: 'ADD_FAVORITE',
        payload: {nameCity, mainTemp, img, id}
    }
}

export function removeFavorite(id){    
    return {
        type: 'REMOVE_FAVORITE',
        id
    }
}
