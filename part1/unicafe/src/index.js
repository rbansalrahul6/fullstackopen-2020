import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Button = ({ text, handleClick }) => (
  <button onClick={handleClick}>{text}</button>
)

const Statistic = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
)

const Statistics = ({ good, neutral, bad }) => {
  const avg = (good - bad) / (good + neutral + bad)
  const positive = (good/(good + neutral + bad)) * 100

  return (
    <table>
      <tbody>
        <Statistic text='good' value={good} />
        <Statistic text='neutral' value={neutral} />
        <Statistic text='bad' value={bad} />
        <Statistic text='average' value={avg} />
        <Statistic text='positive' value={`${positive} %`} />
      </tbody>
    </table>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const hasFeedback = () => good || neutral || bad

  const voteGood = () => setGood(good+1)
  const voteNeutral = () => setNeutral(neutral+1)
  const voteBad = () => setBad(bad+1)

  return (
  <div>
    <h1>give feedback</h1>
    <Button text='good' handleClick={voteGood} />
    <Button text='neutral' handleClick={voteNeutral} />
    <Button text='bad' handleClick={voteBad} />

    <h1>statistics</h1>
    {!hasFeedback() ? <p>No feedback given</p> :
    <Statistics 
      good={good}
      neutral={neutral}
      bad={bad}
    />}
  </div>
)}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
