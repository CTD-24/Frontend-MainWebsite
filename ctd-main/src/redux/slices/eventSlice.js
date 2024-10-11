import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "",
    desc: "",
    rules: [],
    color: "",
    date: "",  // Change 'prizes' to 'date'
};   

export const eventSlice = createSlice({
    name: "event",
    initialState,
    reducers: {
        showEvent: (state, action) => {
            state.name = action.payload.name;
            state.desc = action.payload.description;
            state.rules = action.payload.rules;  // Ensure this matches your payload structure
            state.color = action.payload.colors;
            state.date = action.payload.date;  // Set the date from the payload
        }
    }
});

export const { showEvent } = eventSlice.actions;

export default eventSlice.reducer;
