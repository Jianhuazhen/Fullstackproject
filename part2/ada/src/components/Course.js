const Header = (props) => <h1>{props.name}</h1>

const Total = (props) => {
  const tot = props.sum.map(part => part.exercises)
  const total = tot.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  )
  return(
    <div>
      <b>total of {total} exercises</b>
    </div>
  )
}

const Part = (props) => 
  <p>
    {props.name} {props.exercises}
  </p>

const Content = (props) => {
  return(
    <div>
      {props.parts.map(part => <Part key={part.id} name = {part.name} exercises = {part.exercises} />)}
    </div>
  )
}

const Course = ({course}) => {
  return(
    <div>
    <Header name = {course.name} />
    <Content parts = {course.parts}/>
    <Total sum = {course.parts}/>
  </div>
  )
}

export default Course