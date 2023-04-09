const API = {
  createAccount: `${process.env.REACT_APP_API_ENDPOINT}/auth`,
  logoutAccount: `${process.env.REACT_APP_API_ENDPOINT}/auth`,
  autoLoginAccount: `${process.env.REACT_APP_API_ENDPOINT}/auth/me`,
}

export default API
