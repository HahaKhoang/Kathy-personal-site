import styles from "./ProjectPage.module.scss";
import cdwMini from "../assets/images/cdwMini.webp";
import tabiMini from "../assets/images/tabiMini.webp";
import auroraMini from "../assets/images/auroraMini.webp";
import woMini from "../assets/images/woMini.webp";
import tilMini from "../assets/images/tilMini.webp";
import natoursMini from "../assets/images/natoursMini.webp";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { RiArrowRightFill } from "@remixicon/react";

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
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              className={styles.link}
            >
              See live
              <span>
                <RiArrowRightFill />
              </span>
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
          <NavLink to="/tabi-tomodachi" className={styles.icon}>
            <img src={tabiMini} alt={`Screenshots of ${title}'s website `} />
          </NavLink>
          <NavLink to="/climate-death-wheel" className={styles.icon}>
            <img src={cdwMini} />
          </NavLink>
          <NavLink to="/auroramalet" className={styles.icon}>
            <img src={auroraMini} />
          </NavLink>
          <NavLink to="/the-wild-oasis" className={styles.icon}>
            <img src={woMini} />
          </NavLink>
          <NavLink to="/today-i-learned" className={styles.icon}>
            <img src={tilMini} />
          </NavLink>
          <NavLink to="/natours" className={styles.icon}>
            <img src={natoursMini} />
          </NavLink>
        </motion.div>
      </div>
    </>
  );
}

export default ProjectPage;
