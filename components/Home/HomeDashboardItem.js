import styles from "../../styles/Home/HomeDashboardItem.module.css";

const HomeDashboardItem = ({ title, display }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.display}>{display}</p>
    </div>
  );
};

export default HomeDashboardItem;
