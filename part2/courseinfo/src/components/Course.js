import React from 'react'

const Header = ({ title }) => {
  return (
    <h1>{title}</h1>
  )
}

const Total = ({ parts }) => {
  const sum = parts.reduce((total, curr) => total+curr.exercises, 0)
  return(
    <h3>total of {sum} exercises</h3>
  ) 
}

const Part = ({ part }) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>    
  )
}

const Content = ({ parts }) => {
  const partList = parts.map(part => <Part key={part.id} part={part}/>)
  return (
    <div>
      {partList}
    </div>
  )
}

const Course = ({ course }) => {
    const { name, parts } = course
    return (
        <div>
            <Header title={name} />
            <Content parts={parts} />
            <Total parts={parts} />
        </div>
)}

export default Course
