import Form from '../Form/Form'
import './Profile.css'

export default function Profile() {
  return (
    <div className="page__form-container">
      <h2 className="page__form-name page__form-name_type_profile">Привет, Виталий!</h2>
      <Form buttonText="Редактировать" saveBtnStyle={'form__save-btn_type_transparent'}>
        <div className="profile__fld-container">
          <span className="profile__fld-heading">Имя</span>
          <input
            required
            type="text"
            minLength="2"
            maxLength="30"
            className="profile__input-fld"
            id="name"
            name="name"
            placeholder="Введите имя"
          />
        </div>
        <div className="profile__fld-container">
          <span className="profile__fld-heading">E-mail</span>
          <input
            required
            pattern="^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z][a-zA-Z]+$"
            type="email"
            className="profile__input-fld"
            id="email"
            name="email"
            placeholder="Введите e-mail"
          />
        </div>
        <span id="name-error" className="page__form-error" />
      </Form>
      <button className="button profile__logout-btn">Выйти из аккаунта</button>
    </div>
  )
}