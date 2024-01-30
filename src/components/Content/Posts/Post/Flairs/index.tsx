import { getRandom, getTimeAgo } from "@/utils/helper-methods";
import { faCircleCheck, faThumbTack } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import styles from "../../posts.module.css";
import PostMilestone from "./PostMilestone";
import PostedBy from "./PostedBy";

const badges = [faCircleCheck];

export default function ({ idx, hole }: { idx: number; hole: string }) {
  const [pinned, setPinned] = useState(false);
  const [postedAt, setPostedAt] = useState<any>();
  const [editedAt, setEditedAt] = useState<any>();
  const [viewCount, setViewCount] = useState("");
  const [postId, setPostId] = useState("");

  useEffect(() => {
    const posted = getTimeAgo();

    setPostedAt(posted);
    setEditedAt(getTimeAgo(Date.now() - posted.timestamp));
    setViewCount(`${Math.floor(getRandom(1000))} thread views`);
    setPostId(`#${getRandom(99999, 100000)}`);

    if (!idx) {
      // const isPinned = !!getRandom(2);
      // setPinned(isPinned);
      setPinned(true);
    }
  }, []);

  return (
    <div className={styles.flairs}>
      <div className={styles.hole}>
        <p>{hole}</p>
      </div>
      <div className={styles.awards}></div>
      {pinned && (
        <div className={styles.pinned} title='pinned by @sum1idk'>
          <FontAwesomeIcon icon={faThumbTack} transform={{ rotate: 318 }} />
        </div>
      )}
      <div className={styles.reports}></div>
      <PostedBy />
      {postedAt && <PostMilestone timeAgo={postedAt.timeAgo} />}
      <div className={styles["post-type"]}></div>
      {editedAt && <PostMilestone type='Edited' timeAgo={editedAt.timeAgo} />}
      <div className={styles.views}>
        <p>{viewCount}</p>
      </div>
      <div className={styles["post-id"]}>
        <p>{postId}</p>
      </div>
    </div>
  );
}
