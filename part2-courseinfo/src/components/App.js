import React from 'react'
import Courses from './Course'

const App = ({courses}) => {
    console.log("Hello: ", courses)
    return (
      <div>
        <Courses courses={courses} />
      </div>
    )
  }

  export default App