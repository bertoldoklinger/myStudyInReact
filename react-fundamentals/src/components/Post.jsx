import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.Post}>
      <header>
        <div className={styles.author}>
          <img
            src="https://github.com/bertoldoklinger.png"
            className={styles.avatar}
          />
          <div className={styles.authorInfo}>
            <strong>Bertoldo Klinger</strong>
            <span>Frontend Developer</span>
          </div>
        </div>

        <time dateTime="2023-02-03 14:57:30">Publicado há 1h</time>
      </header>
      <div className={styles.content}>
        <p>Fala galera!!</p>
        <p>Acabei de subir mais um projeto pro meu portifaaa</p>
        <p>
          👉<a href="#">jane.design/doctorcare</a>
        </p>
      </div>
    </article>
  );
}
