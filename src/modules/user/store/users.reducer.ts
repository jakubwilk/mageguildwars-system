import { createSlice } from '@reduxjs/toolkit'
import { IAccountsListFilters } from 'user/models'
import { DEFAULT_USERS_FILTERS } from 'user/utils'

interface IUsersReducer {
  accountsFilters: IAccountsListFilters
}

const initialState: IUsersReducer = {
  accountsFilters: DEFAULT_USERS_FILTERS,
}

export const usersReducer = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setAccountsFilters: (state, action) => {
      state.accountsFilters = {
        ...state.accountsFilters,
        ...action.payload,
      }
    },
    clearAccountsFilters: (state) => {
      state.accountsFilters = DEFAULT_USERS_FILTERS
    },
  },
})

export const { setAccountsFilters, clearAccountsFilters } = usersReducer.actions

export default usersReducer.reducer
