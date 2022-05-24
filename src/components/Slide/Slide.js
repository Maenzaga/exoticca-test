import Card from "../Card/Card";
import styles from "./Slide.module.scss";

export default function Slide(props) {
  console.log(props.props.cards);
  return (
    <div>
      <h1>SlideContainer</h1>
      <div className={`${styles.cardContainer}`}>
        {props.props.cards.map((card) => {
          return <Card props={card} />;
        })}
      </div>
    </div>
  );
}
