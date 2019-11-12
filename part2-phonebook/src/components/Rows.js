import React from 'react'
import Persons from './Persons'

const Rows = (props) => {
    console.log("rows props are: ", props)
    const { ...list } = props
    console.log("list is: ", list.persons)
    return(
        list.persons.map(person =>  
        <Persons
            key={person.name}
            people={person}
        />)
    )
        }

export default Rows