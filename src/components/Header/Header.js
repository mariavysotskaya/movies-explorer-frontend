import { useState } from 'react'
import { Link, withRouter } from 'react-router-dom'
import logo from '../../images/header/header-logo.svg'
import Navigation from '../Navigation/Navigation'
import './Header.css'

function Header(props) {
  const initNavBar = [
    {
      path: '/',
      title: 'Главная'
    },
    {
      path: '/movies',
      title: 'Фильмы'
    },
    {
      path: '/saved-movies',
      title: 'Сохранённые фильмы'
    }
  ]

  const [isActiveBurger, setActiveBurger] = useState(false);
  const [isActiveNavBar, setIsActiveNavBar] = useState(false);
  const [isReversedHeaderBody, setReversedHeaderBody] = useState(false);

  const overlayActiveClass = isActiveBurger ? "overlay_active" : null;
  const headerReversedBodyClass = isReversedHeaderBody ? "header__navbar-wrapper_reverse" : null;
  const navbarActiveClass = isActiveNavBar ? "header__navbar-container_active" : null;
  const burgerActiveClass = isActiveBurger ? "header__burger_active" : null;
  

  const toggleClass = () => {
    setActiveBurger(!isActiveBurger);
    setIsActiveNavBar(!isActiveNavBar);
    setReversedHeaderBody(!isReversedHeaderBody);
  };

  const closeAll = () => {
    setActiveBurger(false);
    setIsActiveNavBar(false);
    setReversedHeaderBody(false);
  };

  return (
    <header className="header">
      <div className={`overlay ${overlayActiveClass}`}></div>
      <div className="header__body">
        <a className="header__link" href="/"><img className="logo header__logo" src={logo} alt="Логотип" /></a>
        {!props.loggedIn && 
          <div className="header__auth">
            <Link className="header__link header__link_type_text" to="/signup">Регистрация</Link>
            <Link className="header__link header__link_type_button" to="/signin">Войти</Link>
          </div>
        }
        {props.loggedIn &&
          <div className={`header__navbar-wrapper ${headerReversedBodyClass}`} onClick={closeAll}>
            <div className={`header__navbar-container ${navbarActiveClass}`}>
              <Navigation initArray={initNavBar}/>
              <Link to="/profile" className="link header__navbar-link">Аккаунт</Link>
            </div>
          </div>
        }
        {props.loggedIn && 
          <div className={`button header__burger ${burgerActiveClass}`} onClick={toggleClass}>
            <span></span>
          </div>
        }
      </div>
    </header>
  )
}

export default withRouter(Header);