const Header = (props) => {
  return (
      <h1>{props.name}</h1>
  )
}

const Part = (props) => {
  return (
    <p>{props.part} {props.exercise}</p>
  )
}


const Content = (props) => {
  return (
    <>
      <Part part={props.part1} exercise={props.exercise1} />
      <Part part={props.part2} exercise={props.exercise2} />
      <Part part={props.part3} exercise={props.exercise3} /> 
    </>
  )
}

const Total = (props) => {
  return (
      <p>Number of exercises {props.exercise1 + props.exercise2 + props.exercise3}</p>
  )
}




const App = () => {
  const course ='Half Stack application development'
  const parts = [{
    name: 'Fundamentals of React',
    exercises: 10
  },
  {
    name:'Using props to pass data',
    exercises: 7
  },
  {
    name: 'State of a component',
    exercises: 14
  }]


  return (

    <div>
      <Header name={course} />
      <Content part1 = {parts[0].name} exercise1 = {parts[0].exercises} part2 = {parts[1].name} exercise2 = {parts[1].exercises} part3 = {parts[2].name} exercise3 = {parts[2].exercises}/>
      <Total exercise1 = {parts[0].exercises} exercise2 = {parts[1].exercises} exercise3 = {parts[2].exercises} />
    </div>
)}


export default App;
