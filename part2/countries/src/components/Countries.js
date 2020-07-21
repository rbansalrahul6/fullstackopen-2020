import React from 'react'
import CountryView from './CountryView'

const Country = ({ country, showCountry }) => (
    <div>
    {country.name}
    <button onClick={() => showCountry(country.name)}>show</button>
    </div>
)

const Countries = ({ countryList, showCountry }) => {
    if (countryList.length === 0) return <div />

    if (countryList.length === 1) return <CountryView country={countryList[0]} />
    
    return (
    <div>
        {countryList.map(country =>
            <Country 
             key={country.numericCode} 
             country={country}
             showCountry={showCountry} />
        )}
    </div>
)}

export default Countries
