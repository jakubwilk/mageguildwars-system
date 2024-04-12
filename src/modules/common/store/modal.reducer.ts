import { createSlice } from '@reduxjs/toolkit'

interface IModalReducer {
  isLoginOpen: boolean
  isRegisterOpen: boolean
}

const initialState: IModalReducer = {
  isLoginOpen: false,
  isRegisterOpen: false,
}

export const modalReducer = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openLoginModal: (state) => {
      state.isLoginOpen = true
    },
    openRegisterModal: (state) => {
      state.isRegisterOpen = true
    },
    closeLoginModal: (state) => {
      state.isLoginOpen = false
    },
    closeRegisterModal: (state) => {
      state.isRegisterOpen = false
    },
  },
})

export const { openLoginModal, closeLoginModal, openRegisterModal, closeRegisterModal } =
  modalReducer.actions

export default modalReducer.reducer
