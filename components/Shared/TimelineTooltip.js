import styles from "../../styles/Shared/TimelineTooltip.module.css";

const TimelineTooltip = ({ active, payload, label }) => {
  const date = new Date(label);
  const displayDate = date.toLocaleDateString("en-GB", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
  if (active) {
    return (
      <div className={styles.container}>
        <h4 className={styles.date}>{displayDate}</h4>
        <p className={styles.value}>
          {`New Cases: ${parseInt(
            payload[0].value.toFixed(0)
          ).toLocaleString()}`}
        </p>
      </div>
    );
  } else {
    return null;
  }
};

export default TimelineTooltip;
