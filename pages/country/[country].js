import styles from "../../styles/Country/Country.module.css";
import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";
import CountryStatsCard from "../../components/Country/CountryStatsCard";
import Timeline from "../../components/Shared/Timeline";

export default function Country({ data }) {
  const timelineData = data.timeline
    .slice()
    .reverse()
    .map((item) => {
      return {
        date: item.date,
        value: item.new_confirmed,
      };
    });
  // const router = useRouter();
  // const [data, setData] = useState({
  //   name: "",
  //   population: 0,
  //   latest_data: {
  //     confirmed: 0,
  //     deaths: 0,
  //     calculated: { death_rate: 0, cases_per_million_population: 0 },
  //   },
  //   timeline: [{ date: "", new_confirmed: 0 }],
  // });
  // const [timelineData, setTimelineData] = useState();
  // const country = router.query.country;

  // useEffect(async () => {
  //   const response = await fetch(
  //     `https://corona-api.com/countries/${country}`
  //   ).then((res) => res.json());
  //   if (response.data) {
  //     setData(response.data);
  //   }
  // }, []);

  // useEffect(() => {
  //   if (!data) {
  //     return;
  //   }
  //   setTimelineData(
  //     data.timeline
  //       .slice()
  //       .reverse()
  //       .map((item) => {
  //         return {
  //           date: item.date,
  //           value: item.new_confirmed,
  //         };
  //       })
  //   );
  // }, [data]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{data.name}</h1>
      <h2 className={styles.h2}>Statistics</h2>
      <div className={styles.statsContainer}>
        <CountryStatsCard
          title="Population"
          value={data.population.toLocaleString()}
        />
        <CountryStatsCard
          title="Death Rate"
          value={`${data.latest_data.calculated.death_rate.toLocaleString()} %`}
        />
        <CountryStatsCard
          title="Total Cases"
          value={data.latest_data.confirmed.toLocaleString()}
        />
        <CountryStatsCard
          title="Total Deaths"
          value={data.latest_data.deaths.toLocaleString()}
        />
        <CountryStatsCard
          title="Cases per Million"
          value={data.latest_data.calculated.cases_per_million_population.toLocaleString()}
        />
        <CountryStatsCard
          title="Deaths per Million"
          value={Math.round(
            (1000000 * data.latest_data.deaths) / data.population
          ).toLocaleString()}
        />
      </div>
      <h2 className={styles.h2}>Timeline</h2>
      <Timeline data={timelineData} windowLength={7} timelineHeight={270} />
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const countryCode = params.country;
  console.log(countryCode);
  const response = await fetch(
    `https://corona-api.com/countries/${countryCode}`
  ).then((res) => res.json());

  console.log(response);

  return {
    props: { data: response.data }, // will be passed to the page component as props
  };
}
