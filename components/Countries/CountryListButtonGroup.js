import styles from "../../styles/Countries/CountryListButtonGroup.module.css";
import CountryListButton from "./CountryListButton";

const CountryListButtonGroup = ({ changeActiveTab, activeTab }) => {
  return (
    <div className={styles.btnGroup}>
      <CountryListButton
        id={"cases"}
        activeTab={activeTab}
        changeActiveTab={changeActiveTab}
      />
      <CountryListButton
        id={"deaths"}
        activeTab={activeTab}
        changeActiveTab={changeActiveTab}
      />
      <CountryListButton
        id={"casesPercentage"}
        activeTab={activeTab}
        changeActiveTab={changeActiveTab}
      />
      <CountryListButton
        id={"deathRate"}
        activeTab={activeTab}
        changeActiveTab={changeActiveTab}
      />
    </div>
  );
};

export default CountryListButtonGroup;
