import styles from "./Header.module.scss";

function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.kathy}>
        <p>Kathy</p>
      </div>
      <div className={styles.about}>
        <p>Work</p>
        <p>About</p>
      </div>
    </div>
  );
}

export default Header;
