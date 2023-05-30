import { FC, useContext } from 'react';
import TodoItem from './TodoItem';

import classes from './Todos.module.css';
import { TodosContext } from '../store/todos-context';

const Todos: FC = () => {
	const { items, removeTodo } = useContext(TodosContext);

	return (
		<ul className={classes.todos}>
			{items.map(item => (
				<TodoItem
					key={item.id}
					todoText={item.text}
					onDeleteTodo={removeTodo.bind(null, item.id)}
				/>
			))}
		</ul>
	);
};

export default Todos;
