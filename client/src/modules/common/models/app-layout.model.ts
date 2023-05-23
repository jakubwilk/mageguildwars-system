export interface AppLayoutContextType {
  isHomePage: boolean
  isSidebarOpen: boolean
  isAuthModalOpen: boolean
  setIsHomePage: (v: boolean) => void
  setIsSidebarOpen: (v: boolean) => void
  setIsAuthModalOpen: (v: boolean) => void
}
