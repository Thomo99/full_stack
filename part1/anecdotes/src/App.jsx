import { useState } from 'react'
import './App.css'


const Button = (props) => (
  <button className='button' onClick={props.handleOnClick}>{props.text}</button>
)



const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  
 
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));

  const cycle = () => {
    return(
      setSelected(Math.floor(Math.random()* (anecdotes.length)))
    )
  }
  const increaseVote = () => {
      const newVotes = [...votes]
      newVotes[selected] += 1
      setVotes(newVotes)
  }
  const findHighest = () => {
    let maxIndex = 0
    for (let i = 0; i < votes.length; i++){
      if (votes[i] > votes[maxIndex]){
        maxIndex = i
      }
    }
    console.log("The highest is now ", maxIndex)
    return maxIndex
  }
  
    

  

  return (
    <div>
      <div>
        <h3>Anecdote of the Day</h3>
        {anecdotes[selected]}
      </div>
      <Button handleOnClick={cycle} text='New'/>
      <Button handleOnClick={increaseVote} text='Vote'/>
      <div>
        <p>This has {votes[selected]} votes.</p>
      </div>
      <h3>Anecdote With Most Votes</h3>
      {anecdotes[findHighest()]}
    </div>
  )
}

export default App