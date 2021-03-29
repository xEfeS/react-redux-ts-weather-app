export enum WeatherActionTypes {
    GET_WEATHER = 'GET_WEATHER',
    SET_LOADING = 'SET_LOADING',
    SET_ERROR = 'SET_ERROR',
}

export interface Weather{
    description:string,
    icon:string,
    id:number,
    main:string
}

export interface WeatherData {
    base:string,
    clouds:{
        all:number,
    }
    cod:number,
    coord:{
        lon:number,
        lat:number,
    }
    dt:number,
    id:number,
    main:{
        temp:number,
        feels_like:number,
        humidity:number,
        pressure:number,
        temp_max:number,
        temp_min:number
    },
    name:string,
    sys:{
        country:string,
        id:number,
        sunrise:number,
        sunset:number,
        type:number,
    },
    timezone:number,
    visibility:number,
    weather:Weather[],
    wind:{
        speed:number,
        deg:number,
    }
}

export interface WeatherError {
    cod:string,
    message:string,
}

export interface WeatherState {
    data:WeatherData | null,
    loading:boolean,
    error:string,
}

interface GetWeatherAction {
    type:WeatherActionTypes.GET_WEATHER,
    payload:WeatherData
}

interface SetLoadingAction {
    type:WeatherActionTypes.SET_LOADING
}

interface SetErrorAction {
    type:WeatherActionTypes.SET_ERROR,
    payload:string,
}

export type WeatherAction = GetWeatherAction | SetErrorAction | SetLoadingAction


