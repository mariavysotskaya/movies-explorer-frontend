import SearchForm from '../SearchForm/SearchForm'
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox'
import MoviesCardList from '../../components/MoviesCardList/MoviesCardList'
import Loader from '../Loader/Loader'
import './Movies.css'

export default function Movies(props) {

  function saveMovie(card) {
    console.log(card);
  }

  return (
    <div className="movies-list">
      <div className="movies-list__search-wrapper">
        <SearchForm />
        <div className="movies-list__checkbox-wrapper">
          <FilterCheckbox name='Короткометражки'/>
        </div>
      </div>
      <div className="movies-list__container">
        <MoviesCardList
          isImageDefault={false}
          btnText={'Сохранить'}
          moviesArray={props.moviesArray}
          onClick={saveMovie}
        />
        <div className="movies-list__loader-wrapper">
          <Loader />
        </div>
      </div>
    </div>
  )
}