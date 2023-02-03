import styles from "./Header.module.css";
import logo from "../assets/logo.png";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} alt="Logo do Bertoldo" />
    </header>
  );
}
//TODO: CHANGE LOGO AND HEADER PROPORTION ON CSS
