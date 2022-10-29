import MoviesCard from "../MoviesCard/MoviesCard"
import './MoviesCardList.css'

export default function MoviesCardList(props) {

  function handleClick(card) {
    props.onClick(card);
  }

  return (
    <section className="movies-card-list">
      {props.moviesArray.map(item => (
        <MoviesCard
          card={item}
          url={`https://api.nomoreparties.co/${item.image.url}`}
          key={item.id}
          isImageDefault={props.isImageDefault}
          imgSrc={props.imgSrc}
          btnText={props.btnText}
          onClick={handleClick}
        />
      ))}
    </section>
  )
}