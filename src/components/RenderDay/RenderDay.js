import React from 'react'
import { WiRaindrop } from 'react-icons/wi';
import WeatherIcon from '../WeatherIcon';
import { MainContainer } from './styles'

function RenderDay({ dayForecast }) {
    const icon = dayForecast?.weather[0].icon;
    const date = new Date(dayForecast?.dt * 1000);
    const dayName = date.toString().split(' ')[0];
    const maxTemp = dayForecast?.temp.max;
    const minTemp = dayForecast?.temp.min;
    const rainChance = dayForecast?.pop ? parseInt(dayForecast?.pop * 100) : 0;
    return (
        <MainContainer>
            <p>{dayName}</p>
            <p>{maxTemp}°C</p>
            <p>{minTemp}°C</p>
            <WeatherIcon iconName={icon} size={3} />
            <p>
                <WiRaindrop />
                <span>{rainChance}%</span>
            </p>
        </MainContainer>
    )
}

export default RenderDay
