import styles from "./Footer.module.scss";

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.footer}>
        <ul className={styles.links}>
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
            {" "}
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
        </ul>
      </div>
    </div>
  );
}

export default Footer;
