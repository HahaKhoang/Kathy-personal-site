import styles from "./HomepageContainer.module.scss";
import cdwIcon from "../../public/img/cdwIcon.jpg";
import tabiIcon from "../../public/img/tabiIcon.jpg";
import auroraIcon from "../../public/img/auroraIcon.jpg";
import woIcon from "../../public/img/woIcon.jpg";
import tilIcon from "../../public/img/tilIcon.jpg";
import natoursIcon from "../../public/img/natoursIcon.jpg";
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
  const { ref: tilRef, inView: tilVisible } = useInView({
    threshold: 0.6,
  });
  const { ref: natoursRef, inView: natoursVisible } = useInView({
    threshold: 0.6,
  });

  const projects = [
    {
      src: tabiIcon,
      ref: tabiRef,
      link: "/tabi-tomodachi",
      title: "Tabi Tomodachi",
      desc: "Travel Agency Website ",
      desc2: "Travel Travel Travel Travel Travel Travel ",
      desc3: "Travel Travel Travel Travel Travel Travel Travel Travel Travel ",
    },
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
      src: auroraIcon,
      ref: auroraRef,
      link: "/auroramalet",
      title: "Auroramålet",
      desc: "Suing the Swedish State",
      desc2: "Aurora Aurora Aurora Aurora Aurora ",
      desc3: "Aurora Aurora Aurora Aurora Aurora Aurora Aurora Aurora ",
    },
    {
      src: woIcon,
      ref: oasisRef,
      link: "/the-wild-oasis",
      title: "The Wild Oasis",
      desc: "Hotel booking site",
      desc2: "Oasis Oasis Oasis Oasis ",
      desc3: "Oasis Oasis Oasis Oasis Oasis Oasis Oasis Oasis Oasis Oasis ",
    },
    {
      src: tilIcon,
      ref: tilRef,
      link: "/today-i-learned",
      title: "Today I learned",
      desc: "Tour booking site",
      desc2: "TIL TIL TIL TIL TIL TIL TIL",
      desc3:
        "TIL TIL TIL TIL TIL TIL TIL TIL TIL TIL TIL TIL TIL TIL TIL TIL TIL",
    },
    {
      src: natoursIcon,
      ref: natoursRef,
      link: "/natours",
      title: "Natours",
      desc: "Tour booking site",
      desc2: "Natours Natours Natours Natours",
      desc3:
        "Natours Natours Natours Natours Natours Natours Natours Natours Natours",
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
            {tabiVisible && projects[0].title}
            {climateVisible && projects[1].title}
            {auroraVisible && projects[2].title}
            {oasisVisible && projects[3].title}
            {tilVisible && projects[4].title}
            {natoursVisible && projects[5].title}
          </h1>
          <p className={styles.desc}>
            {tabiVisible && projects[0].desc}
            {climateVisible && projects[1].desc}
            {auroraVisible && projects[2].desc}
            {oasisVisible && projects[3].desc}
            {tilVisible && projects[4].desc}
            {natoursVisible && projects[5].desc}
          </p>
          <p className={styles.desc}>
            {tabiVisible && projects[0].desc2}
            {climateVisible && projects[1].desc2}
            {auroraVisible && projects[2].desc2}
            {oasisVisible && projects[3].desc2}
            {tilVisible && projects[4].desc2}
            {natoursVisible && projects[5].desc2}
          </p>
          <p className={styles.desc}>
            {tabiVisible && projects[0].desc3}
            {climateVisible && projects[1].desc3}
            {auroraVisible && projects[2].desc3}
            {oasisVisible && projects[3].desc3}
            {tilVisible && projects[4].desc3}
            {natoursVisible && projects[5].desc3}
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
