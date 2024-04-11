import styles from "./Footer.module.scss";

function Footer() {
  return (
    <div className={styles.container}>
      <ul className={styles.footer}>
        <li className={styles["list-item"]}>
          <a
            href="https://www.linkedin.com/in/kathy-hoang-60908914a/"
            target="_blank"
            rel="noreferrer"
            className={styles.link}
          >
            LinkedIn
          </a>
        </li>
        <li className={styles["list-item"]}>
          <a
            href="https://github.com/kathyhahahahoang"
            target="_blank"
            rel="noreferrer"
            className={styles.link}
          >
            Github
          </a>
        </li>
        <li className={styles["list-item"]}>
          <a href="mailto:kathyhahoang@gmail.com" className={styles.link}>
            Email
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
