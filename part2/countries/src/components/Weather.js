import React from 'react'

const Weather = ({ location, weather }) => {
    const { temperature, windSpeed, windDir, icon } = weather
    return (
        <div>
            <h3>Weather in {location}</h3>
            <p>
                <b>temperature: </b> {temperature} Celsius
            </p>
            <img src={icon} alt='icon' />
            <p>
                <b>wind: </b> {windSpeed} mph direction {windDir}
            </p>
        </div>
    )
}

export default Weather
