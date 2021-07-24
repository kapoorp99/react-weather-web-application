import axios from 'axios';
import React, { useEffect, useState } from 'react'
import RenderDay from '../RenderDay/RenderDay'
import { MainContainer } from './styles'


function WeatherForecast({ lat, lng }) {
    const [loaded, setLoaded] = useState(false);
    const [forecast, setForecast] = useState(null);
    useEffect(() => {
        setLoaded(false);
    }, [lat, lng]);
    function callApi() {
        const weatherKey = 'cf12350b6c8f36481899627461fada1e';
        axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&exclude=minutely,hourly,alerts&appid=${weatherKey}&units=metric`).then((response) => {
            setForecast(response.data.daily);
            setLoaded(true);
        })
    }
    if (loaded) {
        return (
            <MainContainer>
                <h5 className='forecast__heading'>Daily Forecast</h5>
                <div className='forecast__cards'>
                    {forecast?.map((day, i) => {
                        return (
                            <RenderDay dayForecast={day} key={i} />
                        )
                    })}
                </div>
            </MainContainer>
        )
    }
    else {
        callApi();

        return null;
    }
}

export default WeatherForecast
