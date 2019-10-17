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

  return <h4>yhteensä {total} tehtävää</h4>
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
          <div key={part.id}>
          <Part 
            part={part}/>
            </div>
          )}
      )}
    </div>
  )
}

const Courses = (props) => {
  console.log("Course props: ", props)
  const { courses } = props //WHY is destructring needed?
return(
  <div>
    {courses.map((x) => {
      return(
      <div key={x.id}>
        <Header name={x.name}/>
        <Content parts={x.parts}/>
        <Total course={x}/>
      </div>)
    })}    
  </div>
)
}

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]


  return (
    <div>
      <Courses courses={courses} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)