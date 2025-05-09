import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import './SearchBox.css'
import {useState} from 'react'

export default function SearchBox({updateData}) {
    let [city,setCity]=useState("")
    let [error,setError]=useState(false)
    const API_URL="https://api.openweathermap.org/data/2.5/weather"
    const API_KEY="83aff7cc5abb8f3692dc6ae0005ff633"

    let getWeather=async()=>{
        try{
        let res=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)
        let jsonResp=await res.json()
        console.log(jsonResp)

        let result={
            city:city,
            temp:jsonResp.main.temp,
            tempMin:jsonResp.main.temp_min,
            tempMax:jsonResp.main.temp_max,
            feelLike:jsonResp.main.feels_like,
            humidity:jsonResp.main.humidity,
            weather:jsonResp.weather[0].description
        }

        console.log(result)
        return result
    }catch(err){
        throw err
    }
    }

    let handleChange=(event)=>{
        setCity(event.target.value)
    }

    let handleSubmit=async(event)=>{
        try{
        event.preventDefault()
        console.log(city)
        setCity("")
        let newData=await getWeather()
        updateData(newData)
        }
        catch(err){
            setError(true)
        }
    }

    return (
        <div className='SearchBox'>
        <form onSubmit={handleSubmit}>
            <TextField id="city" label="City Name" placeholder='Enter city or state name' variant="outlined" value={city} onChange={handleChange} required />
            <br /><br />
            <Button variant="contained" endIcon={<SendIcon />} type='submit'>
                Search
            </Button>

            {error && <p style={{color:"red"}}>No such place exists !!</p>}
        </form>
        </div>
    )
}