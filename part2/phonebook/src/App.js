import React, { useState } from 'react'
import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-1234567' }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    const duplicate = persons.find(person => person.name === newName)
    if (duplicate) {
      window.alert(`${newName} is already added to phonebook`)
    } else {
      const newPerson = {
        name: newName,
        number: newNumber
      }
      setPersons(persons.concat(newPerson))
    }
    setNewName('')
    setNewNumber('')
  }

  const handleNameInput = event => setNewName(event.target.value)

  const handleNumberInput = event => setNewNumber(event.target.value)

  const handleFilterInput = event => setFilter(event.target.value)

  const personsToShow = filter.length 
                        ? persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase())) 
                        : persons

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} handleFilter={handleFilterInput} />
      <h2>add a new</h2>
      <PersonForm
        name={newName}
        number={newNumber}
        onNameChange={handleNameInput}
        onNumberChange={handleNumberInput}
        handleFormSubmit={addPerson}
      />
      <h2>Numbers</h2>
      <Persons persons={personsToShow} />
    </div>
  )
}

export default App

