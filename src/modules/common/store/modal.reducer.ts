import { createSlice } from '@reduxjs/toolkit'

interface IModalReducer {
  isLoginOpen: boolean
}

const initialState: IModalReducer = {
  isLoginOpen: false,
}

export const modalReducer = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openLoginModal: (state) => {
      state.isLoginOpen = true
    },
    closeLoginModal: (state) => {
      state.isLoginOpen = false
    },
  },
})

export const { openLoginModal, closeLoginModal } = modalReducer.actions

export default modalReducer.reducer
