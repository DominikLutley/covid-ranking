import styles from "../styles/Header.module.css";
import HeaderButton from "./HeaderButton";

const Header = ({ changeActiveTab, activeTab }) => {
  return (
    <div>
      <h1 className={styles.title}>Covid Country Ranking</h1>
      <div className={styles.btnGroup}>
        <HeaderButton
          id={"cases"}
          activeTab={activeTab}
          changeActiveTab={changeActiveTab}
        />
        <HeaderButton
          id={"cases-per"}
          activeTab={activeTab}
          changeActiveTab={changeActiveTab}
        />
        <HeaderButton
          id={"deaths"}
          activeTab={activeTab}
          changeActiveTab={changeActiveTab}
        />
        <HeaderButton
          id={"deaths-per"}
          activeTab={activeTab}
          changeActiveTab={changeActiveTab}
        />
      </div>
    </div>
  );
};

export default Header;
