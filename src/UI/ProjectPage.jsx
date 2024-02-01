import styles from "./ProjectPage.module.scss";

function ProjectPage({ title, img }) {
  return (
    <div className={styles.container}>
      <div className={styles["text-container"]}>
        <h1>{title}</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos dolores
          tenetur eos rerum minus sequi ullam at? Laudantium doloremque repellat
          porro nulla obcaecati aut optio ipsa! Culpa soluta dolor rem.
        </p>
        <p>Role</p>
        <p>Link here</p>
      </div>
      <div className={styles["project-container"]}>
        <img src={img} className={styles.picture} />
        <img src={img} className={styles.picture} />
        <img src={img} className={styles.picture} />
        <img src={img} className={styles.picture} />
      </div>
      <div className={styles.projects}>
        <img src={img} className={styles.project} />
        <img src={img} className={styles.project} />
        <img src={img} className={styles.project} />
        <img src={img} className={styles.project} />
        <img src={img} className={styles.project} />
        <img src={img} className={styles.project} />
      </div>
    </div>
  );
}

export default ProjectPage;
