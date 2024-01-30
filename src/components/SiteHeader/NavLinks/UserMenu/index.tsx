import styles from "../../header.module.css";
import Image from "next/image";
import UserPFP from "./UserPFP";

export default function () {
  return (
    <div className={styles["user-menu"]}>
      <UserPFP />
      <div>
        <div className={styles["username-container"]}>
          <span className={styles["username-wrapper"]}>
            <p className={styles["username-text"]}>jew</p>
          </span>
        </div>
        <div className={styles["currency-container"]}>
          <div className={styles["coins-container"]}>
            <div className={styles["coins-icon-container"]}>
              <div className={styles["coins-icon-wrapper"]}>
                <Image
                  src='/images/coins.webp'
                  alt='coins'
                  className={styles["coins-icon"]}
                  quality={100}
                  layout='fill'
                />
              </div>
            </div>
            <p className={styles["coins-count"]}>8955</p>
          </div>
          <div className={styles["bux-container"]}>
            <div className={styles["bux-icon-container"]}>
              <div className={styles["bux-icon-wrapper"]}>
                <Image
                  src='/images/marseybux.webp'
                  alt='bux'
                  className={styles["bux-icon"]}
                  quality={100}
                  layout='fill'
                />
              </div>
            </div>
            <p className={styles["bux-count"]}>2892</p>
          </div>
        </div>
      </div>
    </div>
  );
}
