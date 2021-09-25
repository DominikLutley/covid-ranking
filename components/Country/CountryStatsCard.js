import styles from "../../styles/Country/CountryStatsCard.module.css";

const CountryStatsCard = ({ title, value }) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>{title}</div>
      <div className={styles.value}>{value}</div>
    </div>
  );
};

export default CountryStatsCard;
