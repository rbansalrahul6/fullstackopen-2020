import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Weather from './Weather'

const getWeatherURL = location => 
`http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_API_KEY}&query=${location}`

const CountryView = ({ country }) => {
    const [weather, setWeather] = useState({})

    const { name, capital, population, languages, flag } = country
    const languageList = languages.map(language => <li key={language.iso639_1}>{language.name}</li>)

    useEffect(() => {
        axios.get(getWeatherURL(capital))
        .then((response) => {
            const { current } = response.data
            const currentWeather = {
                temperature: current.temperature,
                windSpeed: current.wind_speed,
                windDir: current.wind_dir,
                icon: current.weather_icons[0]
            }
            setWeather(currentWeather)
        })
    }, [])

    return (
        <div>
            <h1>{name}</h1>
            <div>capital {capital}</div>
            <div>population {population}</div>
            <h3>languages</h3>
            <ul>
                {languageList}
            </ul>
            <img src={flag} alt='Flag' height='100' width='200' />
            <Weather
             location={capital}
             weather={weather}
            />
        </div>
    )
}

export default CountryView
