import { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Display from './components/Display'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [filter, setFilter] = useState('')
  const [newName, setNewName] = useState('')
  const [newNum, setNum] = useState('')

  const handleFilter = (event) =>{
    setFilter(event.target.value)
  }
  const handleNumChange = (event) => {
    setNum(event.target.value)
  }
  const handleNameChange = (event) =>{
    setNewName(event.target.value)
  }
  const addPerson = (event) => {
    event.preventDefault()
    if(persons.find(arr => arr.name===newName)){
      alert(`${newName} is already added to phonebook`)
    }
    else{
      const pObject = {
      name: newName,
      number: newNum
    }
    setPersons(persons.concat(pObject))
    setNewName('')
    }
  }
  
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter = {filter} handle = {handleFilter}/>
      <h3>add a new</h3>
      <PersonForm num = {newNum} name = {newName} add = {addPerson} handlenam = {handleNameChange} handlenum = {handleNumChange}/>
      <h3>Numbers</h3>
      <Display persons = {persons} filter = {filter}/>
    </div>
  )
}

export default App