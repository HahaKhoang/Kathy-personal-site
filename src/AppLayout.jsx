import styles from "./AppLayout.module.scss";
import { NavLink, Outlet } from "react-router-dom";
import Header from "./UI/Header";
import Footer from "./UI/Footer";
import { useEffect, useRef } from "react";

function AppLayout() {
  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;

// const cursor = useRef();

// useEffect(() => {
//   window.addEventListener("mousemove", (e) => {
//     const x = e.clientX;
//     const y = e.clientY;

//     cursor.current.style.left = x + "px";
//     cursor.current.style.top = y + "px";
//   });
// }, []);

{
  /* <nav className={styles["nav-container"]}>
<ul className={styles["nav-links-container"]}>
  <div>
    <li>
      <NavLink to="/" className={styles.logo}>
        Kathy Hoang
      </NavLink>
    </li>
  </div>
  <div className={styles["center-links-container"]}>
    <li>
      <NavLink to="/" className={styles.link}>
        Home
      </NavLink>
    </li>
    <li>
      <NavLink to="/about" className={styles.link}>
        About
      </NavLink>
    </li>
  </div>
</ul>

<ul className={styles["footer-container"]}>
  <div>
    <li>
      <a
        href="https://www.linkedin.com/in/kathy-hoang-60908914a/"
        target="_blank"
        rel="noreferrer"
      >
        LinkedIn
      </a>
    </li>
    <li>
      <a
        href="https://github.com/HahaKhoang"
        target="_blank"
        rel="noreferrer"
      >
        Github
      </a>
    </li>
    <li>
      <a href="mailto:kathyhoang@gmail.com">Email</a>
    </li>
  </div>
</ul>
<div ref={cursor} className={styles.cursor} />
</nav> */
}
