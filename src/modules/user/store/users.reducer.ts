import { createSlice } from '@reduxjs/toolkit'
import { IUsers, IUsersListRequest } from 'user/models'

interface IUsersReducer {
  users: IUsers[]
  filters: IUsersListRequest
}

const initialState: IUsersReducer = {
  users: [],
  filters: {
    page: 1,
    size: 10,
  },
}

export const usersReducer = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setFilters: (state, action) => {
      console.log('action', action)
      state.filters = {
        ...state.filters,
        ...action.payload,
      }
    },
    clearFilters: (state) => {
      state.filters = {
        page: 0,
        size: 20,
      }
    },
  },
})

export const { setFilters, clearFilters } = usersReducer.actions

export default usersReducer.reducer
