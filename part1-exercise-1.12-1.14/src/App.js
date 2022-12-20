import { useState } from "react";

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
  const len = anecdotes.length
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(Array(len).fill(0))

  const handleRand = () => {
    const newValue = Math.floor(Math.random()*(len))
    setSelected(newValue)
  }

  const handleVote = () => {
    const copy = [...points]
    copy[selected] += 1
    setPoints(copy)
  }

  let highest = 0;
  for (let i=0; i<len; i++) {
    if (points[i] > points[highest]) {
      highest = i
    }
  }
  
  return (
    <div>
      <h1>Anecdotes of the day</h1>
      <p>{anecdotes[selected]}<br />has {points[selected]} votes</p>
      <button onClick={handleRand}>next anecdote</button>
      <button onClick={handleVote}>Vote anecdote</button>
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[highest]}<br /> has {points[highest]} votes</p>
    </div>
  )
}
export default App;
