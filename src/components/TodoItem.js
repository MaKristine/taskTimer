import React, { useState, useEffect } from 'react';
import {useDispatch} from 'react-redux';
import {toggleComplete, deleteTodo, timerTodo} from '../redux/todoSlice';
import { useTimer } from 'react-timer-hook';

const TodoItem = ({ id, title, completed, time }) => {
	const dispatch = useDispatch();

	const handleCompleteClick = () => {
		dispatch(
			toggleComplete({id:id, completed: !completed})
		);
	};

	const handleDeleteClick = () => {
		dispatch(deleteTodo({ id: id}))
	};

	const handleTimer = () => {
		
		setInterval( function() {
			dispatch(
				timerTodo({id:id, time:time})
			);
			
		 }, 1000 )
		 
		 const totalSecondsPassed = time,
					totalMinutesPassed = Math.floor(totalSecondsPassed/60),
					hours = Math.floor(totalMinutesPassed/60),
					minutes = totalMinutesPassed % 60,
					seconds = totalSecondsPassed % 60;
		   
			document.getElementById(id).innerHTML = `${hours} hours ${minutes} minutes ${seconds} seconds`
			
			 
	};

	return (
		<li className={`list-group-item ${completed && 'list-group-item-success'}`}>
			<div className='d-flex justify-content-between'>
				<span className='d-flex align-items-center'>
				<button onClick={handleTimer} type="button" class="btn btn-default btn-sm" aria-hidden={completed}>
				<span aria-hidden={completed}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-circle" viewBox="0 0 16 16">
				<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
				<path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
				</svg></span>
				</button>
					<input 
					type='checkbox' 
					className='mr-3' 
					checked={completed}
					onChange={handleCompleteClick}>
					</input>
					{title}
				</span>
				<div id={id}></div>
				<button onClick={handleDeleteClick} className='btn btn-danger'>Delete</button>
			</div>
		</li>
	);
};

export default TodoItem;
