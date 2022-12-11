import { useEffect, useState } from "react"
import MoviesCard from "../MoviesCard/MoviesCard"
import Loader from "../Loader/Loader"
import './MoviesCardList.css'

export default function MoviesCardList(props) {
  
  const startPageSize = parseInt(getComputedStyle(document.getElementById('root')).getPropertyValue('--movies-start-page-size'));
  const pageSize = parseInt(getComputedStyle(document.getElementById('root')).getPropertyValue('--movies-page-size'));
  const [amountPage, setAmountPage] = useState(0);
  const [array, setArray] = useState([]);

  useEffect(() => {
    if (props.isImageDefault) {
      setArray(props.moviesArray);
    } else setArray(props.moviesArray.slice(amountPage, startPageSize));
  }, [props.moviesArray])


  const handleMore = () => {    
    setArray(array.concat(props.moviesArray.slice(startPageSize + pageSize*amountPage, startPageSize + pageSize*(amountPage+1))));
    setAmountPage(amountPage + 1);
  }

  if (array.length === 0) {
    return (
      <p className="movies-list__default-title">Ничего не найдено</p>
    )
  }

  const movies = array.map(item => (
    <MoviesCard
      card={item}
      savedMovies={props.savedMovies}
      key={item.nameRU}
      isImageDefault={props.isImageDefault}
      imgSrc={props.imgSrc}
      btnText={props.btnText}
      onSave={props.onSave}
      onDelete={props.onDelete}
    />
  ))

  return (
    <section className="movies-card-list">
      <div className="movies-card-list__grid">
        {movies}
      </div>
      <div className="movies-list__loader-wrapper">
        {!props.isImageDefault && (props.moviesArray.length > amountPage*pageSize + startPageSize) && <Loader onClick={handleMore}/>}
      </div>
    </section>
  )
}