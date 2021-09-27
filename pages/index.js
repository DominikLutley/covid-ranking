import HomeDashboard from "../components/Home/HomeDashboard";
import Stats from "../components/Shared/Stats";
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

  const rawPopulation = 7985900000;
  const population = rawPopulation.toLocaleString();
  const deathRate =
    (data[0].deaths / data[0].confirmed).toLocaleString() + " %";
  const totalCases = data[0].confirmed.toLocaleString();
  const totalDeaths = data[0].deaths.toLocaleString();
  const casesMillion = (
    (1000000 * data[0].confirmed) /
    rawPopulation
  ).toLocaleString();
  const deathsMillion = (
    (1000000 * data[0].deaths) /
    rawPopulation
  ).toLocaleString();

  const statsData = [
    { title: "Population", value: population },
    { title: "Death Rate", value: deathRate },
    { title: "Total Cases", value: totalCases },
    { title: "Total Deaths", value: totalDeaths },
    { title: "Cases per Million", value: casesMillion },
    { title: "Deaths per Million", value: deathsMillion },
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>The World</h1>
      <h2 className={styles.h2}>Statistics</h2>
      <Stats data={statsData} />
      <h2 className={styles.h2}>Timeline</h2>
      <Timeline data={timelineData} windowLength={7} timelineHeight={270} />
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
