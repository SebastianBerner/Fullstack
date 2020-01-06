import React from 'react'
import Persons from './Persons'

const Rows = (props) => {
    console.log("rows props are: ", props)
    const { ...list } = props
    return(
        list.persons.map(person =>  
        <Persons
            key={person.name}
            people={person}
            onRemove={props.onRemove}
        />)
    )
        }

export default Rows