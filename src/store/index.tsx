import { configureStore } from '@reduxjs/toolkit'

import vendorsReducer from '@/pages/restaurants/store'

export const store = configureStore({
    reducer: {
        vendors: vendorsReducer,
    },
})
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
