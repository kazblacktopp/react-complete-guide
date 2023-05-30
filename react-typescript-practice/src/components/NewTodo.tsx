import { FC, useContext, useRef } from 'react';
import { TodosContext } from '../store/todos-context';

import classes from './NewTodo.module.css';

const NewTodo: FC = () => {
	const { addTodo } = useContext(TodosContext);

	const todoInputRef = useRef<HTMLInputElement>(null);

	function handleAddTodo(event: React.FormEvent) {
		event.preventDefault();

		const enteredText = todoInputRef.current!.value;

		addTodo(enteredText);
	}

	return (
		<form className={classes.form} onSubmit={handleAddTodo}>
			<label htmlFor="todo">Add a todo:</label>
			<input type="text" id="todo" ref={todoInputRef} />
			<button type="submit">Add todo</button>
		</form>
	);
};

export default NewTodo;
