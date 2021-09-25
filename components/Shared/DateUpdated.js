import styles from "../../styles/Shared/DateUpdated.module.css";

const DateUpdated = ({ date }) => {
  const displayDate = new Date(date).toLocaleDateString("gb", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
  return <p className={styles.date}>{`Date Updated: ${displayDate}`}</p>;
};

export default DateUpdated;
