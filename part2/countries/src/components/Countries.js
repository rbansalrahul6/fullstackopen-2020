import React from 'react'
import CountryView from './CountryView'

const Country = ({ country }) => (
    <div>{country.name}</div>
)

const Countries = ({ countryList }) => {
    if (countryList.length === 0) return <div />

    if (countryList.length === 1) return <CountryView country={countryList[0]} />
    
    return (
    <div>
        {countryList.map(country =>
            <Country key={country.numericCode} country={country} />
        )}
    </div>
)}

export default Countries
