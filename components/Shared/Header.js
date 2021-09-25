import { useState } from "react";
import styles from "../../styles/Shared/Header.module.css";
import Nav from "./Nav";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [hidden, setHidden] = useState(true);
  const toggleHidden = () => setHidden(!hidden);
  return (
    <div className={styles.container}>
      <div className={styles.titleBar}>
        <FontAwesomeIcon
          icon={faBars}
          className={styles.menuIcon}
          onClick={toggleHidden}
        />
        <Link href="/">
          <h1 className={styles.title}>COVID STATISTICS</h1>
        </Link>
      </div>
      <Nav hidden={hidden} toggleHidden={toggleHidden} />
    </div>
  );
};

export default Header;
