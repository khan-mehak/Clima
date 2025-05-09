import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import './InfoBox.css'
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';


export default function InfoBox({data}) {

    // const img="https://images.unsplash.com/photo-1578390986741-4e08df07e94b?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"


    const RAIN_URL="https://images.unsplash.com/photo-1705077031869-51b60754302a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2VhdGhlciUyMHJhaW58ZW58MHx8MHx8fDA%3D"


    const COLD_URL="https://plus.unsplash.com/premium_photo-1670604649107-a0171e5f1bd0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2VhdGhlciUyMENPTER8ZW58MHx8MHx8fDA%3D"

    const HOT_URL="https://images.unsplash.com/photo-1743738049563-520b88442d04?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdlYXRoZXIlMjBIT1R8ZW58MHx8MHx8fDA%3D"

    // let data = {
    //     city: "Delhi",
    //     tempMin: 25.5,
    //     tempMax: 25.5,
    //     feel_like: 24.4,
    //     humidity: "45.5",
    //     weather: "haze"
    // }


    return (
        <div className='InfoBox'>
            <h1>Weather Info</h1>

            <div className='CardContainer'>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={data.humidity>80 ? RAIN_URL : data.temp ? HOT_URL :COLD_URL }
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                       {data.city}{
                        data.humidity>80 ? <ThunderstormIcon/> : data.temp ? <SunnyIcon/> : <AcUnitIcon/>
                       }
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }} component="span">
                   <p>Max Temp : {data.tempMax}&deg;C</p>
                    <p>Min temp : {data.tempMin}&deg;C</p>
                     <p>Feels Like : {data.feelLike}</p>
                      <p>Weather : <i>{data.weather} and Humidity: {data.humidity}</i></p>
                      
                    </Typography>
                </CardContent>
                
            </Card>
        </div>
        </div>
    )
}