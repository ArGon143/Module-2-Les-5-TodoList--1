import { useEffect, useState } from 'react';
import styles from './App.module.css';
import todosImg from '../src/todos100x100.png';

export const App = () => {
	const [todos, setTodos] = useState([]);

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/todos')
			.then((loadedData) => loadedData.json())
			.then((loadedTodos) => {
				setTodos(loadedTodos);
			});
	}, []);

	return (
		<div className={styles.app}>
			<header className={styles.appHeader}>
				<img src={todosImg} alt="todos" />
				<h1 className={styles.titleHeader}>Список дел</h1>
			</header>
			{todos.map(({ id, title }) => (
				<div key={id} className={styles.todo}>
					{id}. {title}
				</div>
			))}
		</div>
	);
};
