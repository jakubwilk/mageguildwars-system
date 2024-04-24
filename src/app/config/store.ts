import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

import { modalReducer } from '../../modules/common/store'

export const store = configureStore({
  reducer: {
    modal: modalReducer,
  },
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
