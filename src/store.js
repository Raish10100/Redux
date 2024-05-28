import todoReducer from './slices/todoSlice.js';
import { configureStore } from '@reduxjs/toolkit';


const store = configureStore({
    reducer: {
        todo: todoReducer
    },
    devTools: true
})

export default store; 