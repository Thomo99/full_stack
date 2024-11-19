import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleOnClick}>
    {props.text}
  </button>
)
  
const Display = (props) => <p>{props.text}: {props.value}</p>


const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const updateValue = (value, setValue) => {
    return (
        setValue(value + 1)
    )
  }



return (
  <div>
    <h1>Give Feedback</h1>
    <Button handleOnClick={() => updateValue(good, setGood)} text='Good'/>
    <Button handleOnClick={() => updateValue(neutral, setNeutral)} text='Neutral'/>
    <Button handleOnClick={() => updateValue(bad, setBad)} text='Bad'/><br></br>
    <h1>Statistics</h1>
    <Display text='Good' value={good}/>
    <Display text='Neutral' value={neutral}/>
    <Display text='Bad' value={bad}/>
  </div>
)}

export default App
