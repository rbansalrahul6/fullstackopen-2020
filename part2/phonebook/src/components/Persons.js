import React from 'react'

const Person = ({ person, deletePerson }) => (
    <div>
        {person.name} {person.number}
        <button onClick={deletePerson}>delete</button>
    </div>
)

const Persons = ({ persons, deletePerson }) => (
    <div>
        {persons.map(person =>
            <Person 
             key={person.name} 
             person={person}
             deletePerson={() => deletePerson(person)} />
        )}
    </div>
)

export default Persons
