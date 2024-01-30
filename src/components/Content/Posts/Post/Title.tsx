import styles from "../posts.module.css";
import { PostTitle } from "@/types";

export default function ({ filename }: PostTitle) {
  return (
    <div className={styles.title}>
      <p>{filename}</p>
    </div>
  );
}
