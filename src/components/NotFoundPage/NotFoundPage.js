import { useHistory } from "react-router-dom"
import './NotFoundPage.css'

export default function NotFoundPage() {
  const history = useHistory();

  return (
    <div className="not-found-page">
      <div className="not-found-page__content">
        <div className="not-found-page__text-wrapper">
          <h2 className="not-found-page__heading">404</h2>
          <p className="not-found-page__text">Страница не найдена</p>
        </div>
        <button className="button not-found-page__back-btn" onClick={() => history.goBack()}>Назад</button>
      </div>
    </div>
  )
}