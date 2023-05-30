import { FC, ReactNode, createContext, useState } from 'react';
import Todo from '../models/Todo';

interface TodosContextObj {
	items: Todo[];
	addTodo: (text: string) => void;
	removeTodo: (id: number) => void;
}

export const TodosContext = createContext<TodosContextObj>({
	items: [],
	addTodo: () => {},
	removeTodo: () => {},
});

const TodosContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
	const [todos, setTodos] = useState<Todo[]>([]);

	function handleAddTodo(todoText: string) {
		const newTodo = new Todo(todoText);

		setTodos(prevTodo => prevTodo.concat(newTodo));
	}

	function handleRemoveTodo(id: number) {
		setTodos(prevTodos => {
			const updatedTodos = prevTodos.filter(todo => todo.id !== id);

			return updatedTodos;
		});
	}

	const contextValue: TodosContextObj = {
		items: todos,
		addTodo: handleAddTodo,
		removeTodo: handleRemoveTodo,
	};

	return (
		<TodosContext.Provider value={contextValue}>
			{children}
		</TodosContext.Provider>
	);
};

export default TodosContextProvider;
