import { getRandom } from "@/utils/helper-methods";
import {
  faArrowsUpDown,
  faBell,
  faCommentDots,
  faCopy,
  faEllipsis,
  faEyeSlash,
  faFlag,
  faFloppyDisk,
  faGift,
  faUpRightAndDownLeftFromCenter,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import styles from "./actions.module.css";

export default function ({ hole }: { hole: string }) {
  const [numComments, setNumComments] = useState(0);

  useEffect(() => {
    setNumComments(getRandom(500));
  }, []);

  return (
    <div className={styles.actions}>
      <div>
        <FontAwesomeIcon icon={faUpRightAndDownLeftFromCenter} />
      </div>
      <div>
        <FontAwesomeIcon icon={faCommentDots} />
        <p>{numComments}</p>
      </div>
      <div>
        <FontAwesomeIcon icon={faArrowsUpDown} />
        <p>Votes</p>
      </div>
      <div>
        <FontAwesomeIcon icon={faGift} />
        <p>Give Award</p>
      </div>
      <div>
        <FontAwesomeIcon icon={faCopy} />
        <p>Copy Link</p>
      </div>
      <div>
        <FontAwesomeIcon icon={faBell} />
        <p>Subscribe</p>
      </div>
      <div>
        <FontAwesomeIcon icon={faFloppyDisk} />
        <p>Save</p>
      </div>
      <div>
        <FontAwesomeIcon icon={faFlag} />
        <p>Report</p>
      </div>
      <div className={styles["block-hole"]}>
        <FontAwesomeIcon icon={faEyeSlash} />
        <p>{`Block /h/${hole}`}</p>
      </div>
      <div>
        <FontAwesomeIcon icon={faEllipsis} />
      </div>
    </div>
  );
}
