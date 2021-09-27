import { useState } from "react";
import Chart from "../components/Countries/Chart";
import CountryListButtonGroup from "../components/Countries/CountryListButtonGroup";
import styles from "../styles/Countries/Countries.module.css";

export default function Countries({ data }) {
  const [activeTab, changeActiveTab] = useState("cases");

  let sortedData = data
    .map((item) => {
      let displayValue;
      switch (activeTab) {
        case "cases":
          displayValue = item.totalCases;
          break;
        case "deaths":
          displayValue = item.totalDeaths;
          break;
        case "casesPercentage":
          displayValue = (item.totalCases / item.population) * 100;
          break;
        case "deathRate":
          displayValue = item.deathRate;
          break;
      }
      if (displayValue === null) {
        displayValue = 0;
      }
      if (activeTab === "casesPercentage" || activeTab === "deathRate") {
        displayValue = displayValue.toFixed(2);
      }
      return Object.assign({ displayValue }, item);
    })
    .sort((item1, item2) => item2.displayValue - item1.displayValue);

  return (
    <div className={styles.container}>
      <p className={styles.tip}>Tip: Click on one of the bars in the chart.</p>
      <CountryListButtonGroup
        changeActiveTab={changeActiveTab}
        activeTab={activeTab}
      />
      <Chart data={sortedData} activeTab={activeTab} />
    </div>
  );
}

export async function getServerSideProps() {
  const response = await fetch("https://corona-api.com/countries").then((res) =>
    res.json()
  );

  let data = response.data
    .filter(
      (item) =>
        item.name &&
        item.latest_data &&
        item.latest_data.confirmed !== "undefined" &&
        item.latest_data.deaths !== "undefined" &&
        item.latest_data.calculated.death_rate !== "undefined" &&
        item.population
    )
    .map((item) => {
      return {
        country: item.name,
        code: item.code,
        population: item.population,
        totalCases: item.latest_data.confirmed,
        totalDeaths: item.latest_data.deaths,
        deathRate: item.latest_data.calculated.death_rate,
      };
    });

  return {
    props: { data }, // will be passed to the page component as props
  };
}
