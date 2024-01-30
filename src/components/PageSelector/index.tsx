import styles from "./pageSelector.module.css";

export default function () {
  const pages = ["1", "2", "3", "4", "5", "...", "2697"];

  return (
    <div className={styles["page-selector"]}>
      <ul>
        {pages.map((n, key) => (
          <li {...{ key }} className={styles['page-number']}>
            <p>{n}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
