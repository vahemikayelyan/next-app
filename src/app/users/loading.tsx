import styles from "../page.module.css";

export default function Loading() {
  return (
    <div className={styles.main}>
      <div className={styles.card}>
        <span className={styles.skeleton}>
          <span style={{ opacity: 0 }}>John Doe</span>
        </span>
      </div>
      <div className={styles.card}>
        <span className={styles.skeleton}>
          <span style={{ opacity: 0 }}>John Doe</span>
        </span>
      </div>
      <div className={styles.card}>
        <span className={styles.skeleton}>
          <span style={{ opacity: 0 }}>John Doe</span>
        </span>
      </div>
      <div className={styles.card}>
        <span className={styles.skeleton}>
          <span style={{ opacity: 0 }}>John Doe</span>
        </span>
      </div>
      <div className={styles.card}>
        <span className={styles.skeleton}>
          <span style={{ opacity: 0 }}>John Doe</span>
        </span>
      </div>
    </div>
  );
}
