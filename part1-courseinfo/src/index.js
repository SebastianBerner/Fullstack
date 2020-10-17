import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  console.log(props)
  return(
  <div>
<h1>{props.course}</h1>
</div>
)}

const Part = (props) => {
  return(
    <div>
    <p> {props.name} {props.exercise} </p>
    </div>
  )
}

const Content = (props) => {
  console.log(props)
  return(
  <div>
    <Part name={props.parts[0].name} exercise={props.parts[0].exercises} />
    <Part name={props.parts[1].name} exercise={props.parts[1].exercises} />
    <Part name={props.parts[2].name} exercise={props.parts[2].exercises} />
  </div>
  )}

const Total = (props) => {
  console.log(props)
  const e1 = props.parts[0].exercises
  const e2 = props.parts[1].exercises
  const e3 = props.parts[2].exercises

  return(
  <div>
    <p>
      Number of exercises {e1+e2+e3}
    </p>
  </div>)
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))