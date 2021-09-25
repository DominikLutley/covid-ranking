import { useEffect, useState } from "react";
import styles from "../../styles/Shared/Footer.module.css";
import DateUpdated from "./DateUpdated";

const Footer = () => {
  const [date, setDate] = useState(Date());

  useEffect(() => {
    fetch("https://corona-api.com/timeline")
      .then((res) => res.json())
      .then((res) => {
        setDate(res.data[0].date);
      });
  }, []);

  // const date = response.data[0].date;

  return (
    <div className={styles.container}>
      <DateUpdated date={date} />
    </div>
  );
};

export default Footer;
