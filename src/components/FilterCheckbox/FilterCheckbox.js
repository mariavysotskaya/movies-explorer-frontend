import './FilterCheckbox.css'

export default function FilterCheckbox(props) {
  return (
    <div className="checkbox">
      <label className="checkbox__switch">
        <input type="checkbox" />
        <span className="slider round"></span>
      </label>
      <p className="checkbox__name">{props.name}</p>
    </div>
  )
}