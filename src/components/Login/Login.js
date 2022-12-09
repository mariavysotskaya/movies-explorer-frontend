import { Link, withRouter } from 'react-router-dom';
import { useEffect, useContext } from 'react';
import {useFormWithValidation} from '../../hooks/validation.hook';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import Form from '../Form/Form';
import logo from '../../images/header/header-logo.svg';

function Login(props) {

  const context = useContext(CurrentUserContext);
  const loginForm = useFormWithValidation();

  useEffect(() => {
    context.clearText();
  }, [])

  function handleSubmit(e) {
    e.preventDefault();
    props.onLogin({...loginForm.values});
  }

  return (
    <div className="auth-page">
      <div className="page__form-container">
        <a className="page__logo-container" href="/"><img className="logo" src={logo} alt="Логотип" /></a>
        <h2 className="page__form-name">Рады видеть!</h2>
        <Form 
         buttonText="Войти" 
         saveBtnStyle={'form__save-btn_type_page'}
         enableSubmit={!loginForm.isValid}
         onSubmit={handleSubmit}
        >
          <span className="page__form-fld-heading">E-mail</span>
          <input
            required
            pattern="^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z][a-zA-Z]+$"
            type="email"
            className="page__form-input"
            id="email"
            name="email"
            placeholder="Введите e-mail"
            value={loginForm.values["email"] || ''}
            onChange={loginForm.handleChange}
          />
          <span id="name-error" className="page__form-error">{loginForm.errors["email"]}</span>

          <span className="page__form-fld-heading">Пароль</span>
          <input
            required
            type="password"
            className="page__form-input"
            id="password"
            name="password"
            placeholder="Введите пароль"
            value={loginForm.values["password"] || ''}
            onChange={loginForm.handleChange}
          />
          <span id="email-error" className="page__form-error">{loginForm.errors["password"]}</span>

          <span id="submit-error" className="page__form-error page__form-error_type_page">{context.error}</span>
        </Form>
        <p className="page__text">Ещё не зарегистрированы? <Link to="/signup" className="page__text" style={{color: "#4285F4", textDecoration: "none"}}>Регистрация</Link></p>
      </div>
    </div>
  )
}

export default withRouter(Login)