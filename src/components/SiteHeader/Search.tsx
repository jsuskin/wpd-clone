import styles from "./header.module.css";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function () {
  return (
    <form className={styles["search-form"]}>
      <input
        type='search'
        placeholder='Search'
        className={styles["search-input"]}
      />
      <div className={styles['search-icon']}>
        <FontAwesomeIcon icon={faMagnifyingGlass} color='#f1f1f1' />
      </div>
    </form>
  );
}
