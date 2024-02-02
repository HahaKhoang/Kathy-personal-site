import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";

function Header() {
  return (
    <nav className={styles["nav-container"]}>
      <div className={styles.nav}>
        <div>
          <NavLink to="/" className={styles.logo}>
            Kathy Hoang
          </NavLink>
        </div>
        <div>
          <ul className={styles.about}>
            <li>
              <NavLink to="/" className={styles.link}>
                Home
              </NavLink>
            </li>
            <li>About</li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;

{
  /* <div className={styles.container}>
<div className={styles.kathy}>
  <p>Kathy</p>
</div>
<div className={styles.about}>
  <p>Work</p>
  <p>About</p>
</div>
</div> */
}
