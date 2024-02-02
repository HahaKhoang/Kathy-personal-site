import styles from "./ProjectPage.module.scss";

function ProjectPage({ title, desc, role, year, images }) {
  return (
    <div className={styles.container}>
      <div className={styles["left-container"]}>
        <h1>{title}</h1>
        <p>{desc}</p>
        <p>Role: {role}</p>
        <p>Year: {year}</p>
        <p>Live here</p>
      </div>
      <div className={styles["middle-container"]}>
        {images.map((img) => (
          <img src={img} key={Math.random()} />
        ))}
      </div>
      <div className={styles["right-container"]}>
        {images.map((img) => (
          <img src={img} key={Math.random()} />
        ))}
      </div>
    </div>
  );
}

export default ProjectPage;
