import { Route, Switch, useHistory, useLocation } from 'react-router-dom';
import { useState, useEffect, useCallback, useMemo } from 'react';
import ProtectedRoute from '../../routes/protected.routes';
import AuthRoutes from '../../routes/auth.routes';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import * as auth from '../../utils/auth';
import * as beatApi from '../../utils/moviesApi';
import mainApi from '../../utils/mainApi';
import API_ERROR from '../../utils/constants';
import Header from '../Header/Header';
import Profile from '../Profile/Profile';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Register from '../Register/Register';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);
  const [errorMainApi, setErrorMainApi] = useState(null);
  const [errorBeatApi, setErrorBeatApi] = useState(null);

  const history = useHistory();
  const location = useLocation();

  const [value, setValue] = useState(null);
  const [sliderOn, setSliderOn] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const [beatMovies, setBeatMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);

  const clearText = useCallback(() => {
    setError(null);
    setMessage(null);
  }, []);

  useEffect(() => {
    const searchQuery = localStorage.getItem('searchQuery');
    const sliderOn = localStorage.getItem('sliderOn');
    if (searchQuery) {
      setValue(searchQuery);
      setBeatMovies(JSON.parse(localStorage.getItem('beatMovies')));
    }
    if (sliderOn === 'true') {
      handleSlider();
    }
  }, []);

  useEffect(() => {
    checkToken();
    if (isLoggedIn) {
      getSavedMovies();
    }
  }, [isLoggedIn]);

  function getSavedMovies() {
    setErrorMainApi(null);
    mainApi.getSavedMovies()
      .then((data) => {
        setSavedMovies(data);
      })
      .catch((err) => setErrorMainApi(API_ERROR))
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setError(null);
      setMessage(null);
    }, 2000);
    return () => clearTimeout(timer);
  }, [error, message])

  const filteredArray = useMemo(() => {
    if (!beatMovies || beatMovies.length === 0) {
      return null;
    }
    return beatMovies.filter(item => {
      if (sliderOn) {
        return ( 
          item.nameRU.toLowerCase().includes(value.toLowerCase()) || item.nameEN.toLowerCase().includes(value.toLowerCase()) 
          ) && item.duration <= 40;
      }
      return item.nameRU.toLowerCase().includes(value.toLowerCase()) || item.nameEN.toLowerCase().includes(value.toLowerCase());
    })
  }, [value, sliderOn, beatMovies]);

  function handleSlider() {
    setSliderOn(() => !sliderOn);
    localStorage.setItem('sliderOn', !sliderOn);
  }

  function handleRegister({password, email, name}) {
    auth.register(password, email, name)
    .then(res => {
      if (res._id) {
        handleLogin({password, email});
      } else {
        setError(res.message);
      }
    })
    .catch((err) => {
      console.log(err);
    })
  };

  function handleLogin({password, email}) {
    auth.login(password, email)
    .then(res => {
      if (res.token) {
        localStorage.setItem('token', res.token);
        setIsLoggedIn(true);
        mainApi.setHeaders(res.token);
        history.push('/movies');
        setError(null);
      } else {
        setError(res.message);
      };
    })
    .catch((err) => {
      console.log(err);
    })
  };

  function handleSignOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('searchQuery');
    localStorage.removeItem('sliderOn');
    localStorage.removeItem('beatMovies');
    setIsLoggedIn(false);
    setValue(null);
    setSliderOn(false);
    setBeatMovies([]);
    history.push('/');
  }

  function handleEditUser(user) {
    setError(null);
    setMessage(null);
    mainApi.editUser(user)
    .then(data => {
      if (data.user) {
        setCurrentUser(data.user);
        setMessage('Пользователь изменен');
      } else {
        setMessage(null);
        setError(data.message);
      }
    })
    .catch(() => setError('Не удалось сохранить изменения'))
  }

  function checkToken() {
    const token = localStorage.getItem('token');
    if (token) {
      auth.checkToken(token)
      .then(res => {
        setIsLoggedIn(true);
        setCurrentUser(res.user);
        history.replace(location.pathname);
      })
      .catch(err => {
        return false;
      })
    };
    return false;
  };

  function handleSaveMovie(movie) {
    mainApi.addMovie(movie)
      .then(res => {
        setSavedMovies([res.movie, ...savedMovies]);
      })
      .catch(err => console.log('Не удалось выполнить действие', err));
  };

  function handleDeleteMovie(movie) {
    mainApi.deleteMovie(movie._id)
      .then(() => {
        setSavedMovies(movies => movies.filter(item => item._id !== movie._id));
      })
      .catch(err => console.log('Удаление не удалось', err));
  };

  function handleSearch(value, sliderOn) {
    setValue(value);
    setSliderOn(sliderOn);
    localStorage.setItem('searchQuery', value);
    localStorage.setItem('sliderOn', sliderOn);
    if (beatMovies.length === 0) {
      setIsLoading(true);
      beatApi.getBeatMovies()
      .then(res => {
        setBeatMovies(res);
        localStorage.setItem('beatMovies', JSON.stringify(res));
      })
      .catch(err => setErrorBeatApi(API_ERROR))
      .finally(() => setIsLoading(false));
    }
  };

  return (
    <CurrentUserContext.Provider value={{currentUser, isLoggedIn, error, clearText, message}}>
        <div className="App">
          <Switch>
            <Route path="(/profile|/movies|/saved-movies|/)">
              <>
                <Header loggedIn={isLoggedIn}/>
                <main className="content">
                  <Route exact path="/">
                    <Main />
                  </Route>
                  <ProtectedRoute loggedIn={isLoggedIn}>
                    <Route exact path="/profile">
                      <Profile onClick={handleSignOut} onEditUser={handleEditUser}/>
                    </Route>
                    <Route exact path="/movies">
                      <Movies
                        filteredArray={filteredArray}
                        savedMovies={savedMovies}
                        onSliderClick={handleSlider}
                        value={value}
                        sliderOn={sliderOn}
                        onSearch={handleSearch}
                        onSave={handleSaveMovie}
                        onDelete={handleDeleteMovie}
                        isLoading={isLoading}
                        error={errorBeatApi}
                      />
                    </Route>
                    <Route exact path="/saved-movies">
                      <SavedMovies
                        savedMovies={savedMovies}
                        onSave={handleSaveMovie}
                        onDelete={handleDeleteMovie}
                        error={errorMainApi}
                      />
                    </Route>
                  </ProtectedRoute>
                </main>
                <Route
                  render={({ location }) =>
                    location.pathname !== "/profile" && <Footer />
                  }
                />
                </>
            </Route>
            <Route path="(/signup|/signin)">
              <AuthRoutes loggedIn={isLoggedIn}>
                <Route exact path="/signup">
                  <Register onRegister={handleRegister}/>
                </Route>
                <Route exact path="/signin">
                  <Login onLogin={handleLogin}/>
                </Route>
              </AuthRoutes>
            </Route>
            <Route path="*">
              <NotFoundPage />
            </Route>
          </Switch>
        </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
