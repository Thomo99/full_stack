import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleOnClick}>
    {props.text}
  </button>
)
  
const Statistics = (props) => {
  return(
    <div>
      <Statistic text='Good' value={props.good}/>
      <Statistic text='Bad' value={props.bad}/>
      <Statistic text='Neutral' value={props.neutral}/>
      <Statistic text='All' value={props.all}/>
      <Statistic text='Average' value={props.average}/>
      <Statistic text='positive' value={props.positive}/>
    </div>
    
  )
}


const Statistic = (props) => <p>{props.text}: {props.value}</p>



const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  const updateValue = (value, setValue, all, setAll) => {
    return (
        setValue(value + 1),
        setAll(all + 1)
    )
  }

  const calcAverage = (good, bad, all) => {
    if (all !== 0) {
      return(
        `${(good - bad)/all}`
      )
    }
  }

  const calcPositive = (good, all) => {
    if (all !== 0) {
      return (
        `${good/all*100}%`
      )
    }
  }



return (
  <div>
    <h1>Give Feedback</h1>
    <Button handleOnClick={() => updateValue(good, setGood, all, setAll)} text='Good'/>
    <Button handleOnClick={() => updateValue(neutral, setNeutral, all, setAll)} text='Neutral'/>
    <Button handleOnClick={() => updateValue(bad, setBad, all, setAll)} text='Bad'/><br></br>
    <h1>Statistics</h1>
    <Statistics good={good} bad={bad} neutral={neutral} all={all} average={calcAverage(good, bad, all)} positive={calcPositive(good, all)}/>  
  </div>
)}

export default App
