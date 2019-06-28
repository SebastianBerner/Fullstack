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

const Statistic = (props) => {
  console.log(props)
  return(
    <tr>
      <td> {props.text} </td>
      <td> {props.stats}</td>
      <td> {props.text1} </td>
    </tr>
  )
}
const Statistics = (props) => {
  console.log(props)
  return(
      <table>
        <tbody>
          <Statistic text={"good"} stats={props.good} />
          <Statistic text={"neutral"} stats={props.neutral} />
          <Statistic text={"bad"} stats={props.bad} />
          <Statistic text={"all"} stats={props.all} />
          <Statistic text={"average"} stats={props.average} />
          <Statistic text={"positive"} stats={props.positive} text1={"%"} />
        </tbody>
      </table>
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

  if (all !== 0)
  return (
    <div>
      <Header title={feedback}/>
      <Button handleClick={() => goodClick(good)} text={"good"} />
      <Button handleClick={() => neutralClick(neutral)} text={"neutral"} />
      <Button handleClick={() => badClick(bad)} text={"bad"} />
      <Header title={stat} />
      <Statistics good={good} neutral={neutral} bad={bad} all={all} average={average} positive={positive} />
    </div>
  )
  else
  return (
    <div>
      <Header title={feedback}/>
      <Button handleClick={() => goodClick(good)} text={"good"} />
      <Button handleClick={() => neutralClick(neutral)} text={"neutral"} />
      <Button handleClick={() => badClick(bad)} text={"bad"} />
      <Header title={stat} />
      <p> No feedback given</p>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)