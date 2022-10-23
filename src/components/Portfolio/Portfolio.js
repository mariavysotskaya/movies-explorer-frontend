import arrowImage from '../../images/portfolio/arrow.svg'
import './Portfolio.css'

export default function Portfolio() {
  return (
    <div className="portfolio">
      <h3 className="portfolio__heading">Портфолио</h3>
      <ul className="portfolio__list">
        <li><p className="portfolio__item">Статичный сайт</p><a className="portfolio__link" href="https://mariavysotskaya.github.io/mesto/" target="_blank" rel="noreferrer"><img src={arrowImage} alt="Открыть в новой вкладке" /></a></li>
        <li><p className="portfolio__item">Адаптивный сайт</p><a className="portfolio__link" href="https://mariavysotskaya.github.io/russian-travel/" target="_blank" rel="noreferrer"><img src={arrowImage} alt="Открыть в новой вкладке" /></a></li>
        <li><p className="portfolio__item">Одностраничное приложение</p><a className="portfolio__link" href="http://mymesto.nomoredomains.xyz/" target="_blank" rel="noreferrer"><img src={arrowImage} alt="Открыть в новой вкладке" /></a></li>
      </ul>
    </div>
  )
}