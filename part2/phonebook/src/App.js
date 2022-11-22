import { useState } from 'react'
import { isEqual } from 'lodash'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',
      number: '040-1234567',
      id: 1,
    }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

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
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit = {addPerson}>
        <div>
          name: 
          <input
            value = {newName}
            onChange = {handleNameChange}
          />
        </div>

        <div>
          number:
          <input
            value = {newNumber}
            onChange = {handleNumberChange} 
          />
        </div>

        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person => 
          <li key = {person.id}>{person.name} {person.number}</li>
        )}
      </ul>
    </div>
  )
}

export default App
