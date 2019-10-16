import React from 'react'
import ReactDOM from 'react-dom'

const Header = props => {
  console.log("Header props: ", props)
  return(
  <h1>{props.name}</h1>
  )
}

const Total = (props) => {
  const {course} = props
  const excersiceArr = course.parts.map(x => x.exercises)
  const total = excersiceArr.reduce((part, sum) => {
    console.log("part is: ", part, "and sum is: ", sum)
    return part + sum
  })

  return <p>yhteensä {total} tehtävää</p>
}
  

const Part = (props) => {
  console.log("Parts props: ", props)

  return(
  <p>{props.part.name} {props.part.exercises}</p>
  )
}


const Content = (props) => {
  const { parts } = props
  console.log("parts are: ", parts)
  return(
    <div>
      {parts.map((part) => {
        return (
          <ul key={part.id}>
          <Part 
            part={part}/>
            </ul>
          )}
      )}
    </div>
  )
}

const Course = (props) => {
  console.log("Course props: ", props)
  const { course } = props //WHY is destructring needed?
return(
  <div>
    <Header name={course.name}/>
    <Content parts={course.parts}/>
    <Total course={course}/>
  </div>
)
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return (
    <div>
      <Course course={course} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)