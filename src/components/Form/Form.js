import './Form.css'

export default function Form(props) {
  return (
    <form className="form" name="form" onSubmit={props.onSubmit}>
      {props.children}
      <button type="submit" className={`button form__save-btn ${props.saveBtnStyle}`}>{props.buttonText}</button>
    </form>
  )
}