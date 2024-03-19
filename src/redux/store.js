import { configureStore } from "@reduxjs/toolkit";
import addStudentSlice from "./addStudentSlice";

export const store = configureStore({
    reducer: addStudentSlice,
})