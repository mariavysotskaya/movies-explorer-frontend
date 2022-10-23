import { Redirect, Route, Switch } from 'react-router-dom'
import Profile from '../components/Profile/Profile'
import Movies from '../components/Movies/Movies'
import SavedMovies from '../components/SavedMovies/SavedMovies'
import Main from '../components/Main/Main'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import initArray from '../utils/initials'

export const useRoutes = () => {
  return (
    <>
      <Header loggedIn={true}/>
      <div className="page__container">
        <Switch>
          <Route exact path="/profile">
            <Profile />
          </Route>
          <Route exact path="/movies">
            <Movies moviesArray={initArray} />
          </Route>
          <Route exact path="/saved-movies">
            <SavedMovies moviesArray={initArray} />
          </Route>
          <Route exact path="/">
            <Main />
          </Route>
          <Redirect to="/" />
        </Switch>
        <Route
          render={({ location }) =>
            location.pathname !== "/profile" && <Footer />
          }
        />
      </div>
    </>
  )
}