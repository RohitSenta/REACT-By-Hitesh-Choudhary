import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, updateTodo } from "../features/todo/todoSlice";

const AddTodo = () => {
	const [input, setInput] = useState("");
	const [todo, setTodo] = useState({});
	const [todoEdit, setTodoEdit] = useState("");
	const dispatch = useDispatch();
	const todos = useSelector((state) => state.todos);
	console.log("todos", todos);

	useEffect(() => {
		let tobeEdit = todos.filter((todo) => todo.isEdited === true);
		console.log("tobeEdit ==>", tobeEdit[0]?.text);
		setTodoEdit(tobeEdit[0]?.text);
		setTodo(tobeEdit[0]);
	}, [todos]);
	console.log("todoEdit", todoEdit);

	const addTodoHandler = (e) => {
		e.preventDefault();
		dispatch(addTodo(input));
		setInput("");
	};

	const editTodoHandler = (e) => {
		e.preventDefault();
		dispatch(
			updateTodo({
				id: todo.id,
				text: todoEdit,
			})
		);
		setTodoEdit("");
	};

	return todoEdit !== undefined ? (
		<form onSubmit={editTodoHandler} className="space-x-3 mt-12">
			<input
				type="text"
				placeholder="Enter a Todo..."
				value={todoEdit}
				className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
				onChange={(e) => setTodoEdit(e.target.value)}
			/>
			<button
				type="submit"
				className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
			>
				Add Todo
			</button>
		</form>
	) : (
		<form onSubmit={addTodoHandler} className="space-x-3 mt-12">
			<input
				type="text"
				placeholder="Enter a Todo..."
				value={input}
				className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
				onChange={(e) => setInput(e.target.value)}
			/>
			<button
				type="submit"
				className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
			>
				Add Todo
			</button>
		</form>
	);
};

export default AddTodo;
