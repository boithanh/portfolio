import { available } from '@/data';
import { createSlice } from '@reduxjs/toolkit'


const initialState = available;

const availableSlice = createSlice({
    name: "available",
    initialState,
    reducers: {}
});

export const { } = availableSlice.actions

export default availableSlice.reducer