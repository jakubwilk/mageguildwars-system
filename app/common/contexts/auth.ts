import { IAuthContext } from 'common/models'
import { create } from 'zustand'

const useAuthStore = create<IAuthContext>((set) => ({
  user: null,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setUser: (user: any) => set({ user }),
}))

export default useAuthStore
