import { createSlice } from '@reduxjs/toolkit'
import { carouselData } from '@/data';

const initialState = carouselData;

const carouselSlice = createSlice({
    name: "carrousel",
    initialState,
    reducers: {}
});

export const { } = carouselSlice.actions

export default carouselSlice.reducer