import { useState } from "react"
import './MoviesCard.css'

export default function MoviesCard(props) {
  const [isClickedCard, setIsClickedCard] = useState(false);

  const defImageClass = props.isImageDefault ? 'movies-card__button_type_image' : null;

  const changeImageClass = (isClickedCard && props.btnText) ? 'movies-card__button_type_clicked' : null;

  const handleClick = () => {
    props.onClick(props.card);
    setIsClickedCard(!isClickedCard);
  }

  return (
    <article className="movies-card">
      <div className="movies-card__info-container">
        <h2 className="movies-card__name">{props.card.nameRU}</h2>
        <p className="movies-card__duration">{`${props.card.duration} минут`}</p>
      </div>
      <a className="movies-card__image-wrapper" href={props.card.trailerLink} target="_blank" rel="noreferrer">
        <img className="movies-card__image" src={props.url} alt="Постер фильма"/>
      </a>
      <button type="button" className={`button movies-card__button ${defImageClass} ${changeImageClass}`} onClick={handleClick}>
        {!isClickedCard && props.btnText}
      </button>
    </article>
  )
}