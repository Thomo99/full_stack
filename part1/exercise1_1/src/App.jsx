const Header = (props) => {
   return <h1>{props.course}</h1>
}

const Content = (props) => {
  return <ul>
    <li>{props.part1.name}</li>
    <li>{props.part2.name}</li>
    <li>{props.part3.name}</li>
  </ul>
}

const Total = (props) => {
  return <p>Total number of exercises: {props.total}</p>
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course} />
      <Content  part1={part1} part2={part2} part3={part3} />
      <Total  total = {part1.exercises + part2.exercises + part3.exercises}/>
    </div>
  )
}

export default App