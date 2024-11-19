import { useState } from "react"

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Display = (props) => <div>{props.text}</div>


const App = () => {
  const [value, setValue] = useState(10)

  const setToValue = (newValue) => {
    console.log("New value ", newValue)
    setValue(newValue)
  }  

  return (
    <div>
      <Display text={value}/>
      <Button handleClick = {() => setToValue(value + 1000)} text='Thousand' />
      <Button handleClick = {() => setToValue(0)} text='Reset'/>
    </div>
  )
}
export default App