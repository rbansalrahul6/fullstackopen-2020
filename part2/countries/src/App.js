import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Countries from './components/Countries'
import CountryFilter from './components/CountryFilter'

const App = () => {
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then((response) => {
        setCountries(response.data)
      })
  }, [])

  const handleFilter = e => setFilter(e.target.value)

  const countryList = filter.length
                      ? countries.filter(country => country.name.toLowerCase().includes(filter.toLowerCase()))
                      : []

  return (
    <div>
      <CountryFilter filter={filter} handleFilter={handleFilter} />
      <div>
        {
          countryList.length > 10 
          ? 'Too many matches, specify another filter' 
          : <Countries countryList={countryList} />
        }
      </div>
    </div>
  )
}

export default App
