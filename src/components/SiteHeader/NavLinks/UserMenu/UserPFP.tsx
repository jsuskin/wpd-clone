import Image from "next/image";
import styles from "../../header.module.css";

export default function () {
  return (
    <div className={styles["user-pfp-container"]}>
      <div className={styles["user-pfp-wrapper"]}>
        <Image
          src='/images/jew-pfp.webp'
          alt='user pfp'
          className={styles["user-pfp"]}
          quality={100}
          layout='fill'
        />
      </div>
    </div>
  );
}
