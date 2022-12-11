import { createContext } from 'react'

export const CurrentUserContext = createContext({
  currentUser: {},
  isLoggedIn: false,
  message: '',
  error: '',
  clearText: () => {}
})