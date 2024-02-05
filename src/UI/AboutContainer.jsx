import styles from "./AboutContainer.module.scss";
import Footer from "./Footer";
import Header from "./Header";
import kathy1 from "../../public/img/kathy1.jpg";

function AboutContainer() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles["page-1"]}>
          <h1 className={styles.intro}>US based developer</h1>
          <p>( for now )</p>
        </div>
        <div className={styles["page-2"]}>
          <div className={styles["picture-container"]}>
            <img src={kathy1} />
          </div>
        </div>
        <div className={styles["page-3"]}>
          <div className={styles["info-container"]}>
            <p>
              Experienced global traveler with an expanded worldview, frequently
              challenged to live outside of her comfort zone.
            </p>
            <p>
              Driven to perform in both individual and collaborative settings in
              order to become a full-stack developer for the purpose of creating
              a more accessible online experience.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AboutContainer;
