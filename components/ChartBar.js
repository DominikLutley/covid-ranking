import styles from "../styles/ChartBar.module.css";

const ChartBar = ({ item, topCases }) => {
  const barWidth = 75 * (item.displayValue / topCases) + "%";
  return (
    <div className={styles.container}>
      <div className={styles.countryBox}>
        <h3 className={styles.countryLabel}>{item.country}</h3>
      </div>
      <div className={styles.barBox}>
        <div className={styles.bar} style={{ width: barWidth }} />
        <p className={styles.casesLabel}>
          {item.displayValue.toLocaleString()}
        </p>
      </div>
    </div>
  );
};

export default ChartBar;
