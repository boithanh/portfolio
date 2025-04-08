import { configureStore } from '@reduxjs/toolkit'
import projectSlice from './slices/projectSlice'
import availableSlice from './slices/availableSlice'
// ...

export const store = configureStore({
    reducer: {
        projectSlice, availableSlice
    }
})

// Infer the `RootState`,  `AppDispatch`, and `AppStore` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store