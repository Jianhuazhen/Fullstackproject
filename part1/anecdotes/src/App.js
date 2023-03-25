import { useState } from 'react'

const Button = (props) => (
  <button onClick = {props.hand}>{props.text}</button>
)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(new Int8Array(anecdotes.length))
  const ran = () =>{
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }
  const vot = () =>{
    const copy = [...points]
    copy[selected] += 1
    setPoints(copy)
  }
  const Most = () => {
    let m = 0
    let end = 0
    for(let i = 0; i<points.length; i++){
      if(points[i]>m){
        m=points[i]
        end = i
      }
    }
    return(
      <div>
        {anecdotes[end]}
      </div>
    )
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <br></br>
      has {points[selected]} votes
      <br></br>
      <Button hand = {vot} text = "vote"></Button>
      <Button hand = {ran} text = "next anecdote"></Button>
      <h2>Anecdote with most votes</h2>
      <Most></Most>
    </div>
  )
}

export default App