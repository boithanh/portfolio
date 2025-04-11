import { createSlice } from '@reduxjs/toolkit'
import { items } from '@/data';


const initialState = items


const projectSlice = createSlice({
    name: "project",
    initialState,
    reducers: {
        changeTab: (state, actions) => {
            state.currentTab = actions.payload
        }
    }
});

export const { changeTab } = projectSlice.actions

export default projectSlice.reducer