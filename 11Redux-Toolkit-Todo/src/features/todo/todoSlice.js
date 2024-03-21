import { Tuple, createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
	todos: [{ id: 1, text: "Hello World", isDone: false, isEdited: false }],
};

export const todoSlice = createSlice({
	name: "todo",
	initialState,
	reducers: {
		addTodo: (state, action) => {
			const todo = {
				id: nanoid(),
				text: action.payload,
				isDone: false,
				isEdited: false
			};
			state.todos.push(todo);
		},
		removeTodo: (state, action) => {
			state.todos = state.todos.filter((todo) => todo.id !== action.payload);
		},
		isDoneTodo: (state, action) => {
			state.todos = state.todos.map((todo) => {
				if (todo.id === action.payload) {
					todo.isDone = true
				} 
				return todo
			});
		},
		isEdited : (state, action) => {
			state.todos = state.todos.map((todo) => {
				if (todo.id === action.payload) {
					todo.isEdited = true
				} 
				return todo
			});
		},
		updateTodo: (state, action) => {
			console.log('action', action)
			state.todos = state.todos.map((todo) => {
				if (todo.id === action.payload.id) {
					todo.text = action.payload.text;
					todo.isEdited = false
				}
				return todo
			});
		},
	},
});

export const { addTodo, removeTodo, updateTodo, isDoneTodo, isEdited } = todoSlice.actions;

export default todoSlice.reducer;
