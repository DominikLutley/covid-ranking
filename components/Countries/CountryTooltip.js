import styles from "../../styles/Countries/CountryTooltip.module.css";

const CountryTooltip = ({ active, payload, label, activeTab }) => {
  let labelText = "";
  let endText = "";

  switch (activeTab) {
    case "cases":
      labelText = "Total Cases: ";
      break;
    case "deaths":
      labelText = "Total Deaths: ";
      break;
    case "casesPercentage":
      labelText = "Population Infected: ";
      endText = " %";
      break;
    case "deathRate":
      labelText = "Death Rate: ";
      endText = " %";
      break;
  }
  if (active) {
    return (
      <div className={styles.container}>
        <h4 className={styles.country}>{label}</h4>
        <p className={styles.value}>
          {`${labelText}${parseInt(
            parseInt(payload[0].value).toFixed(0)
          ).toLocaleString()}${endText}`}
        </p>
      </div>
    );
  } else {
    return null;
  }
};

export default CountryTooltip;
