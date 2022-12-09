import { useState, useMemo } from 'react';
import MoviesCardList from '../../components/MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';

export default function SavedMovies(props) {

  const [searchText, setSearchText] = useState('');
  const [sliderOn, setSliderOn] = useState(false);

  const filteredArray = useMemo(() => {
    if (props.savedMovies.length === 0) {
      return null;
    }
    return props.savedMovies.filter(item => {
      if (sliderOn) {
        return ( 
          item.nameRU.toLowerCase().includes(searchText.toLowerCase()) || item.nameEN.toLowerCase().includes(searchText.toLowerCase()) 
          ) && item.duration <= 40;
      }
      return item.nameRU.toLowerCase().includes(searchText.toLowerCase()) || item.nameEN.toLowerCase().includes(searchText.toLowerCase());
    })
  }, [searchText, sliderOn, props.savedMovies]);

  function handleSearch(searchText) {
    setSearchText(searchText);
    setSliderOn(sliderOn);
  };

  function handleSlider() {
    setSliderOn(!sliderOn);
  };

  return (
    <section className="movies-list">
      <SearchForm onSubmit={handleSearch} value={searchText} onClick={handleSlider} sliderOn={sliderOn}/>
      {
        (
          (props.error && <p className="movies-list__default-title">{props.error}</p>) ||
          ((props.savedMovies.length === 0) && <p className="movies-list__default-title">Нет сохраненных фильмов</p>)
        ) ||
        <MoviesCardList
          isImageDefault={true}
          btnText={null}
          moviesArray={filteredArray}
          savedMovies={props.savedMovies}
          onSave={props.onSave}
          onDelete={props.onDelete}
        />
      }
    </section>
  )
}