import { createSlice } from '@reduxjs/toolkit'

interface IModalReducer {
  isLoginOpen: boolean
  isRegisterOpen: boolean
  isUserSettingsOpen: boolean
}

const initialState: IModalReducer = {
  isLoginOpen: false,
  isRegisterOpen: false,
  isUserSettingsOpen: false,
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
    openUserSettingsModal: (state) => {
      state.isUserSettingsOpen = true
    },
    closeLoginModal: (state) => {
      state.isLoginOpen = false
    },
    closeRegisterModal: (state) => {
      state.isRegisterOpen = false
    },
    closeUserSettingsModal: (state) => {
      state.isUserSettingsOpen = false
    },
  },
})

export const {
  openLoginModal,
  closeLoginModal,
  openRegisterModal,
  closeRegisterModal,
  openUserSettingsModal,
  closeUserSettingsModal,
} = modalReducer.actions

export default modalReducer.reducer
