import { Route, Redirect } from 'react-router-dom';

const AuthRoutes = (props) => {
  return (
    <Route>
      {() =>
        !props.loggedIn ? props.children : <Redirect to="/" />
      }
    </Route>
  )
}

export default AuthRoutes;