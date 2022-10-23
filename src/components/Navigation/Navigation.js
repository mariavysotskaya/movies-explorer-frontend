import { Link } from "react-router-dom"
import './Navigation.css'

export default function Navigation(props) {
  return (
    <ul className="navigation__list">
      {props.initArray.map(item => {
        return (
          <li key={item.title}><Link to={item.path} className="link navigation__item">{item.title}</Link></li>
        )
      })}
    </ul>
  )
}