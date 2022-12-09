import './MoviesCard.css';

export default function MoviesCard(props) {

  const imageUrl = props.isImageDefault ? props.card.image : `https://api.nomoreparties.co/${props.card.image.url}`;
  const isOwner = props.savedMovies.some(item => item.movieId === props.card.id);

  const defImageClass = (props.isImageDefault) ? 'movies-card__button_type_image' : null;
  const changeImageClass = (!props.isImageDefault && isOwner) ? 'movies-card__button_type_clicked' : null;

  const handleClick = () => {
    if (props.isImageDefault) {
      props.onDelete(props.card);
    } else {
      if (isOwner) {
        const movie = props.savedMovies.find(item => item.movieId === props.card.id);
        props.onDelete(movie);
      } else {
        props.onSave(props.card);
      }
    }
  }

  return (
    <article className="movies-card">
      <div className="movies-card__info-container">
        <h2 className="movies-card__name">{props.card.nameRU}</h2>
        <p className="movies-card__duration">{`${props.card.duration} мин`}</p>
      </div>
      <a className="movies-card__image-wrapper" href={props.card.trailerLink} target="_blank" rel="noreferrer">
        <img className="movies-card__image" src={imageUrl} alt="Постер фильма"/>
      </a>
      <button type="button" className={`button movies-card__button ${changeImageClass} ${defImageClass}`} onClick={handleClick}>
        {(!isOwner && props.btnText)}
      </button>
    </article>
  )
}