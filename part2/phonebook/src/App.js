import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Display from './components/Display'
import pService from './services/persons'


const App = () => {
  const [persons, setPersons] = useState([])
  const [filter, setFilter] = useState('')
  const [newName, setNewName] = useState('')
  const [newNum, setNum] = useState('')

  useEffect(() => {
    pService
      .getAll()
      .then(rPerson => {
        setPersons(rPerson)
      })
  }, [])

  
  const handleDelete = (id) => {
    setPersons(persons.filter(p => p.id !== id))
  }
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
    const findp = persons.find(arr => arr.name===newName)
    if(findp){
      const conf =  window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)
      if(conf){
          const updatedPerson = { ...findp, number: newNum };
          pService.update(findp.id, updatedPerson).then(returnedP => {
            setPersons(persons.map(person => person.id === returnedP.id ? returnedP : person))
          })
          .catch(error => {
            alert(
              `the note '${findp.name}' was already deleted from server`
            )
          })
          }
    }
    else{
      const pObject = {
      name: newName,
      number: newNum
    }
      pService
          .create(pObject)
          .then(rPerson => {
            setPersons(persons.concat(rPerson))
          })
    }
  }
  
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter = {filter} handle = {handleFilter}/>
      <h3>add a new</h3>
      <PersonForm num = {newNum} name = {newName} add = {addPerson} handlenam = {handleNameChange} handlenum = {handleNumChange}/>
      <h3>Numbers</h3>
      <Display persons = {persons} filter = {filter} button = {pService} onDelete={handleDelete}/>
    </div>
  )
}

export default App