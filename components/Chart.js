import ChartBar from "./ChartBar";
import styles from "../styles/Chart.module.css";

const Chart = ({ data }) => {
  const topCases = data[0].displayValue;
  return (
    <div className={styles.container}>
      {data.map((item, key) => (
        <ChartBar item={item} topCases={topCases} key={key} />
      ))}
    </div>
  );
};

export default Chart;
