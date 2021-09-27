import { useState } from "react";
import styles from "../../styles/Shared/Header.module.css";
import Nav from "./Nav";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faGlobeAmericas,
  faHome,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";

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
        <div className={styles.navContainer}>
          <Link href="/" className={styles.parentLink}>
            <a className={styles.link} onClick={toggleHidden}>
              <FontAwesomeIcon icon={faHome} className={styles.icon} />
              Home
            </a>
          </Link>
          <Link href="/countries">
            <a className={styles.link} onClick={toggleHidden}>
              <FontAwesomeIcon icon={faGlobeAmericas} className={styles.icon} />
              Countries
            </a>
          </Link>
          <Link href="/about">
            <a className={styles.link} onClick={toggleHidden}>
              <FontAwesomeIcon icon={faInfoCircle} className={styles.icon} />
              About
            </a>
          </Link>
        </div>
        <Link href="/">
          <h1 className={styles.title}>COVID STATISTICS</h1>
        </Link>
      </div>
      <Nav hidden={hidden} toggleHidden={toggleHidden} />
    </div>
  );
};

export default Header;
