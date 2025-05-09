import SearchBox from './SearchBox.jsx';
import InfoBox from './InfoBox.jsx';
import './WeatherApp.css'
import {useState} from 'react'

export default function WeatherApp() {
    let [weatherData,setWeatherData]=useState({
        
        city: "Delhi",
        tempMin: 25.5,
        tempMax: 25.5,
        feelLike: 24.4,
        humidity: 45.5,
        weather: "haze"
 
    })

    let updateData=(newData)=>{
        setWeatherData(newData)
    }


    return (
        <div className='WeatherApp'>
            <h1>Welcome to Clima App</h1>

            <SearchBox updateData={updateData}/>
            <InfoBox data={weatherData}/>
        </div>
    )
}