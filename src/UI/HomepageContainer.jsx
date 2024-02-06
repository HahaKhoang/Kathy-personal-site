import styles from "./HomepageContainer.module.scss";
import cdwIcon from "../../public/img/cdwIcon.jpg";
import cha from "../../public/img/cha.jpg";
import auroraIcon from "../../public/img/auroraIcon.jpg";
import bi from "../../public/img/bi.jpg";
import jk from "../../public/img/jk.jpg";
import jungwon from "../../public/img/jungwon.jpg";

import { NavLink } from "react-router-dom";
import { useInView } from "react-intersection-observer";

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
    },
    {
      src: cha,
      ref: tabiRef,
      link: "/tabi-tomodachi",
      title: "Tabi Tomodachi",
    },
    {
      src: auroraIcon,
      ref: auroraRef,
      link: "/auroramalet",
      title: "Auroramålet",
    },
    {
      src: bi,
      ref: oasisRef,
      link: "/the-wild-oasis",
      title: "The Wild Oasis",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles["text-container"]}>
        <div className={styles["center-container"]}>
          <h1 className={styles.title}>
            {climateVisible && projects[0].title}
            {tabiVisible && projects[1].title}
            {auroraVisible && projects[2].title}
            {oasisVisible && projects[3].title}
          </h1>

          <p>The portfolio page of Kathy Hoang</p>
        </div>
      </div>
      <div className={styles["project-container"]}>
        {projects.map((project) => (
          <NavLink to={project.link} key={project.title}>
            <img
              src={project.src}
              className={styles.project}
              ref={project.ref}
            />
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default HomepageContainer;
