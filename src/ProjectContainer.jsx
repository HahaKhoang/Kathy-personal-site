import styles from "./ProjectContainer.module.scss";
import felix from "../public/img/felix.jpg";
import cha from "../public/img/cha.jpg";
import kai from "../public/img/kai.jpg";
import bi from "../public/img/bi.jpg";
import jk from "../public/img/jk.jpg";
import jungwon from "../public/img/jungwon.jpg";

function ProjectContainer() {
  return (
    <div className={styles.container}>
      <img className={styles.picture} src={felix} />
      <img className={styles.picture} src={cha} />
      <img className={styles.picture} src={kai} />
      <img className={styles.picture} src={jungwon} />
      <img className={styles.picture} src={bi} />
      <img className={styles.picture} src={jk} />
    </div>
  );
}

export default ProjectContainer;
