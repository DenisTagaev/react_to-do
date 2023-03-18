import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from './tasksSlice';

export const store = configureStore({
    // A general collection for the props to share around the app 
    reducer: {
        tasks: tasksReducer,
    }
});