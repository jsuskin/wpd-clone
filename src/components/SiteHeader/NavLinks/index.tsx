import {
  faBell,
  faCommentDots,
  faCreditCard,
  faFeatherAlt,
  faMessage,
  faMusic,
  faStore,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UserMenu from "./UserMenu";
import styles from "../header.module.css";

export default function () {
  return (
    <div className={styles["nav-links"]}>
      <div className={styles["site-links"]}>
        <div className={styles.notifications}>
          <FontAwesomeIcon
            className={styles["notifications-bell"]}
            icon={faBell}
          />
          <div className={styles["notifications-count"]}>
            <p>129</p>
          </div>
        </div>
        <FontAwesomeIcon icon={faFeatherAlt} />
        <div className={styles.messages}>
          <FontAwesomeIcon icon={faMessage} />
          <div className={styles["messages-count"]}>
            <p>13</p>
          </div>
        </div>
        <FontAwesomeIcon icon={faMusic} />
        <FontAwesomeIcon icon={faCommentDots} />
        <FontAwesomeIcon icon={faTrophy} />
        <FontAwesomeIcon icon={faCreditCard} />
        <FontAwesomeIcon icon={faStore} />
      </div>
      <UserMenu />
    </div>
  );
}
