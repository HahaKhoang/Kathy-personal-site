import styles from "./ProjectPage.module.scss";
import cdwMini from "../../public/img/cdwMini.jpg";
import tabiMini from "../../public/img/tabiMini.jpg";
import auroraMini from "../../public/img/auroraMini.jpg";
import woMini from "../../public/img/woMini.jpg";
import tilMini from "../../public/img/tilMini.jpg";
import natoursMini from "../../public/img/natoursMini.jpg";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { RiArrowRightFill } from "@remixicon/react";
import Header from "../ui/Header";
import Footer from "../ui/Footer";

function ProjectPage({ title, desc, role, year, images, link }) {
  return (
    <>
      <div className={styles.container}>
        <Header />
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
              See live{" "}
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
          <NavLink to="/tabi-tomodachi">
            <img src={tabiMini} />
          </NavLink>
          <NavLink to="/climate-death-wheel">
            <img src={cdwMini} />
          </NavLink>
          <NavLink to="/auroramalet">
            <img src={auroraMini} />
          </NavLink>
          <NavLink to="/the-wild-oasis">
            <img src={woMini} />
          </NavLink>
          <NavLink to="/today-i-learned">
            <img src={tilMini} />
          </NavLink>
          <NavLink to="/natours">
            <img src={natoursMini} />
          </NavLink>
        </motion.div>
        <Footer />
      </div>
    </>
  );
}

export default ProjectPage;
