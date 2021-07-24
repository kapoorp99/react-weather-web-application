import React from 'react'
import { useEffect, useState } from 'react'
import WeatherForecast from './components/WeatherForecast/WeatherForecast'
import 'open-weather-icons/dist/css/open-weather-icons.css'
import ScreenLoader from './components/Loaders/ScreenLoader'
import axios from 'axios'
import WeatherIcon from './components/WeatherIcon'
import { MainContainer } from './appStyles'
import { BiSearch } from 'react-icons/bi'
import Footer from './components/Footer/Footer'

function App() {
  const [data, setData] = useState();
  const [date, setDate] = useState(null);
  const [errorr, setError] = useState();
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [city, setCity] = useState('');
  const weatherKey = 'cf12350b6c8f36481899627461fada1e';

  const handleSearchByCity = () => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherKey}&units=metric`)
      .then((res) => {
        setData(res.data)
        const date = new Date(res.data.dt * 1000);
        const time = date.getHours() + ":" + date.getMinutes();
        setDate(time)
        setCity('')
        setErrorMessage(null)
      })
      .catch((err) => {
        console.log(err)
        setErrorMessage('Invalid place name !')
      })
  }

  useEffect(() => {
    setLoading(true)
    var options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(crd => {
        console.log(crd.coords)
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${crd.coords.latitude}&lon=${crd.coords.longitude}&appid=${weatherKey}&units=metric`)
          .then((res) => {
            console.log(res.data)
            setData(res.data)
            const date = new Date(res.data.dt * 1000);
            const time = date.getHours() + ":" + date.getMinutes();
            setDate(time)
            setCity(data?.name)
          })
          .catch((err) => {
            console.log(err)
            setError(err)
          })
      }, error => { console.log(error) }, options);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
    setLoading(false)
    // eslint-disable-next-line
  }, []);
  if (loading) {
    return (
      <ScreenLoader />
    )
  }
  else if (errorr) {
    return (
      <h1>Error</h1>
    )
  }
  else {
    return (
      <>
        <MainContainer>
          <div className='searchFormComponent'>
            <input type="text" placeholder='search by city' value={city} onChange={(e) => { setCity(e.target.value) }} />
            <button onClick={handleSearchByCity}><BiSearch /></button>
          </div>
          {errorMessage ? (
            <div style={{color: "red"}}>
              {errorMessage}
            </div>
          ) : ("")}
          <div className='currentWeatherComponent'>
            <h5 className=''>{data?.name} Weather</h5>
            <span className=''>As of {date}</span>
            <div className=''>
              <h1 className=''>{data?.main?.temp}°C</h1>
            </div>
            <div className=''>
              <WeatherIcon iconName={data?.weather[0]?.icon} size={5} />
            </div>
            <p className=''>{data?.weather[0]?.main}</p>
          </div>
          <WeatherForecast lat={data?.coord?.lat} lng={data?.coord?.lat} />
        </MainContainer>
        <Footer />
      </>
    )
  }

}

export default App

