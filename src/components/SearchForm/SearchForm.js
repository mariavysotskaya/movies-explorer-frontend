import './SearchForm.css'

export default function SearchForm() {
  return (
    <form className="search-form">
      <input
        required
        type="text"
        className="input search-form__input"
        id="movie"
        name="movie"
        placeholder="Фильм" />
      <button type="submit" className="button search-form__button">Найти</button>
    </form>
  )
}