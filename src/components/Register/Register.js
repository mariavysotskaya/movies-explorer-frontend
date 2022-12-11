import { Link, withRouter } from 'react-router-dom';
import { useEffect, useContext } from 'react';
import {useFormWithValidation} from '../../hooks/validation.hook';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import Form from '../Form/Form';
import logo from '../../images/header/header-logo.svg';

function Register(props) {

  const context = useContext(CurrentUserContext);
  const registerForm = useFormWithValidation();

  useEffect(() => {
    context.clearText();
  }, [])

  function handleSubmit(e) {
    e.preventDefault()
    props.onRegister({...registerForm.values})
  }

  return (
    <div className="auth-page">
      <div className="page__form-container">
        <a className="page__logo-container" href="/"><img className="logo" src={logo} alt="Логотип" /></a>
        <h2 className="page__form-name page__form-name_type_auth">Добро пожаловать!</h2>
        <Form
         buttonText="Зарегистрироваться"
         saveBtnStyle={'form__save-btn_type_page'}
         enableSubmit={!registerForm.isValid}
         onSubmit={handleSubmit}
        >
          <span className="page__form-fld-heading">Имя</span>
          <input
            required
            pattern="^[A-Za-zА-Яа-я\sё]+(?:[ -]{1}[A-Za-zА-Яа-я\sё]*)?$"
            type="text"
            minLength="2"
            maxLength="30"
            className="page__form-input"
            id="name"
            name="name"
            placeholder="Введите имя"
            onChange={registerForm.handleChange}
            value={registerForm.values["name"] || ''}
          />
          <span id="name-error" className="page__form-error">{registerForm.errors["name"]}</span>

          <span className="page__form-fld-heading">E-mail</span>
          <input
            required
            pattern="^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z][a-zA-Z]+$"
            type="email"
            className="page__form-input"
            id="email"
            name="email"
            placeholder="Введите e-mail"
            onChange={registerForm.handleChange}
            value={registerForm.values["email"] || ''}
          />
          <span id="name-error" className="page__form-error">{registerForm.errors["email"]}</span>

          <span className="page__form-fld-heading">Пароль</span>
          <input
            required
            type="password"
            className="page__form-input"
            id="password"
            name="password"
            placeholder="Пароль"
            onChange={registerForm.handleChange}
            value={registerForm.values["password"] || ''}
          />
          <span id="email-error" className="page__form-error">{registerForm.errors["password"]}</span>

          <span id="submit-error" className="page__form-error page__form-error_type_page">{context.error}</span>
        </Form>
        <p className="page__text">Уже зарегистрированы? <Link to="/signin" className="page__text" style={{color: "#4285F4", textDecoration: "none"}}>Войти</Link></p>
      </div>
    </div>
  )
}

export default withRouter(Register);