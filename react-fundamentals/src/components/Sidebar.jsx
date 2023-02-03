import styles from "./Sidebar.module.css";
import { PencilLine } from "phosphor-react";
export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="./assets/logoBertoldoTransparent.svg"
      />

      <div className={styles.profile}>
        <img
          className={styles.avatar}
          src="http://github.com/bertoldoklinger.png"
        />
        <strong>Bertoldo Klinger</strong>
        <span>Web Developer</span>
      </div>
      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
