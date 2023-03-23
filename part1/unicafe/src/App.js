import React, { Component }  from 'react';
import { useState } from 'react'

const Header = (props) =>{
  return(
    <div>
      <h1>
        {props.course}
      </h1>
    </div>
  )
}
const Statistics = (props) => {
  const a = (props.g-props.b)/(props.t)
  return(
    <div>
      <p>good {props.g}</p>
      <p>neutral {props.n}</p>
      <p>bad {props.b}</p>
      <p>all {props.t}</p>
      <p>
        average {a}
      </p>
      <p>
        prositive {props.g/props.t} %
      </p>
    </div>
  )
}
const Funcreturn = (props) => {
  if(props.g>0 || props.n>0 || props.b>0){
    return Statistics(props)
  }
  else{
    return(
      <div>
        <p>
          No feedback given
        </p>
      </div>
    )
  }
}

const App = () => {
  const course = 'give feedback'
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAll] = useState([])
  const [total, setTotal] = useState(0)

  const Handleg = () => {
    setAll(allClicks.concat('G'))
    const updatedg = good + 1
    setGood(updatedg)
    setTotal(updatedg + neutral + bad)
  }
  
  const Handlen = () => {
    setAll(allClicks.concat('N'))
    const updatedn = neutral + 1
    setNeutral(updatedn)
    setTotal(good + updatedn + bad)
  }
  
  const Handleb = () => {
    setAll(allClicks.concat('N'))
    const updatedb = bad + 1
    setBad(updatedb)
    setTotal(good + neutral + updatedb)
  }
  return (
    <div>
      <Header course={course}/>
      <button onClick={Handleg}>good</button>
      <button onClick={Handlen}>neutral</button>
      <button onClick={Handleb}>bad</button>
      <h1>statistics</h1>
      <Funcreturn g = {good} n = {neutral} b = {bad} t = {total} ></Funcreturn>
      </div>
  )
}

export default App