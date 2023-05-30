import { FC } from 'react';
import classes from './TodoItem.module.css';

const TodoItem: FC<{ todoText: string; onDeleteTodo: () => void }> = ({
	todoText,
	onDeleteTodo,
}) => {
	return (
		<li className={classes.item} onClick={onDeleteTodo}>
			{todoText}
		</li>
	);
};

export default TodoItem;
