import css from "./Meetupitem.module.css";

function Meetupitem(props) {
  return (
    <li className={css.item}>
      <div className={css.image}>
        <img src={props.image} alt={props.title} />
      </div>
      <div className={css.content}>
        <h3>{props.title}</h3>
        <address>{props.address}</address>
        <p>{props.description}</p>
      </div>
      <div className={css.actions}>
        <button>Add to favorites</button>
      </div>
    </li>
  );
}

export default Meetupitem;
