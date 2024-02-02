import Footer from "./Footer";
import Header from "./Header";
import styles from "./ProjectPage.module.scss";

function ProjectPage({ title, desc, role, year, images }) {
  return (
    <>
      <Header />
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
      <Footer />
    </>
  );
}

export default ProjectPage;

{
  /* <>
<div className={styles.container}>
  <div className={styles["left-container"]}>
    <h1>{title}</h1>
    <p>{desc}</p>
    <p>Role: {role}</p>
    <p>Year: {year}</p>
    <p>Live here</p>
  </div>
  <div className={styles["right-container"]}>
    {images.map((img) => (
      <img src={img} key={Math.random()} />
    ))}
  </div>
</div>
<div className={styles["middle-container"]}>
  <div className={styles.middle}>
    {images.map((img) => (
      <img src={img} key={Math.random()} />
    ))}
  </div>
</div>
<div className={styles}></div>
</> */
}

{
  /* <div className={styles.container}>
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
</div> */
}
