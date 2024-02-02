import styles from "./ProjectPage.module.scss";

function ProjectPage({ title, desc, role, year, images }) {
  return (
    <div className={styles.container}>
      <div className={styles["left-container"]}>
        <p>{title}</p>
        <p>{desc}</p>
        <p>Role: {role}</p>
        <p>Year: {year}</p>
        <p>Live here</p>
      </div>
      <div className={styles["middle-container"]}>
        {console.log(images)}
        {images.map((img) => (
          <img src={img} key={Math.random()} />
        ))}
      </div>
      <div className={styles["right-container"]}>
        <p>right</p>
      </div>
    </div>
  );
}

export default ProjectPage;

// <div className={styles["text-container"]}>
// <h1 className={styles.title}>{title}</h1>
// <p>
//   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos dolores
//   tenetur eos rerum minus sequi ullam at? Laudantium doloremque repellat
//   porro nulla obcaecati aut optio ipsa! Culpa soluta dolor rem.
// </p>
// <p>Role</p>
// <p>Link here</p>
// </div>
// <div className={styles["project-container"]}>
// <img src={img} className={styles.picture} />
// <img src={img} className={styles.picture} />
// <img src={img} className={styles.picture} />
// <img src={img} className={styles.picture} />
// </div>
// <div className={styles.projects}>
// <img src={img} className={styles.project} />
// <img src={img} className={styles.project} />
// <img src={img} className={styles.project} />
// <img src={img} className={styles.project} />
// <img src={img} className={styles.project} />
// <img src={img} className={styles.project} />
// </div>
