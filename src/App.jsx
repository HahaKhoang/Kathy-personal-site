import styles from "./App.module.scss";
import TextContainer from "./TextContainer";

function App() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles["text-container"]}>
          <TextContainer />
        </div>
        <div className={styles["project-container"]}>
          <p>Projects</p>
        </div>
      </div>
    </>
  );
}

export default App;
