import './Promo.css'

export default function Promo(props) {
  return (
    <section className="promo">
      <div className="promo__banner">
        <h1 className="promo__title">Учебный проект студента факультета Веб-разработки</h1>
        {props.children}
      </div>
    </section>
  )
}