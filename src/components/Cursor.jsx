import { useEffect, useRef } from "react";
import styles from "./Cursor.module.scss";

function Cursor() {
  const cursor = useRef();

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      const x = e.clientX;
      const y = e.clientY;

      cursor.current.style.left = x + "px";
      cursor.current.style.top = y + "px";
    });
  }, []);

  return <div ref={cursor} className={styles.cursor}></div>;
}

export default Cursor;
