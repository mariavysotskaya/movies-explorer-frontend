import './Techs.css'

export default function Techs(props) {
  return (
    <section className="section techs" ref={props.techsRef}>
      <h3 className="section__heading">Технологии</h3>
      <div className="section__content">
        <h2 className="section__name techs__name">7 технологий</h2>
        <p className="section__description techs__description">
            На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
        </p>
        <ul className="section__list techs__list">
            <li className="techs__item"><p className="section__label techs__item-name">HTML</p></li>
            <li className="techs__item"><p className="section__label techs__item-name">CSS</p></li>
            <li className="techs__item"><p className="section__label techs__item-name">JS</p></li>
            <li className="techs__item"><p className="section__label techs__item-name">React</p></li>
            <li className="techs__item"><p className="section__label techs__item-name">Git</p></li>
            <li className="techs__item"><p className="section__label techs__item-name">Express.js</p></li>
            <li className="techs__item"><p className="section__label techs__item-name">mongoDB</p></li>
        </ul>
      </div>
    </section>
  )
}