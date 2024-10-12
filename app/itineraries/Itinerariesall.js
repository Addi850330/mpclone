"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";

// --------aos
import AOS from "aos";
import "aos/dist/aos.css";

const Itinerariesall = (reitinaries) => {
  const reitinariesall = reitinaries.reitinaries;

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  return (
    <div className={styles.travels}>
      <div className={styles.con}>
        {reitinariesall.map((i) => (
          <div data-aos="fade-up" key={i._id} className={styles.p_info_card}>
            <div className={styles.p_info_img}>
              <Image
                src={i.mainImg}
                width={1000}
                height={1000}
                priority={true}
                style={{ width: "100%", height: "100%" }}
                alt={i.title}
                blurDataURL="/imgload.png"
              />
            </div>
            <div className={styles.p_info_desc}>
              <h4>{i.title}</h4>
              <h4>{i.description}</h4>
            </div>
            <div className={styles.p_info_cost}>
              <p className={styles.nt}>{i.cost}</p>
            </div>
            <div className={styles.p_info_link}>
              <Link href={`/itinerary/${i._id}`}>詳細行程</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Itinerariesall;
