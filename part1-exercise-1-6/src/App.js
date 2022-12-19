import { useState } from "react";

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
)

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = good + bad + neutral
  const average = (good - bad)/all
  const positive = (good/all)*100


  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good+1)} text = 'good' />
      <Button handleClick={() => setNeutral(neutral+1)} text = 'neutral' />
      <Button handleClick={() => setBad(bad+1)} text = 'bad' />
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {all}</p>
      <p> average {average}</p>
      <p>positive {positive} %</p>
    </div>
  )
}


export default App;
