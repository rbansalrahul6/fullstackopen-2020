import React, { useState, useEffect } from 'react'
import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import personService from './services/persons'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [notif, setNotif] = useState({ message: null })

  useEffect(() => {
    personService
      .getAll()
      .then((initialPersons) => {
        setPersons(initialPersons)
      })
  }, [])

  const removePerson = id => setPersons(persons.filter(person => person.id !== id))

  const showNotif = (message, type) => {
    setNotif({ message, type })
    setTimeout(() => {
      setNotif({ message: null })
    }, 5000)
  }

  const addPerson = (event) => {
    event.preventDefault()
    const duplicate = persons.find(person => person.name === newName)
    if (duplicate) {
      const choice = window.confirm(`${duplicate.name} is already added to phonebook, replace the old number with a new one?`)
      if (choice) {
        const newPerson = { ...duplicate, number: newNumber }
        personService
          .update(newPerson)
          .then(updatedPerson => {
            setPersons(persons.map(person => person.id === updatedPerson.id ? updatedPerson : person))
            showNotif(`Updated ${updatedPerson.name}`, 'success')
          })
          .catch(err => {
            removePerson(duplicate.id)
            showNotif(`Information of ${duplicate.name} has already been removed from server`, 'error')
          })
      }
    } else {
      const personObj = {
        name: newName,
        number: newNumber
      }
      personService
        .create(personObj)
        .then(newPerson => {
          setPersons(persons.concat(newPerson))
          showNotif(`Added ${newPerson.name}`, 'success')
          setNewName('')
          setNewNumber('')
        })
    }
  }

  const handleNameInput = event => setNewName(event.target.value)

  const handleNumberInput = event => setNewNumber(event.target.value)

  const handleFilterInput = event => setFilter(event.target.value)

  const deletePerson = person => {
    const { id, name } = person
    if (window.confirm(`Delete ${name} ?`)) {
      personService
      .deletePerson(id)
      .then(() => {
        removePerson(id)
      })
      .catch(err => {
        removePerson(id)
        showNotif(`Information of ${person.name} has already been removed from server`, 'error')
      })
    }
  }

  const personsToShow = filter.length 
                        ? persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase())) 
                        : persons
  const notifStyle = (notif.type === 'success') ? 'success' : 'error'

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notif.message} styleClass={notifStyle} />
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
      <Persons 
       persons={personsToShow}
       deletePerson={deletePerson}
       />
    </div>
  )
}

export default App

