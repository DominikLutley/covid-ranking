import styles from "../../styles/Countries/CountryListButton.module.scss";

const CountryListButton = ({ id, activeTab, changeActiveTab }) => {
  let name = "";
  switch (id) {
    case "cases":
      name = "Total Cases";
      break;
    case "deaths":
      name = "Total Deaths";
      break;
    case "casesPercentage":
      name = "Population Infected";
      break;
    case "deathRate":
      name = "Death Rate";
      break;
  }

  let style = activeTab === id ? styles.btnActive : styles.btn;

  return (
    <button className={style} onClick={() => changeActiveTab(id)}>
      {name}
    </button>
  );
};

export default CountryListButton;
