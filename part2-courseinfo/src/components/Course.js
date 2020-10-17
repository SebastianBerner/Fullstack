import React from 'react'


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
    console.log("Course props lol: ", props)
    const {...course} = props
    console.log("decon is: ", course)
  return(
    <div>
      {course.courses.map((x) => {
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

export default Courses