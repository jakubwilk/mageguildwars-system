import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { modalReducer } from 'common/store'
import { userReducer } from 'user/store'

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    user: userReducer,
  },
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
