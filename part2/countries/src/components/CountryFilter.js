import React from 'react'

const CountryFilter = ({ filter, handleFilter }) => (
    <div>
      find countries <input value={filter} onChange={handleFilter} />
      </div>
)

export default CountryFilter
