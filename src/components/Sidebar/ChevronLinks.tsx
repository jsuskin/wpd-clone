import { faCircle, faCrown, faScroll, faArrowRightArrowLeft, faShuffle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from './sidebar.module.css'

export default function () {
  return (
    <div className={styles["sidebar-chevron-links"]}>
      <FontAwesomeIcon icon={faCircle} />
      <FontAwesomeIcon icon={faCrown} />
      <FontAwesomeIcon icon={faScroll} />
      <FontAwesomeIcon icon={faArrowRightArrowLeft} />
      <FontAwesomeIcon icon={faShuffle} />
    </div>
  );
}
