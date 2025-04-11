import { configureStore } from '@reduxjs/toolkit'
import projectSlice from './slices/projectSlice'
import availableSlice from './slices/availableSlice'
import carouselSlice from './slices/carouselSlice'
// ...

export const store = configureStore({
    reducer: {
        projectSlice, availableSlice, carouselSlice
    }
})

// Infer the `RootState`,  `AppDispatch`, and `AppStore` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store