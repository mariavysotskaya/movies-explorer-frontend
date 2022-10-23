import './Footer.css'

export default function Footer() {
  return (
    <div className="footer">
      <p className="footer__label">Учебный проект Яндекс.Практикум х BeatFilm</p>
      <div className="footer__content">
          <p className="footer__copyright">&copy; 2022</p>
          <ul className="footer__info">
            <li>Яндекс.Практикум</li>
            <li>GitHub</li>
          </ul>
      </div>
    </div>
  )
}