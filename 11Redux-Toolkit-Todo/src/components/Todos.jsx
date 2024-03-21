import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
	removeTodo,
	updateTodo,
	isDoneTodo,
	isEdited,
} from "../features/todo/todoSlice";

const Todos = () => {
	const todos = useSelector((state) => state.todos);
	const dispatch = useDispatch();
	return (
		<div>
			<div className="mt-6 my-6 text-2xl">Todos</div>
			<ul className="list-none">
				{todos?.length > 0 ? (
					todos.map((todo) => (
						<li
							key={todo.id}
							className="mt-4 flex justify-between w-2/3 mx-auto items-center bg-zinc-800 px-4 py-2 rounded"
						>
							<div
								className={
									todo.isDone ? "line-through text-red-400" : "text-white"
								}
							>
								{todo.text}
							</div>
							<div>
								<button
									onClick={() => {
										dispatch(isDoneTodo(todo.id));
									}}
									className={
										todo.isDone
											? "text-white bg-green-700 border-0 mx-2 py-1 px-4 focus:outline-none hover:bg-green-700 rounded text-md"
											: "text-white bg-green-500 border-0 mx-2 py-1 px-4 focus:outline-none hover:bg-green-600 rounded text-md"
									}
									disabled={todo.isDone}
								>
									<i className="fa-solid fa-check"></i>
								</button>

								<button
									onClick={() => {
										dispatch(isEdited(todo.id));
									}}
									className={
										todo.isDone
											? "text-white bg-yellow-700 hover:bg-yellow-700 border-0 mx-2 py-1 px-4 rounded text-md"
											: "text-white bg-yellow-500 border-0 mx-2 py-1 px-4 focus:outline-none hover:bg-yellow-600 rounded text-md"
									}
									disabled={todo.isDone}
								>
									<i className="fa-regular fa-pen-to-square"></i>
								</button>

								<button
									onClick={() => {
										dispatch(removeTodo(todo.id));
									}}
									className="text-white bg-red-500 border-0 mx-2 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
								>
									<i className="fa-regular fa-trash-can"></i>
								</button>
							</div>
						</li>
					))
				) : (
					<h1 className="text-md">No Todo Available</h1>
				)}
			</ul>
		</div>
	);
};

export default Todos;
