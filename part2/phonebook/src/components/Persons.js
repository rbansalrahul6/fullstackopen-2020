import React from 'react'

const Person = ({ person }) => (
    <div>
        {person.name}
    </div>
)

const Persons = ({ persons }) => (
    <div>
        {persons.map(person =>
            <Person key={person.name} person={person} />
        )}
    </div>
)

export default Persons
