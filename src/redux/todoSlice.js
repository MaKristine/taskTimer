import {createSlice} from '@reduxjs/toolkit';

const todoSlice = createSlice({
    name: 'todos',
    initialState: [
        {id:1, title:'my task 1', completed:false, time:0},
        {id:2, title:'my task 2', completed:false, time:0},
        {id:3, title:'my task 3', completed:true, time:0},
    ],
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: Date.now(),
                title: action.payload.title,
                completed: false,
                time: 0,
            };
            state.push(newTodo)
        },
        toggleComplete: (state, action) => {
            const index = state.findIndex(
                (todo) => todo.id === action.payload.id
            );
            state[index].completed = action.payload.completed;
        },
        deleteTodo: (state, action) => {
            return state.filter((todo) => todo.id !== action.payload.id)
        },
        timerTodo: (state, action) => {
            const index = state.findIndex(
                (todo) => todo.id === action.payload.id
            );
            state[index].time++;
            
        },
    },
});

export const {
    addTodo,
    toggleComplete,
    deleteTodo,
    timerTodo,
    } = todoSlice.actions;

export default todoSlice.reducer;