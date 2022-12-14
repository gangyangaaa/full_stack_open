import { useState } from 'react'

const StatisticLine = ({text, value}) => {
  if (text === 'positive') {
    return (
      <tr><td>{text} {value} %</td></tr>
    )
  }
  return (
    <tr><td>{text} {value}</td></tr>
  )
}

const Statistics = ({good, bad, neutral}) => {
  const all = good + bad + neutral
  const average = (good - bad) / all
  const positive = good * 100 / all
  if (all === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }
  return (
    <div>
      <table>
        <tbody>
          <StatisticLine text = 'good' value = {good} />
          <StatisticLine text = 'neutral' value = {neutral} />
          <StatisticLine text = 'bad' value = {bad} />
          <StatisticLine text = 'all' value = {all} />
          <StatisticLine text = 'average' value = {average} />
          <StatisticLine text = 'positive' value = {positive} />
        </tbody>
      </table>

    </div>
  )
}

const Button = ({text, handleClick}) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
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
      <Button handleClick={() => setGood(good + 1)} text='good' />
      <Button handleClick={() => setNeutral(neutral + 1)} text='neutral' />
      <Button handleClick={() => setBad(bad + 1)} text='bad' />
      <h1>statistics</h1>
      <Statistics good = {good} bad = {bad} neutral = {neutral} />
    </div>
  )
}

export default App;
