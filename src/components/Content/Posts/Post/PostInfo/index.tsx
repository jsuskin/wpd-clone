import styles from "../../posts.module.css";
import Actions from "../Actions";
import Flairs from "../Flairs";
import Title from "../Title";
import { PostInfo } from "@/types";

export default function ({ idx, hole, filename }: PostInfo) {
  return (
    <div className={styles["post-info"]}>
      <Flairs {...{ idx, hole }} />
      <Title {...{ filename }} />
      <Actions {...{ hole }} />
    </div>
  );
}
