import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}
const Part = (props) => {
  return (
  <p>{props.part} {props.exercises}</p>
  )
}
const Content = (props) => {
  return (
    <div>
      <p>
      <Part part1={props.part1} exercises1={props.exercises1} />
      <Part part2={props.part2} exercises2={props.exercises2} />
      <Part part3={props.part3} exercises3={props.exercises3} />
      </p>
    </div>
  )
}
const Total = (props) => {
  return (
    <p> Number of exercises {props.part1.exercises1 + props.part2.exercises2 + props.part3.exercises3} </p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content />
      <Total Number of exercises {...exercises1 + exercises2 + exercises3} />
      </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))