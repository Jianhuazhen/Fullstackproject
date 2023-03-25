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
const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td> <td>{props.value}</td>
    </tr>
  )
}

const Statistics = (props) => {
  const average = (props.good - props.bad) / props.total
  const positivePercentage = (props.good / props.total) * 100

  if (props.total === 0) {
    return <p>No feedback given</p>;
  }

  return (
    <div>
      <StatisticLine text="good" value={props.good} />
      <StatisticLine text="neutral" value={props.neutral} />
      <StatisticLine text="bad" value={props.bad} />
      <StatisticLine text="all" value={props.total} />
      <StatisticLine text="average" value={average} />
      <StatisticLine text="positive" value={`${positivePercentage} %`} />
    </div>
  )
}

const Button = (props)=>(
  <button onClick={props.handleClick}>{props.text}</button>
)

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
      <Button handleClick={() => Handleg()} text="good" />
      <Button handleClick={() => Handlen()} text="neutral" />
      <Button handleClick={() => Handleb()} text="bad" />
      <h1>statistics</h1>
      <table>
        <Statistics good={good} neutral={neutral} bad={bad} total={total} />
      </table>
      </div>
  )
}

export default App