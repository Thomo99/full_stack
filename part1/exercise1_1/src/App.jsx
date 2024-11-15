const Header = (props) => {
   return <h1>{props.course}</h1>
}

const Content = (props) => {
  return <ul>
    {props.parts.map((part, index) => 
    <li key={index}>{part.name}: {part.num}</li>)}
  </ul>
}

const Total = (props) => {
  return <p>Total number of exercises: {props.total}</p>
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {name:'Fundamentals of React', num: 10},
    {name:'Using props to pass data', num: 7},
    {name:'State of a component', num: 14}
  ]

  return (
    <div>
      <Header course={course} />
      <Content  parts={parts}/>
      <Total  total = {parts[0].num + parts[1].num + parts[2].num}/>
    </div>
  )
}

export default App