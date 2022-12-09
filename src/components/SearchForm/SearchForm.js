import { useEffect, useState } from "react";
import { useFormWithValidation } from '../../hooks/validation.hook';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

export default function SearchForm(props) {

  const searchForm = useFormWithValidation();
  const [message, setMessage] = useState(null);

  useEffect(() => {
    searchForm.setValues({
      ...searchForm.values,
      ["search"]: props.value
    });
    setMessage(null);
  }, [props.value])

  useEffect(() => {
    const timer = setTimeout(() => {
      setMessage(null);
    }, 2000);
    return () => clearTimeout(timer);
  }, [message])

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!searchForm.values["search"]) {
      setMessage('Нужно ввести ключевое слово');
      return;
    };
    props.onSubmit(searchForm.values["search"]);
  }

  return (
    <div className="movies-list__search-wrapper">
      <form className="search-form" name="search-form" onSubmit={handleSubmit} noValidate>
          <input
            required
            autoFocus
            type="text"
            className="input search-form__input"
            id="search"
            name="search"
            placeholder='Фильм'
            onChange={searchForm.handleChange}
            value={searchForm.values["search"] || ''}
          />
        <button type="submit" className="button search-form__button" onSubmit={handleSubmit}>Найти</button>
      </form>
      <span className="search-form__error">{message}</span>
      <div className="movies-list__checkbox-wrapper">
        <FilterCheckbox onClick={props.onClick} sliderOn={props.sliderOn}/>
      </div>
    </div>
  )
}