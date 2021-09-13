import ChartBar from "./ChartBar";
import styles from "../styles/Chart.module.css";

const Chart = ({ data }) => {
  const topCases = data[0].displayValue;
  return (
    <div className={styles.container}>
      {data.map((item) => (
        <ChartBar item={item} topCases={topCases} />
      ))}
    </div>
  );
};

export default Chart;
