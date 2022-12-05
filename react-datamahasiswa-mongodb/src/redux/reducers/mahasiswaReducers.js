import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  airline: [],
};

const airlineSlicer = createSlice({
  name: "airlines",
  initialState,
  reducers: {
    getAllAirlineReducer: (state, action) => {
      state.todos = action.payload;
    },
  },
});

export const { getAllAirlineReducer } = airlineSlicer.actions;
export default airlineSlicer.reducer;
