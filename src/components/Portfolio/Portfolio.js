import arrowImage from '../../images/portfolio/arrow.svg'
import './Portfolio.css'

export default function Portfolio() {
  return (
    <section className="portfolio">
      <h3 className="portfolio__heading">Портфолио</h3>
      <ul className="portfolio__list">
        <li>
          <a className="portfolio__link link" href="https://mariavysotskaya.github.io/russian-travel/" target="_blank" rel="noreferrer" alt="Статичный сайт">
            <p className="portfolio__item">Статичный сайт</p>
            <img className="portfolio__image" src={arrowImage} alt="Открыть в новой вкладке" />
          </a>
        </li>
        <li>
          <a className="portfolio__link link" href="https://mariavysotskaya.github.io/mesto/" target="_blank" rel="noreferrer" alt="Адаптивный сайт">
            <p className="portfolio__item">Адаптивный сайт</p>
            <img className="portfolio__image" src={arrowImage} alt="Открыть в новой вкладке" />
          </a>
        </li>
        <li>
          <a className="portfolio__link link" href="http://mymesto.nomoredomains.xyz/" target="_blank" rel="noreferrer" alt="Одностраничное приложение">
            <p className="portfolio__item">Одностраничное приложение</p>
            <img className="portfolio__image" src={arrowImage} alt="Открыть в новой вкладке" />
          </a>
        </li>
      </ul>
    </section>
  )
}