import styles from "./Footer.module.scss";

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.footer}>
        <ul className={styles.links}>
          <li className={styles["list-item"]}>
            <a
              href="https://www.linkedin.com/in/kathy-hoang-60908914a/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li className={styles["list-item"]}>
            <a
              href="https://github.com/kathyhahahahoang"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </li>
          <li className={styles["list-item"]}>
            <a href="mailto:kathyhahoang@gmail.com">Email</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
