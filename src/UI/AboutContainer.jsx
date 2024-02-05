import styles from "./AboutContainer.module.scss";
import Footer from "./Footer";
import Header from "./Header";

function AboutContainer() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <h1 className={styles.intro}>US based developer</h1>
      </div>
      <Footer />
    </>
  );
}

export default AboutContainer;
