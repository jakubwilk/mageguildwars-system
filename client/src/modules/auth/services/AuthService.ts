class AuthService {
  localStorage: Storage

  constructor() {
    this.localStorage = localStorage
  }

  get getLocalStorage(): Storage {
    return this.localStorage
  }

  setLocalStorageItem(name: string, value: any): void {
    const storage = this.getLocalStorage
    storage.setItem(name, value)
  }

  getLocalStorageItem(name: string): any {
    const storage = this.getLocalStorage
    return storage.getItem(name)
  }

  removeLocalStorageItem(name: string): void {
    const storage = this.getLocalStorage
    storage.removeItem(name)
  }

  getCookieItem(name: string): string | undefined {
    return document.cookie
      .split(';')
      .find((row) => row.startsWith(`${name}=`))
      ?.split('=')[1]
  }
}

const authService = new AuthService()

export default authService
