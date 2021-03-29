import React from 'react';
import {WeatherData} from "../store/types/weatherTypes";

interface WeatherProps {
    data:WeatherData
}

const Weather:React.FC<WeatherProps> = ({data}) => {

    const fahrengeit = (data.main.temp * 1.8 - 459.67).toFixed(2)
    const celsius = (data.main.temp - 273.15).toFixed(2)


    return (
        <div>
            <section className="section">
                <div className="container">
                    <h1 className="title has-text-centered" style={{marginBottom:50}}>
                        {data.name} - {data.sys.country}
                    </h1>
                    <div className="level" style={{alignItems:'flex-start'}}>
                        <div className="level-item has-text-centered">
                                <div>
                                    <p className="subtitle is-3 mb-6">{data.weather[0].description}</p>
                                    <p className="title image is-128x128"><img className="is-rounded" src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`} alt=""/></p>
                                </div>
                        </div>
                        <div className="level-item has-text-centered">
                            <div>
                                <p className="subtitle is-3 mb-6">Temp</p>
                                    <div className="title">
                                        <p className="mb-2">{data.main.temp}K</p>
                                        <p className="mb-2">{fahrengeit}<sup>&#8457;</sup></p>
                                        <p>{celsius} <sup>&#8451;</sup></p>
                                    </div>
                            </div>
                        </div>
                        <div className="level-item has-text-centered">
                            <div>
                                <p className="subtitle is-3 mb-6">Humidity</p>
                                <p className='title'>{data.main.humidity}</p>
                            </div>
                        </div>
                        <div className="level-item has-text-centered">
                            <div>
                                <p className="subtitle is-3 mb-6">Pressure</p>
                                <p className="title">{data.main.pressure}</p>
                            </div>
                        </div>
                        <div className="level-item has-text-centered">
                           <div>
                               <p className="subtitle is-3 mb-6">Wind</p>
                               <p className="title">{data.wind.speed} m/s</p>
                           </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Weather;
