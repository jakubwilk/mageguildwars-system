import { createSlice } from '@reduxjs/toolkit'
import { IAccount } from 'user/models'

interface IUserReducer {
  account: IAccount | null
}

const initialState: IUserReducer = {
  account: null,
}

export const userReducer = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.account = { ...state.account, ...action.payload }
    },
    clearUser: (state) => {
      state.account = null
    },
  },
})

export const { setUser, clearUser } = userReducer.actions

export default userReducer.reducer
