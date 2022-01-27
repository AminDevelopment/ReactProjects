import css from "./Cards.module.css";

function Card(props) {
  return <div className={css.card}>{props.children}</div>;
}

export default Card;
