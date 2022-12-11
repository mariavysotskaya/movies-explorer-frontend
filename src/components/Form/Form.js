import './Form.css'

export default function Form(props) {
  return (
    <form className="form" name="form" onSubmit={props.onSubmit} noValidate>
      {props.children}
      <button
        type="submit"
        disabled={props.enableSubmit}
        className={`button form__save-btn ${props.saveBtnStyle}`}
        onSubmit={props.onSubmit}
      >
        {props.buttonText}
      </button>
    </form>
  )
}