import { useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
	
	return (
		<div className="bg-gray-200 p-10 rounded-lg">
			<h1 className="text-4xl">Redux Toolkit</h1>
			<AddTodo />
			<Todos />
		</div>
	);
}

export default App;
