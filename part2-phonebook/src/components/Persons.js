import React from 'react'
import DeleteButton from './DeleteButton'

const Persons = (props) => {
    console.log("Persons props are: ", props)
    return(
      <div id="parent">
        <li> {props.people.name} {props.people.number} </li>
        <DeleteButton person={props.people.name} onRemove={props.onRemove}/>
      </div>
    )
  }

  export default Persons