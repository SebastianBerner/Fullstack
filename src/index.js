import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Header = (props) => {
  return(
  <div>
    <h1>{props.title}</h1>
  </div>
)}

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
    </button>
)

const Statistics = (props) => {
  console.log(props)
  return(
    <div>
      <p> {props.text} {props.stats} {props.text1} </p>
    </div>
  )
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodClick = newValue => {
    setGood(1 + newValue)
  }

  const badClick = newValue => {
    setBad(newValue + 1)
  }

  const neutralClick = newValue => {
    setNeutral(newValue + 1)
  }

  const all = good + neutral + bad
  const g = good * 1
  const b = bad * -1
  const average = (g + b) / all
  const positive = (good / all) * 100

  const feedback = "give feedback"
  const stat = "statistics"
  const button1 = "good"
  const button2 = "netural"
  const button3= "bad"
  const pos = "positive"
  const avg = "average"
  const alll = "all"
  const procent = "%"

  if (all !== 0)
  return (
    <div>
      <Header title={feedback}/>
      <Button handleClick={() => goodClick(good)} text={button1} />
      <Button handleClick={() => neutralClick(neutral)} text={button2} />
      <Button handleClick={() => badClick(bad)} text={button3} />
      <Header title={stat} />
      <Statistics text={button1} stats={good} />
      <Statistics text={button2} stats={neutral} />
      <Statistics text={button3} stats={bad} />
      <Statistics text={alll} stats={all} />
      <Statistics text={avg} stats={average} />
      <Statistics text={pos} stats={positive} text1={procent} />
    </div>
  )
  else
  return (
    <div>
      <Header title={feedback}/>
      <Button handleClick={() => goodClick(good)} text={button1} />
      <Button handleClick={() => neutralClick(neutral)} text={button2} />
      <Button handleClick={() => badClick(bad)} text={button3} />
      <Header title={stat} />
      <p> No feedback given</p>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)