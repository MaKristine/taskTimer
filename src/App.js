import React from 'react';
import './bootstrap/css/bootstrap.min.css';
import AddTodoForm from './components/AddTodoForm';
import TodoList from './components/TodoList';
//import TotalCompleteItems from './components/TotalCompleteItems';

const App = () => {
	return (
		<div className='container bg-white p-4 mt-5'>
			<h1>My Task List</h1>
			<AddTodoForm />
			<TodoList />
			{/* <TotalCompleteItems /> */}
		</div>
	);
};

export default App;
