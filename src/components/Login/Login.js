import { Link, withRouter } from 'react-router-dom';
import Form from '../Form/Form';
import logo from '../../images/header/header-logo.svg'

function Login() {
  return (
    <div className="auth-page">
      <div className="page__form-container">
        <a className="page__logo-container" href="/"><img className="logo" src={logo} alt="Логотип" /></a>
        <h2 className="page__form-name">Рады видеть!</h2>
        <Form buttonText="Войти" saveBtnStyle={'form__save-btn_type_page'}>
          <span className="page__form-fld-heading">E-mail</span>
          <input
            required
            pattern="^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z][a-zA-Z]+$"
            type="email"
            className="page__form-input"
            id="email"
            name="email"
            placeholder="Введите e-mail"
          />
          <span id="name-error" className="page__form-error" />
          <span className="page__form-fld-heading">Пароль</span>
          <input
            required
            type="password"
            className="page__form-input"
            id="password"
            name="password"
            placeholder="Пароль"
          />
          <span id="email-error" className="page__form-error" />
        </Form>
        <p className="page__text">Ещё не зарегистрированы? <Link to="/signup" className="page__text" style={{color: "#4285F4", textDecoration: "none"}}>Регистрация</Link></p>
      </div>
    </div>
  )
}

export default withRouter(Login);