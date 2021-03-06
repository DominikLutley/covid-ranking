import styles from "../../styles/Shared/Stats.module.css";
import StatsCard from "./StatsCard";

const Stats = ({ data }) => {
  return (
    <div className={styles.container}>
      {data.map((item, key) => (
        <StatsCard key={key} title={item.title} value={item.value} />
      ))}
    </div>
  );
};

export default Stats;
