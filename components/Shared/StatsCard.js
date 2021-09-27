import styles from "../../styles/Shared/StatsCard.module.css";

const StatsCard = ({ title, value }) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>{title}</div>
      <div className={styles.value}>{value}</div>
    </div>
  );
};

export default StatsCard;
