import HomeDashboard from "../components/Home/HomeDashboard";
import Timeline from "../components/Shared/Timeline";
import styles from "../styles/Home/Home.module.css";

export default function Home({ data }) {
  const timelineData = data
    .slice()
    .reverse()
    .map((item) => {
      return {
        date: item.date,
        value: item.new_confirmed,
      };
    });

  return (
    <div className={styles.container}>
      <HomeDashboard latestData={data[0]} />
      <div className={styles.timelineContainer}>
        <h2 className={styles.title}>Worldwide Timeline</h2>
        <p className={styles.subtitle}>New Cases</p>
        <Timeline data={timelineData} windowLength={7} />
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const response = await fetch("https://corona-api.com/timeline").then((res) =>
    res.json()
  );

  return {
    props: { data: response.data }, // will be passed to the page component as props
  };
}
