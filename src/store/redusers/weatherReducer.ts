import {WeatherAction, WeatherState,WeatherActionTypes} from "../types/weatherTypes";

const initialState: WeatherState = {
    data: null,
    loading: false,
    error: ''
}

export const weatherReducer = (state = initialState, action: WeatherAction):WeatherState => {
    switch (action.type) {
        case WeatherActionTypes.GET_WEATHER:
            return {data: action.payload, loading: false, error: ''}
        case WeatherActionTypes.SET_LOADING:
            return {...state,loading:true};
        case WeatherActionTypes.SET_ERROR:
            return {...state,error:action.payload}
        default:
            return state
    }
}