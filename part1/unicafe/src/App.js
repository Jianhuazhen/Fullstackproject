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

const App = () => {
  const course = 'give feedback'
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAll] = useState([])

  const Handleg = () => {
    setAll(allClicks.concat('G'))
    setGood(good + 1)
  }
  
  const Handlen = () => {
    setAll(allClicks.concat('N'))
    setNeutral(neutral + 1)
  }
  
  const Handleb = () => {
    setAll(allClicks.concat('B'))
    setBad(bad + 1)
  }
  console.log(allClicks)
  return (
    <div>
      <Header course={course}/>
      <button onClick={Handleg}>good</button>
      <button onClick={Handlen}>neautral</button>
      <button onClick={Handleb}>bad</button>
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
    </div>
  )
}

export default App