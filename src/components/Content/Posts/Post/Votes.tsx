import { faDownLong, faUpLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import styles from "../posts.module.css";

const getUpvotes = () => Math.floor(Math.random() * 1000);

export default function () {
  const [upvotes, setUpvotes] = useState(0);

  useEffect(() => setUpvotes(getUpvotes), []);

  return (
    <div className={styles.votes}>
      <FontAwesomeIcon icon={faUpLong} />
      <p>{upvotes.toString()}</p>
      <FontAwesomeIcon icon={faDownLong} />
    </div>
  );
}
