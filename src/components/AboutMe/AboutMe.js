import './AboutMe.css'
import aboutMeImage from '../../images/aboutme/aboutme-image.jpg'

export default function AboutMe(props) {
  return (
    <section className="section section_type_dark aboutme" ref={props.studentRef}>
      <h3 className="section__heading">Студент</h3>
      <div className="section__content section__content_type_dark">
        <div className="aboutme__info">
          <img className="aboutme__image" src={aboutMeImage} alt="Фото студента"></img>
          <div>
            <h2 className="section__name aboutme__name">Виталий</h2>
            <p className="aboutme__profession">Фронтенд-разработчик, 30 лет</p>
            <p className="section__description aboutme__description">
                Я родился и живу в Саратове, закончил факультет экономики СГУ. 
                У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. 
                Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». 
                После того, как прошёл курс по веб-разработке, начал заниматься 
                фриланс-заказами и ушёл с постоянной работы.
            </p>
          </div>
          <p className="aboutme__label">Github</p>
          <div></div>
        </div>
      </div>
    </section>
  )
}