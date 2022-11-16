import { useState } from 'react'

const Header = (props) => {
  return (
    <h1>{props.text}</h1>
  )
}

const Button = ({text, handleClick}) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>

  )
}

const Max = ({anecdotes, votes}) => {
  const max = Math.max(...votes)
  const index = votes.indexOf(max)
  if (max === 0) {
    return (
      <p>
        No votes yet
      </p>
    )
  }
  return (
    <p>
      {anecdotes[index]}
      <br></br>
      has {max} votes
    </p>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))

  const handleVote = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
  }

  const handleSelect = () => {
    const newLine = Math.floor(Math.random() * anecdotes.length)
    setSelected(newLine)
  }
 
  return (
    <div>
      <Header text = 'Anecdote of the day' />
      <p>
        {anecdotes[selected]}
        <br></br>
        has {votes[selected]} votes
      </p>

      <p>
        <Button handleClick={handleVote} text = 'vote'/>
        <Button handleClick={handleSelect} text = 'next anecdote'/>
      </p>
      <Header text = 'Anecdote with most votes' />
      <Max anecdotes = {anecdotes} votes = {votes} />
    </div>
  )
}

export default App;
