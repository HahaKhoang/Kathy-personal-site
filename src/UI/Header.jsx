import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";
import { useEffect, useRef } from "react";

function Header() {
  // const cursor = useRef();

  // useEffect(() => {
  //   window.addEventListener("mousemove", (e) => {
  //     const x = e.clientX;
  //     const y = e.clientY;

  //     cursor.current.style.left = x + "px";
  //     cursor.current.style.top = y + "px";
  //   });
  // }, []);
  return (
    <nav className={styles["nav-container"]}>
      <div className={styles.nav}>
        <NavLink to="/" className={styles.logo}>
          Kathy Hoang
        </NavLink>
        <div>
          <ul className={styles.about}>
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
          </ul>
        </div>
        {/* <div ref={cursor} className={styles.cursor}></div> */}
      </div>
    </nav>
  );
}

export default Header;
