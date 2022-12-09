import { useContext, useEffect } from 'react';
import {useFormWithValidation} from '../../hooks/validation.hook';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import Form from '../Form/Form';
import './Profile.css';

export default function Profile(props) {

  const context = useContext(CurrentUserContext);
  const profileForm = useFormWithValidation();
  const successClass = context.message ? "page__form-success" : null;

  useEffect(() => {
    profileForm.setValues({
      ...profileForm.values,
      ["name"]: context.currentUser.name,
      ["email"]: context.currentUser.email
    });
    context.clearText();
  }, []);

  const isEqualValues = (
    profileForm.values["name"] === context.currentUser.name &&
    profileForm.values["email"] === context.currentUser.email
    ) ? true : false;

  function handleSubmit(e) {
    e.preventDefault();
    props.onEditUser({...profileForm.values});
  }

  return (
    <div className="page__form-container">
      <h2 className="page__form-name page__form-name_type_profile">Привет, {context.currentUser.name}!</h2>
      <Form
       buttonText="Редактировать" 
       saveBtnStyle={'form__save-btn_type_transparent'} 
       enableSubmit={!profileForm.isValid || isEqualValues}
       onSubmit={handleSubmit}
      >
        <span id="name-error" className="page__form-error page__form-error_type_profile">{profileForm.errors["name"]}</span>
        <div className="profile__fld-container">
          <span className="profile__fld-heading">Имя</span>
          <input
            required
            type="text"
            pattern="^[A-Za-zА-Яа-я\sё]+(?:[ -]{1}[A-Za-zА-Яа-я\sё]*)?$"
            minLength="2"
            maxLength="30"
            className="profile__input-fld"
            id="name"
            name="name"
            placeholder="Введите имя"
            onChange={profileForm.handleChange}
            value={profileForm.values["name"] || ''}
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
            onChange={profileForm.handleChange}
            value={profileForm.values["email"] || ''}
          />
        </div>
        <span id="name-error" className="page__form-error page__form-error_type_profile">{profileForm.errors["email"]}</span>

        <span id="submit-error" className={`page__form-error page__form-error_type_profile-submit ${successClass}`}>{context.error || context.message}</span>
      </Form>
      <button className="button profile__logout-btn" onClick={props.onClick}>Выйти из аккаунта</button>
    </div>
  )
}