import { createSlice } from '@reduxjs/toolkit'
import { IAccountsListRequest } from 'user/models'

interface IUsersReducer {
  accountsFilters: IAccountsListRequest
}

const initialState: IUsersReducer = {
  accountsFilters: {
    page: 1,
    size: 10,
  },
}

export const usersReducer = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setAccountsFilters: (state, action) => {
      console.log('action', action)
      state.accountsFilters = {
        ...state.accountsFilters,
        ...action.payload,
      }
    },
    clearAccountsFilters: (state) => {
      state.accountsFilters = {
        page: 1,
        size: 10,
      }
    },
  },
})

export const { setAccountsFilters, clearAccountsFilters } = usersReducer.actions

export default usersReducer.reducer
