import './AboutProject.css'

export default function AboutProject(props) {
  return (
    <section className="section section_type_dark about-project" ref={props.aboutRef}>
      <h3 className="section__heading">О проекте</h3>
      <div className="section__content section__content_type_dark">
        <ul className="about-project__list">
          <li className="about-project__item">
            <h2 className="about-project__title">Дипломный проект включал 5 этапов</h2>
            <p className="section__description about-project__description">
              Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
            </p>
          </li>
          <li className="about-project__item">
            <h2 className="about-project__title">На выполнение диплома ушло 5 недель</h2>
            <p className="section__description about-project__description">
              У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
            </p>
          </li>
        </ul>
        <ul className="section__list about-project__table">
          <li>
            <ul className="section__list about-project__tr">
              <li className="about-project__td about-project__td_color_accent about-project__td_width_min">
                <p className="section__label about-project__label">1 неделя</p>
                </li>
              <li className="about-project__td about-project__td_color_light about-project__td_width_max">
                <p className="section__label about-project__label">4 недели</p>
                </li>
            </ul>
          </li>
          <li>
            <ul className="section__list about-project__tr">
              <li className="about-project__td about-project__td_color_dark about-project__td_width_min">
                <p className="section__label section__label_weight about-project__label">Back-end</p>
                </li>
              <li className="about-project__td about-project__td_color_dark about-project__td_width_max">
                <p className="section__label section__label_weight about-project__label">Front-end</p>
                </li>
            </ul>
          </li>
        </ul>
      </div>
    </section>
  )
}