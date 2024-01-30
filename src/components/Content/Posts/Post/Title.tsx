import styles from "../posts.module.css";

export default function ({ filename }: { filename: string }) {
  return (
    <div className={styles.title}>
      <p>{filename}</p>
    </div>
  );
}
