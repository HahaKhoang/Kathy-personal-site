import styles from "./HomepageContainer.module.scss";
import cdwIcon from "../../public/img/cdwIcon.jpg";
import cha from "../../public/img/cha.jpg";
import auroraIcon from "../../public/img/auroraIcon.jpg";
import bi from "../../public/img/bi.jpg";
import { NavLink } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

function HomepageContainer() {
  const { ref: climateRef, inView: climateVisible } = useInView({
    threshold: 0.6,
  });
  const { ref: tabiRef, inView: tabiVisible } = useInView({
    threshold: 0.6,
  });
  const { ref: auroraRef, inView: auroraVisible } = useInView({
    threshold: 0.6,
  });
  const { ref: oasisRef, inView: oasisVisible } = useInView({
    threshold: 0.6,
  });

  const projects = [
    {
      src: cdwIcon,
      ref: climateRef,
      link: "/climate-death-wheel",
      title: "Climate Death Wheel",
      desc: "Interactive web component",
      desc2: "Climate Climate Climate Climate ",
      desc3: "Climate Climate Climate Climate Climate Climate Climate ",
    },
    {
      src: cha,
      ref: tabiRef,
      link: "/tabi-tomodachi",
      title: "Tabi Tomodachi",
      desc: "Travel Agency Website ",
      desc2: "Travel Travel Travel Travel Travel Travel ",
      desc3: "Travel Travel Travel Travel Travel Travel Travel Travel Travel ",
    },
    {
      src: auroraIcon,
      ref: auroraRef,
      link: "/auroramalet",
      title: "Auroramålet",
      desc: "Suing the Swedish State",
      desc2: "Aurora Aurora Aurora Aurora Aurora ",
      desc3: "Aurora Aurora Aurora Aurora Aurora Aurora Aurora Aurora ",
    },
    {
      src: bi,
      ref: oasisRef,
      link: "/the-wild-oasis",
      title: "The Wild Oasis",
      desc: "Hotel booking site",
      desc2: "Oasis Oasis Oasis Oasis ",
      desc3: "Oasis Oasis Oasis Oasis Oasis Oasis Oasis Oasis Oasis Oasis ",
    },
  ];

  return (
    <div className={styles.container}>
      <motion.div
        className={styles["text-container"]}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className={styles["center-container"]}>
          <h1 className={styles.title}>
            {climateVisible && projects[0].title}
            {tabiVisible && projects[1].title}
            {auroraVisible && projects[2].title}
            {oasisVisible && projects[3].title}
          </h1>
          <p className={styles.desc}>
            {climateVisible && projects[0].desc}
            {tabiVisible && projects[1].desc}
            {auroraVisible && projects[2].desc}
            {oasisVisible && projects[3].desc}
          </p>
          <p className={styles.desc}>
            {climateVisible && projects[0].desc2}
            {tabiVisible && projects[1].desc2}
            {auroraVisible && projects[2].desc2}
            {oasisVisible && projects[3].desc2}
          </p>
          <p className={styles.desc}>
            {climateVisible && projects[0].desc3}
            {tabiVisible && projects[1].desc3}
            {auroraVisible && projects[2].desc3}
            {oasisVisible && projects[3].desc3}
          </p>
        </div>
      </motion.div>
      <motion.div
        className={styles["project-container"]}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        {projects.map((project) => (
          <NavLink to={project.link} key={project.title}>
            <img
              src={project.src}
              className={styles.project}
              ref={project.ref}
            />
          </NavLink>
        ))}
      </motion.div>
    </div>
  );
}

export default HomepageContainer;
