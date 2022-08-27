import {GET_CITY, ADD_FAVORITE, REMOVE_FAVORITE} from '../actions/index'

const initialState= {
    city: [],
    favorites: [],
    detail: {}
};


export default function rootReducer(state=initialState, action){
    switch(action.type){
        case GET_CITY:
            return{
                ...state,
                city: action.payload
            }
        case ADD_FAVORITE:
            return{
                ...state,                
                favorites: state.favorites.concat(action.payload)
            }
        case REMOVE_FAVORITE:            
            return{
                ...state,
                favorites: state.favorites.filter(city => city.id !== action.id)
            }
        default: return {...state};
    }
}