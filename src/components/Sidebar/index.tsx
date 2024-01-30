import { useState, useEffect } from "react";
import NextImage from "next/image";
import styles from "./sidebar.module.css";
import ChevronLinks from "./ChevronLinks";
import Holes from "./Holes";

interface ImageDimensions {
  width: number;
  height: number;
}

const sidebarImagePath = "/images/sidebar-image.webp";

const getImageDimensions = (src: string) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = src;

    img.onload = () => {
      const dimensions = {
        width: img.width,
        height: img.height,
      };
      resolve(dimensions);
    };

    img.onerror = (error) => {
      reject(error);
    };
  });
};

export default function () {
  const [sidebarImageDimensions, setSidebarImageDimensions] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    getImageDimensions(sidebarImagePath)
      .then((dimensions) => {
        const { width, height } = dimensions as ImageDimensions;

        setSidebarImageDimensions({
          width: 300,
          height: Math.round((height / width) * 300),
        });
      })
      .catch((error) => {
        console.error("Error loading image:", error);
      });
  }, []);

  return (
    <div className={styles["sidebar-container"]}>
      <div className={styles.sidebar}>
        <p>Current registered users: 1,591,616</p>
        <NextImage
          {...sidebarImageDimensions}
          src={sidebarImagePath}
          alt='sidebar image'
          layout='responsive'
          objectFit='cover'
        />
        <ChevronLinks />
        <Holes />
        <div className={styles.rules}></div>
        <div className={styles["famous-videos"]}></div>
        <hr />
        <div>
          <p style={{ color: "#dddddd", fontSize: "16px", fontWeight: "300" }}>
            Live commit:{" "}
            <a
              href='https://www.lemonparty.org'
              target='_blank'
              style={{ color: "#c042ff" }}
            >
              9b7cd2b
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
