import styles from "../../styles/Home/HomeDashboard.module.css";
import HomeDashboardItem from "./HomeDashboardItem";

const HomeDashboard = ({ latestData }) => {
  return (
    <div className={styles.container}>
      <HomeDashboardItem
        title="Total Worldwide Confirmed Cases"
        display={latestData.confirmed.toLocaleString()}
      />
      <HomeDashboardItem
        title="Total Worldwide Deaths"
        display={latestData.deaths.toLocaleString()}
      />
      <HomeDashboardItem
        title="New Confirmed Cases Today"
        display={latestData.new_confirmed.toLocaleString()}
      />
      <HomeDashboardItem
        title="New Confirmed Deaths Today"
        display={latestData.new_deaths.toLocaleString()}
      />
    </div>
  );
};

export default HomeDashboard;
