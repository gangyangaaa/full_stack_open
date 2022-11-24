import { useState, useEffect } from 'react'
import { isEqual } from 'lodash'
import axios from 'axios'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',
      number: '040-1234567',
      id: 1,
    }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    }
    if (isExist(personObject, persons)) {
      window.alert(personObject.name + ' is already added to phonebook')
    }
    else {
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
    }
  }

  const isExist = (personObject, persons) => {
    for (const x in persons) {
      if (isEqual(persons[x].name, personObject.name)) {
        return true
      }
    }
    return false
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSearch = (event) => {
    setFilter(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter = {filter} handleSearch = {handleSearch} />
      <h3>add a new</h3>
      <PersonForm newName = {newName} 
        newNumber = {newNumber} 
        handleSubmit = {addPerson}
        handleNameChange = {handleNameChange}
        handleNumberChange = {handleNumberChange} />
      <h3>Numbers</h3>
      <Persons persons = {persons} filter = {filter} />
    </div>
  )
}

export default App
