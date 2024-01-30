import { randomlyGeneratedUsernames } from "@/utils/constants";
import { useEffect, useState } from "react";
import styles from "../../posts.module.css";

export default function () {
  const [username, setUsername] = useState("");

  useEffect(() => {
    setUsername(
      randomlyGeneratedUsernames[
        Math.floor(Math.random() * randomlyGeneratedUsernames.length)
      ]
    );
  }, []);
  
  return (
    <div className={styles["posted-by"]}>
      <div className={styles.badges}></div>
      <div className={styles.pfp}></div>
      <div className={styles.username}>
        <p>{username}</p>
      </div>
      <div className={styles["user-flair"]}></div>
    </div>
  );
}
