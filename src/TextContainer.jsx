import styles from "./TextContainer.module.scss";

function TextContainer() {
  return (
    <div className={styles.container}>
      <div className={styles["top-container"]}>
        <p>Kathy</p>
      </div>
      <div className={styles["center-container"]}>
        <h1 className={styles.title}>Creative. Frontend Developer.</h1>
        <p>The portfolio page of Kathy Hoang</p>
      </div>
      <div className={styles["contact-container"]}>
        <p>linkedin</p>
        <p>linkedin</p>
        <p>linkedin</p>
        <p>linkedin</p>
      </div>
    </div>
  );
}

export default TextContainer;
