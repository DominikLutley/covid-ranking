import Link from "next/link";
import styles from "../../styles/Shared/Nav.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faGlobeAmericas,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";

const Nav = ({ hidden, toggleHidden }) => {
  return (
    <nav className={hidden ? styles.navHidden : styles.nav}>
      <Link href="/">
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
    </nav>
  );
};

export default Nav;
