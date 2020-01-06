import React from 'react'

const DeleteButton = (props) => {
    console.log("One pers props are: ", props)
    return(
        <div>
          <button onClick={() => props.onRemove(props.person)}>
              delete</button>
        </div>
    )
}

export default DeleteButton