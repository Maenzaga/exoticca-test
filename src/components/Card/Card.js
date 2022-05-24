import styles from "./Card.module.scss";

export default function Card(props) {
  console.log("CAAAARRRDDD", props.props);
  return (
    <div className={`${styles.cardContainer}`}>
      <div className={`${styles.top}`}>
        <div className={`${styles.image}`}>
          <img src={props.props.images[0]["desktop"]} alt="" />
        </div>
        <div className={`${styles.percentage}`}>10%</div>
        <div className={`${styles.destinationDays}`}>
          <p>{props.props.destination}</p>
          <p>{props.props.days}</p>
        </div>
      </div>
      <div className={`${styles.bottom}`}>
        <div>
          <p>{props.props.title}</p>
        </div>
        <div></div>
      </div>
    </div>
  );
}
