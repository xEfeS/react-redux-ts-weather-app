import React from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "./store";
import Search from "./components/Search";
import Weather from "./components/Weather";
import Alert from "./components/Alert";
import {setAlert} from "./store/actions/alertActions";
import {setError} from "./store/actions/weatherActions";


const App:React.FC = () => {

  const dispatch = useDispatch()
  const weatherData = useSelector((state:RootState) => state.weatherReducer.data)
  const loading = useSelector((state:RootState) => state.weatherReducer.loading)
  const error = useSelector((state:RootState) => state.weatherReducer.error)
  const alertMsg = useSelector((state:RootState) => state.alertReducer.message)

  return (
    <div className="has-text-centered">
      <Search title="Enter city name and press search button" />
      {loading ? <h2 className="is-size-3 py-2">Loading...</h2> : weatherData && <Weather data={weatherData}/>}

      {alertMsg && <Alert message={alertMsg} onClose={()=>dispatch(setAlert(''))}/>}
      {error && <Alert message={error} onClose={()=> dispatch(setError())}/>}
    </div>
  );
}

export default App;
