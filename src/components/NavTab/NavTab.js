import './NavTab.css'

export default function NavTab(props) {

  const handleScroll = (ref) => {
    window.scrollTo({
      top: ref.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <ul className="navtab__list">
      {props.initialData.map(item => {
        return (
          <li key={item.title} className="navtab__item">
            <button className="button navtab__btn" onClick={() => handleScroll(item.ref.current)}>
              <p className="navtab__name">{item.title}</p>
            </button>
          </li>
        )
      })}
    </ul>
  )
}