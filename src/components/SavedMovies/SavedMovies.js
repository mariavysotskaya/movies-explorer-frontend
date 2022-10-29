import SearchForm from '../SearchForm/SearchForm'
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import MoviesCardList from '../../components/MoviesCardList/MoviesCardList'
import Loader from '../Loader/Loader'

export default function SavedMovies(props) {

  function deleteMovie(card) {
    console.log(card);
  }

  return (
    <section className="movies-list">
      <div className="movies-list__search-wrapper">
        <SearchForm />
        <div className="movies-list__checkbox-wrapper">
          <FilterCheckbox name='Короткометражки'/>
        </div>
      </div>
      <div className="movies-list__container">
        <MoviesCardList
          isImageDefault={true}
          btnText={null}
          moviesArray={props.moviesArray}
          onClick={deleteMovie}
        />
        <div className="movies-list__loader-wrapper">
          <Loader />
        </div>
      </div>
    </section>
  )
}