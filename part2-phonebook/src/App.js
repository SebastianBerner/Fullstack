import React, { useState } from 'react'
import Rows from './components/Rows'
import SubmitButton from './components/SubmitButton'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas',
      number: '040-1234567'
    }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')

  const handleName = (event) => {
    setNewName(event.target.value)
  }

  const handleNumber = (event) => {
    setNewNumber(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()
    const names = Object.values(persons).map(x => x.name)
    if (names.includes(newName)) {
      return window.alert(newName + ' is already added to phonebook!')
    }
    else {
    const newPerson = {
      name: newName,
      number: newNumber
    }
    setPersons(persons.concat(newPerson))
    setNewName('')
    setNewNumber('')
    console.log("button clicked: ", event.target)
    console.log("persons: ", persons)
  }
}

  /*const rows = () => {
    const values = Object.values(persons)
    console.log("keys are: ", values)
    return values.map((x, i) => 
     <li key={i}> 
        {x.name} {x.number}
      </li>)
  }*/



  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input 
            value={newName}
            onChange={handleName}
          />
        </div>
        <div>
          number: <input
            value={newNumber}
            onChange={handleNumber}
          />
        </div>
        <div>
          <SubmitButton />
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        <Rows persons={persons} />
      </ul>
    </div>
  )
}

export default App