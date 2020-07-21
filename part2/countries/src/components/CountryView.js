import React from 'react'

const CountryView = ({ country }) => {
    const { name, capital, population, languages, flag } = country
    const languageList = languages.map(language => <li key={language.iso639_1}>{language.name}</li>)
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
        </div>
    )
}

export default CountryView
