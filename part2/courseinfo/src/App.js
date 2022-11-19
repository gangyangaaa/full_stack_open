const Header = ({ course }) => <h2>{course}</h2>

const Total = ({ parts }) => {
  return (
    <p>
      <b>
        total of {parts.reduce((total, part) => total + part.exercises, 0)} exercises
      </b>
    </p>
  )
}

const Content = ({ parts }) => 
  <>
    {parts.map(parts => 
      <p key = {parts.id}>
        {parts.name} {parts.exercises}
      </p>)}  
  </>

const Course = ({ courses }) => {
  return (
    <div>
      {courses.map(course =>
        <div key = {course.id} >
          <Header course = {course.name} />
          <Content parts = {course.parts} />
          <Total parts = {course.parts} />
        </div>
        )}
    </div>
  )
}

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      <h1>Web development curriculum</h1>
      <Course courses = {courses} />
    </div>
  )
}

export default App