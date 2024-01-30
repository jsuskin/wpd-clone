import { faFeatherAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./content.module.css";

export default function () {
  const handleNewPost = () => {
    console.log("new post");
  };

  return (
    <button className={styles["create-post-button"]} onClick={handleNewPost}>
      <FontAwesomeIcon icon={faFeatherAlt} />
      <p>Create Post</p>
    </button>
  );
}
