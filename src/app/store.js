import  { configureStore } from "@reduxjs/toolkit";

// Import the reducer from the todoSlice file
import todoReducer from "../features/todo/todoSlice";

// Create the Redux store using the configureStore function
// The store is configured with the todoReducer as the reducer
// This allows the application to manage the state of the todo list
export const store = configureStore({
    reducer: todoReducer
})

