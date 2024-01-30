import Image from "next/image";
import styles from "./header.module.css";

const brandingElements = [
  {
    src: "/images/headericon.webp",
    alt: "header icon",
    width: 45,
    height: 36,
  },
  { src: "/images/logo.webp", alt: "logo", width: 90, height: 40 },
];

export default function () {
  return (
    <div className={styles["site-branding"]}>
      {brandingElements.map((obj, key) => (
        <Image className={styles["branding-element"]} {...{ ...obj, key }} />
      ))}
    </div>
  );
}
