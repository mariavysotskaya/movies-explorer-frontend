import SearchForm from '../SearchForm/SearchForm'
import MoviesCardList from '../../components/MoviesCardList/MoviesCardList'
import Preloader from "../Preloader/Preloader"
import './Movies.css'

export default function Movies(props) {

  function handleSearch(value) {
    props.onSearch(value, props.sliderOn);    
  }

  function handleSlider() {
    props.onSliderClick();
  }

  return (
    <section className="movies-list">
      <SearchForm onSubmit={handleSearch} value={props.value} onClick={handleSlider} sliderOn={props.sliderOn}/>
      {
        (
          (props.isLoading && <Preloader />) ||
          ((!props.filteredArray) && <p className="movies-list__default-title">Нет фильмов. Воспользуйтесь поиском</p>) ||
          (props.error && <p className="movies-list__default-title">{props.error}</p>)
        ) ||
          <MoviesCardList
            isImageDefault={false}
            btnText={'Сохранить'}
            moviesArray={props.filteredArray}
            savedMovies={props.savedMovies}
            onSave={props.onSave}
            onDelete={props.onDelete}
          />
      }
    </section>
  )
}