import styles from "../styles/HeaderButton.module.scss";

const HeaderButton = ({ id, activeTab, changeActiveTab }) => {
  let name = "";
  switch (id) {
    case "cases":
      name = "Daily Cases";
      break;
    case "cases-per":
      name = "Cases / 100k";
      break;
    case "deaths":
      name = "Daily Deaths";
      break;
    case "deaths-per":
      name = "Deaths / 100k";
      break;
  }

  let style = activeTab === id ? styles.btnActive : styles.btn;

  return (
    <button className={style} onClick={() => changeActiveTab(id)}>
      {name}
    </button>
  );
};

export default HeaderButton;
