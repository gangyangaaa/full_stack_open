import { useState } from 'react'

const Statistics = (props) => {
  return(
    <div>
      <p>{props.text} {props.value}</p>
    </div>
    
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={() => setGood(good + 1)}>
        good
      </button>
      <button onClick={() => setNeutral(neutral + 1)}>
        neutral
      </button>
      <button onClick={() => setBad(bad + 1)}>
        bad
      </button>
      <h1>statistics</h1>
      <Statistics text = 'good' value = {good} />
      <Statistics text = 'neutral' value = {neutral} />
      <Statistics text = 'bad' value = {bad} />
      <Statistics text = 'all' value = {neutral + good + bad} />
      <Statistics text = 'average' value = {(good - bad) / (neutral + good + bad)} />
      <Statistics text = 'positive' value = {good / (neutral + good + bad)} />
    </div>
  )
}

export default App;
