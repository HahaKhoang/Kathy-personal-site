import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";

function Header() {
  return (
    <nav className={styles.nav}>
      <div className={styles.kathy}>
        <p>Kathy</p>
      </div>
      <div>
        <ul className={styles.about}>
          <li>Home</li>
          <li>About</li>
        </ul>
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
