import React from 'react'

const Persons = (props) => {
    console.log("Persons props are: ", props)
    return(
      <li> {props.people.name} {props.people.number} </li>
    )
  }

  export default Persons