import { holes } from "@/utils/constants";
import { getRandom } from "@/utils/helper-methods";
import { useEffect, useState } from "react";
import styles from "../posts.module.css";
import Thumbnail from "./Thumbnail";
import PostInfo from "./PostInfo";
import Votes from "./Votes";

const getHole = () => {
  const flat = Object.values(holes).flat();
  const idx = getRandom(flat.length);
  return flat[idx];
};

export default function ({ filename, idx }: any) {
  const [hole, setHole] = useState("");

  useEffect(() => {
    setHole(getHole);
  }, []);

  return (
    <div className={styles.post}>
      <Votes />
      <Thumbnail {...{ filename }} />
      <PostInfo {...{ idx, hole, filename }} />
    </div>
  );
}
