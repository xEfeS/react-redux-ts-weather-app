import {ThunkAction} from "redux-thunk";
import {RootState} from "../index";
import {WeatherAction, WeatherActionTypes, WeatherData, WeatherError,} from "../types/weatherTypes";


export const getWeather = (city:string):ThunkAction<void,RootState,null,WeatherAction> =>{
    return async dispatch =>{
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}`);
            if (!response.ok){
                const responseDate:WeatherError = await response.json()
                throw new Error(responseDate.message.toUpperCase())
            }

            const responseDate:WeatherData = await response.json()
            dispatch({
                type:WeatherActionTypes.GET_WEATHER,
                payload:responseDate
            })
        }catch (e) {
            dispatch({
                type:WeatherActionTypes.SET_ERROR,
                payload:e.message
            })
        }
    }
}

export const setLoading = ():WeatherAction =>{
    return {
        type:WeatherActionTypes.SET_LOADING
    }
}

export const setError = ():WeatherAction => {
    return {
        type:WeatherActionTypes.SET_ERROR,
        payload:''
    }
}