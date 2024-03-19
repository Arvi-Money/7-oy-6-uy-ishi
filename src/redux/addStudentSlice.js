import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const addStudentSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
   ADD: (state) => {
    return{...state}
   }
  },
});

export const { increment, decrement, incrementByAmount } = addStudentSlice.actions;

export default addStudentSlice.reducer;
