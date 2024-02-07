import styles from "./ProjectPage.module.scss";
import cdwIcon from "../../public/img/cdwIcon.jpg";
import cha from "../../public/img/cha.jpg";
import auroraIcon from "../../public/img/auroraIcon.jpg";
import bi from "../../public/img/bi.jpg";
import { NavLink } from "react-router-dom";

function ProjectPage({ title, desc, role, year, images, link }) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles["left-container"]}>
          <h1>{title}</h1>
          <p>{desc}</p>
          <p>Role: {role}</p>
          <p>Year: {year}</p>
          {link && (
            <a href={link} target="_blank" rel="noreferrer">
              See live &rarr;
            </a>
          )}
        </div>
        <div className={styles["middle-container"]}>
          {images.map((img) => (
            <img src={img} key={Math.random()} />
          ))}
        </div>
        <div className={styles["right-container"]}>
          <NavLink to="/climate-death-wheel">
            <img src={cdwIcon} />
          </NavLink>
          <NavLink to="/tabi-tomodachi">
            <img src={cha} />
          </NavLink>
          <NavLink to="/auroramalet">
            <img src={auroraIcon} />
          </NavLink>
          <NavLink to="/the-wild-oasis">
            <img src={bi} />
          </NavLink>
          <NavLink to="/climate-death-wheel">
            <img src={cdwIcon} />
          </NavLink>
          <NavLink to="/climate-death-wheel">
            <img src={cdwIcon} />
          </NavLink>
        </div>
      </div>
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
