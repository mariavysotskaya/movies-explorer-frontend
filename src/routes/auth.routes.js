import { Route } from 'react-router-dom'
import Register from '../components/Register/Register'
import Login from '../components/Login/Login'

export const useAuthRoutes = () => {
  return (
    <>
      <Route exact path="/signup">
        <Register />
      </Route>
      <Route exact path="/signin">
        <Login />
      </Route>
    </>
  )
}