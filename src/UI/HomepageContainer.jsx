import styles from "./HomepageContainer.module.scss";
import cdwIcon from "../../public/img/cdwIcon.jpg";
import cha from "../../public/img/cha.jpg";
import auroraIcon from "../../public/img/auroraIcon.jpg";
import bi from "../../public/img/bi.jpg";
import jk from "../../public/img/jk.jpg";
import jungwon from "../../public/img/jungwon.jpg";

import { NavLink } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { useCallback, useRef } from "react";

function HomepageContainer() {
  const ref = useRef();
  const intro = "Creative. Frontend Developer.";

  const { ref: climateRef, inView: climateVisible } = useInView({
    threshold: 0.9,
  });
  const { ref: tabiRef, inView: tabiVisible } = useInView({ threshold: 0.9 });
  const { ref: auroraRef, inView: auroraVisible } = useInView({
    threshold: 0.9,
  });

  // const setRefs = useCallback(
  //   (node) => {
  //     ref.current = node;
  //     climateRef(node);
  //     tabiRef(node);
  //     auroraRef(node);
  //   },
  //   [climateRef, tabiRef, auroraRef]
  // );

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
  ];

  return (
    <div className={styles.container}>
      <div className={styles["text-container"]}>
        <div className={styles["center-container"]}>
          <h1 className={styles.title}>
            {climateVisible && <p>{projects[0].title}</p>}
            {tabiVisible && <p>{projects[1].title}</p>}
            {auroraVisible && <p>{projects[2].title}</p>}
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
