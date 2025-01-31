import { configureStore } from "@reduxjs/toolkit";
import { todoReducer } from "../reducer/todo.reducer";

export const store = configureStore({
    reducer: todoReducer,
    devTools: process.env.NODE_ENV === "development" ? true : false
});
