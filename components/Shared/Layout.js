import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";
import styles from "../../styles/Shared/Layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>CoViD Statistics</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
