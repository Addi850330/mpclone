"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";

// --------aos
import AOS from "aos";
import "aos/dist/aos.css";

const Newcards = (renewnews) => {
  const renewnewscard = renewnews.renewnews;
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);
  return (
    <div className={styles.newscards}>
      {renewnewscard.map((i) => (
        <Link
          data-aos="fade-up"
          key={i._id}
          className={styles.newcard}
          href={`/news/${i._id}`}
        >
          <div className={styles.newimg}>
            <Image
              src={i.mainimg}
              width={1600}
              height={1600}
              priority={true}
              style={{ width: "100%", height: "100%" }}
              alt={i.tltle}
            ></Image>
          </div>
          <div className={styles.newinfo}>
            <div className={styles.newtitle}>{i.title}</div>
            <div className={styles.newtime}>{i.time}</div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Newcards;
