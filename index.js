
//Part1.1
import React from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
  const course = 'Half Stack application development'
  const parte1 = 'Fundamentals of React'
  const exercises1 = 10
  const parte2 = 'Using props to pass data'
  const exercises2 = 7
  const parte3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
		<Header course = {course} />
		<Content part1 = {parte1} parte2 = {parte2} part3 = {parte3} exercises1 = {exercises1} exercises2 = {exercises2} exercises3 = {exercises3} />
		<Total exercises1 = {exercises1} exercises2 = {exercises2} exercises3 = {exercises3} />
    </div>
  )
};

const Header = (props) => {
	return (
		<div>
			<h1>{props.course}</h1>
		</div>
	)
};

const Content = (props) => {
	return (
		<div>
			<p>
				{props.parte1}: {props.exercises1}
			</p>
			<p>
				{props.parte2}: {props.exercises2}
			</p>
			<p>
				{props.parte3}: {props.exercises3}
			</p>
		</div>
	)
};

const Total = (props) => {
	return (
		<div>
			<p>Number of exercises: {props.exercises1 + props.exercises2 + props.exercises3}</p>
		</div>
	)
};

ReactDOM.render(<App />, document.getElementById('root'));
