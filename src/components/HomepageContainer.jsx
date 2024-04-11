import styles from "./HomepageContainer.module.scss";
import cdwIcon from "../assets/images/cdwIcon.webp";
import tabiIcon from "../assets/images/tabiIcon.webp";
import auroraIcon from "../assets/images/auroraIcon.webp";
import woIcon from "../assets/images/woIcon.webp";
import tilIcon from "../assets/images/tilIcon.webp";
import natoursIcon from "../assets/images/natoursIcon.webp";
import { NavLink } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper/modules";

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
      desc: "Travel Consultancy Website",
      desc2: "that creates curated trips ",
      desc3: "for every type of traveler",
    },
    {
      src: cdwIcon,
      ref: climateRef,
      link: "/climate-death-wheel",
      title: "Climate Death Wheel",
      desc: "Interactive web component",
      desc2: "that predicts the user's death",
      desc3: "based upon impacts from climate change",
    },
    {
      src: auroraIcon,
      ref: auroraRef,
      link: "/auroramalet",
      title: "Auroramålet",
      desc: "Suing the Swedish State",
      desc2: "What do we want ? Climate justice !",
      desc3: "When do we want it ? Now !",
    },
    {
      src: woIcon,
      ref: oasisRef,
      link: "/the-wild-oasis",
      title: "The Wild Oasis",
      desc: "Hotel booking site",
      desc2: "so users can choose their",
      desc3: "most optimal accommodation",
    },
    {
      src: tilIcon,
      ref: tilRef,
      link: "/today-i-learned",
      title: "Today I learned",
      desc: "Trivia page",
      desc2: "for users to learn",
      desc3: "new random facts",
    },
    {
      src: natoursIcon,
      ref: natoursRef,
      link: "/natours",
      title: "Natours",
      desc: "Tour booking site",
      desc2: "to encourage people",
      desc3: "to go outdoors more",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className={styles.container}
    >
      <div className={styles["text-container"]}>
        <div className={styles["center-container"]}>
          <h1 className={styles.title}>
            {tabiVisible && projects[0].title}
            {climateVisible && projects[1].title}
            {auroraVisible && projects[2].title}
            {oasisVisible && projects[3].title}
            {tilVisible && projects[4].title}
            {natoursVisible && projects[5].title}
          </h1>
          <div className={styles["desc-container"]}>
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
        </div>
      </div>
      <Swiper
        direction={"horizontal"}
        slidesPerView="auto"
        spaceBetween={30}
        mousewheel={{ releaseOnEdges: true }}
        freeMode={true}
        loop={true}
        speed={1000}
        modules={[Mousewheel, Pagination]}
        className={styles["swiper-container"]}
        breakpoints={{
          1000: {
            direction: "vertical",
          },
        }}
      >
        {projects.map((project) => {
          return (
            <SwiperSlide className={styles["swiper-slide"]} key={project.title}>
              <div className={styles["empty-container"]}></div>
              <div className={styles["project-container"]}>
                <NavLink to={project.link} className={styles["img-link"]}>
                  <img
                    src={project.src}
                    className={styles.picture}
                    ref={project.ref}
                    alt={`${project.title} website's starting page`}
                    loading="lazy"
                  />
                </NavLink>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <NavLink to="/" className={styles.logo}>
        Kathy Hoang
      </NavLink>
      <div className={styles["nav-bar-center"]}>
        <ul className={styles.about}>
          <li className={styles["header-item"]}>
            <NavLink to="/" className={styles["header-link"]}>
              Home
            </NavLink>
          </li>
          <li className={styles["header-item"]}>
            <NavLink to="/about" className={styles["header-link"]}>
              About
            </NavLink>
          </li>
        </ul>
      </div>

      <ul className={styles["footer"]}>
        <li className={styles["footer-item"]}>
          <a
            href="https://www.linkedin.com/in/kathy-hoang-60908914a/"
            target="_blank"
            rel="noreferrer"
            className={styles["footer-link"]}
          >
            LinkedIn
          </a>
        </li>
        <li className={styles["footer-item"]}>
          <a
            href="https://github.com/kathyhahahahoang"
            target="_blank"
            rel="noreferrer"
            className={styles["footer-link"]}
          >
            Github
          </a>
        </li>
        <li className={styles["footer-item"]}>
          <a
            href="mailto:kathyhahoang@gmail.com"
            className={styles["footer-link"]}
          >
            Email
          </a>
        </li>
      </ul>
    </motion.div>
  );
}

export default HomepageContainer;
