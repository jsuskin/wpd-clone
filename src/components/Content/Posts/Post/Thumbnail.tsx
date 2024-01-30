import { PostTitle } from "@/types";
import styles from "../posts.module.css";

export default function ({ filename }: PostTitle) {
  return (
    <div className={styles.thumbnail}>
      <video src={`videos/${filename}`} height={100} width={133.333} />
    </div>
  );
}