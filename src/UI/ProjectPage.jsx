import styles from "./ProjectPage.module.scss";
import cdwIcon from "../../public/img/cdwIcon.jpg";
import tabiIcon from "../../public/img/tabiIcon.jpg";
import auroraIcon from "../../public/img/auroraIcon.jpg";
import bi from "../../public/img/bi.jpg";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

function ProjectPage({ title, desc, role, year, images, link }) {
  return (
    <>
      <div className={styles.container}>
        <motion.div
          className={styles["left-container"]}
          initial={{ opacity: 0, x: "-100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "-100%" }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1>{title}</h1>
          <p>{desc}</p>
          <p>Role: {role}</p>
          <p>Year: {year}</p>
          {link && (
            <a href={link} target="_blank" rel="noreferrer">
              See live &rarr;
            </a>
          )}
        </motion.div>
        <motion.div
          className={styles["middle-container"]}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.3, ease: "easeOut" }}
        >
          {images.map((img) => (
            <img src={img} key={Math.random()} />
          ))}
        </motion.div>
        <motion.div
          className={styles["right-container"]}
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <NavLink to="/climate-death-wheel">
            <img src={cdwIcon} />
          </NavLink>
          <NavLink to="/tabi-tomodachi">
            <img src={tabiIcon} />
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
        </motion.div>
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
