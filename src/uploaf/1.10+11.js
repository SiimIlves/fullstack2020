import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => <div><h1>{props.header}</h1></div>

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Statistics = (props) => {
  return (
      <tr>
        <td>{props.text}: {props.value}</td>
      </tr>
  )
}

const Statistic = ({ good, neutral, bad, all, average, positive }) => { 
  return (  
    <tbody> 
      <Statistics text='good' value={good} />
      <Statistics text='neutral' value={neutral} />
      <Statistics text='bad' value={bad} />
      <Statistics text='all' value={all} />
      <Statistics text='average' value={average} />
      <Statistics text='positive' value={positive} />
      </tbody>
  )
}

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = good+neutral+bad
  const average = (good-bad)/(all)
  const positive = [100*(good/(all)), '%']
  if (good === 0 && neutral === 0 && bad === 0) {
  return (
    <div>
      <Header header={"give feedback"} />
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      <Header header={"statistics"}/>
      <p>No feedback given.</p>
    </div>
  )
}
else
return (
  <div>
    <Header header={"give feedback"} />
    <Button handleClick={() => setGood(good + 1)} text="good" />
    <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
    <Button handleClick={() => setBad(bad + 1)} text="bad" />
    <Header header={"statistics"}/>
    <table >
    <Statistic 
    good={good}
    neutral={neutral} 
    bad={bad} 
    all={all} 
    average={average} 
    positive={positive} />
    </table>
  </div>
)
}
ReactDOM.render(<App />, document.getElementById('root'))