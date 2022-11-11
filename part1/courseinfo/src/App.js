const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>{props.name} {props.number}</p>
    </div>
  )
}

const Content = (props) => {

  return (
    <div>
      <Part name = {props.names[0]} number = {props.exercises[0]}/>
      <Part name = {props.names[1]} number = {props.exercises[1]}/>
      <Part name = {props.names[2]} number = {props.exercises[2]}/>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.exercises[0] + props.exercises[1] + props.exercises[2]}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Srack application developement'
  const names = [
    'Fundamentals of React', 
    'Using props to pass data',
    'State of acomponent'
  ]
  const exercises = [10, 7, 14]

  return (
    <div>
      <Header course = {course} />
      <Content names = {names} exercises = {exercises}/>
      <Total exercises = {exercises} />
    </div>
  )
}

export default App;