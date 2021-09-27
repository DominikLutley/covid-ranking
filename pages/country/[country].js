import styles from "../../styles/Country/Country.module.css";
import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";
import CountryStatsCard from "../../components/Shared/StatsCard";
import Timeline from "../../components/Shared/Timeline";
import Stats from "../../components/Shared/Stats";

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

  const population = data.population.toLocaleString();
  const deathRate = `${data.latest_data.calculated.death_rate.toLocaleString()} %`;
  const totalCases = data.latest_data.confirmed.toLocaleString();
  const totalDeaths = data.latest_data.deaths.toLocaleString();
  const casesMillion =
    data.latest_data.calculated.cases_per_million_population.toLocaleString();
  const deathsMillion = Math.round(
    (1000000 * data.latest_data.deaths) / data.population
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
      <h1 className={styles.title}>{data.name}</h1>
      <h2 className={styles.h2}>Statistics</h2>
      <Stats data={statsData} />
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
