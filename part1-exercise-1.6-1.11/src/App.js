import { useState } from "react";

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
)

const StatisticLine = ({text, value}) => (
  <>
  <td>{text}</td> 
  <td>{value}</td>
  </>
)

const Statistics = ({good, neutral, bad}) => {
  const all = good + bad + neutral
  const average = (good - bad)/all
  const positive = (good/all)*100
  if (good === 0 && neutral === 0 && bad === 0) {
    return (
      <p>No feedback given</p>
    )
  }
  
  return (
    <>
      <table>
        <tbody>
        <tr><StatisticLine text="good" value={good} /></tr>
        <tr><StatisticLine text="neutral" value={neutral} /></tr>
        <tr><StatisticLine text="bad" value={bad} /></tr>
        <tr><StatisticLine text="all" value={all} /></tr>
        <tr><StatisticLine text="average" value={average.toPrecision(1)} /></tr>
        <tr><StatisticLine text="positive" value={`${positive.toPrecision(3)}%`} /></tr>
        </tbody>
      </table>
    </>
  )

}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
 

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good+1)} text = 'good' />
      <Button handleClick={() => setNeutral(neutral+1)} text = 'neutral' />
      <Button handleClick={() => setBad(bad+1)} text = 'bad' />
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}


export default App;
