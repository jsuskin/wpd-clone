import styles from "./subheader.module.css";
import Image from "next/image";

export default function () {
  return (
    <div className={styles["site-banner-container"]}>
      <Image src='/images/site-banner.webp' alt='site banner' fill={true} />
    </div>
  );
}
