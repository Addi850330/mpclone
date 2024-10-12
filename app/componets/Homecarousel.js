"use client";
import { useEffect, useState } from "react";

import Image from "next/image";
import styles from "../page.module.css";

export default function Homecarousel() {
  const [pt, setPt] = useState(0);
  const [newp, setNewp] = useState(0);

  useEffect(() => {
    // 副作用操作
    let p = 0;
    const timer = setInterval(() => {
      // console.log("執行副作用");
      if (p < 5) {
        p++;
        setPt(p);
        // console.log(p + "test");
      } else {
        p = 0;
        // console.log(p + "test");
        setPt(p);
      }
    }, 10000);
    // 返回清理函式
    return () => {
      clearInterval(timer);
      // console.log("清理副作用");
    };
  }, []);
  return (
    <div className={styles.carouselset}>
      <div className={styles.backimg}>
        <Image
          src="/homeimg/top1.jpg"
          width={1600}
          height={1600}
          priority={true}
          style={{ width: "100%", height: "100%" }}
          alt="contact_secondary"
          className={pt === 0 ? `${styles.active} ` : `${styles.remove}`}
        />
      </div>
      <div className={styles.backimg}>
        <Image
          src="/homeimg/top2.jpg"
          width={1600}
          height={1600}
          priority={true}
          style={{ width: "100%", height: "100%" }}
          alt="contact_secondary"
          className={pt === 1 ? `${styles.active}` : `${styles.remove}`}
        />
      </div>
      <div className={styles.backimg}>
        <Image
          src="/homeimg/top3.jpg"
          width={1600}
          height={1600}
          priority={true}
          style={{ width: "100%", height: "100%" }}
          alt="contact_secondary"
          className={pt === 2 ? `${styles.active}` : `${styles.remove}`}
        />
      </div>
      <div className={styles.backimg}>
        <Image
          src="/homeimg/top4.jpg"
          width={1600}
          height={1600}
          priority={true}
          style={{ width: "100%", height: "100%" }}
          alt="contact_secondary"
          className={pt === 3 ? `${styles.active}` : `${styles.remove}`}
        />
      </div>
      <div className={styles.backimg}>
        <Image
          src="/homeimg/top5.jpg"
          width={1600}
          height={1600}
          priority={true}
          style={{ width: "100%", height: "100%" }}
          alt="contact_secondary"
          className={pt === 4 ? `${styles.active}` : `${styles.remove}`}
        />
      </div>
      <div className={styles.backimg}>
        <Image
          src="/homeimg/top6.jpg"
          width={1600}
          height={1600}
          priority={true}
          style={{ width: "100%", height: "100%" }}
          alt="contact_secondary"
          className={pt === 5 ? `${styles.active}` : `${styles.remove}`}
        />
      </div>
    </div>
  );
}
