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

export default Course