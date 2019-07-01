import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => (
    <button onClick={props.handleClick}>
        {props.text}
        </ button> 
)

const Anecdote = (props) => {
    console.log(props)
    return(
    <div>
        <p> {props.anecdote}</p>
        <p> has {props.amountOfVotes} votes</p>
    </div>
    )
}

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVote] = useState(new Array(anecdotes.length).fill(0))

const nextRandom = () => {
    const a = Math.floor(Math.random()*anecdotes.length)
    setSelected(a)
}

const vote = () => {
    console.log(votes)
    let current = votes[selected]
    votes[selected] = current + 1
    console.log(votes[selected])
    setVote(votes)
    }


  return (
    <div>
      <Anecdote anecdote={props.anecdotes[selected]} amountOfVotes={votes[selected]} />
      <Button handleCLick={() => vote()} text={"vote"} />
      <Button handleClick={() => nextRandom()} text={"next anecdote"} />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]
// {props.anecdotes[selected]}
ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)