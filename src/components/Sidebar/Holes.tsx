import styles from "./sidebar.module.css";
import { holes } from "@/utils/constants";

export default function () {
  return (
    <div className={styles.holes}>
      <div>
        <div className={styles["hole-header"]}><div className={styles['horizontal-rule']}/>
          <p className={styles["hole-header-text"]}>DEATH</p>
        </div>
        <ul className={styles["grid-list"]}>
          {holes.death.map((hole, key) => (
            <li {...{ key }}>
              <p>{hole}</p>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <div className={styles["hole-header"]}><div className={styles['horizontal-rule']}/>
          <p className={styles["hole-header-text"]}>GORE</p>
        </div>
        <ul className={styles["grid-list"]}>
          {holes.gore.map((hole, key) => (
            <li {...{ key }}>
              <p>{hole}</p>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <div className={styles["hole-header"]}><div className={styles['horizontal-rule']}/>
          <p className={styles["hole-header-text"]}>SOCIAL</p>
        </div>
        <ul className={styles["grid-list"]}>
          {holes.social.map((hole, key) => (
            <li {...{ key }}>
              <p>{hole}</p>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <div className={styles["hole-header"]}><div className={styles['horizontal-rule']}/>
          <p className={styles["hole-header-text"]}>ACTIVE CONFLICTS</p>
        </div>
        <ul className={styles["grid-list"]}>
          {holes.activeConflicts.map((hole, key) => (
            <li {...{ key }}>
              <p>{hole}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
