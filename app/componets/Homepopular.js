"use client";
import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../page.module.css";

// --------aos
import AOS from "aos";
import "aos/dist/aos.css";

export default function Homepopular(reitinaries) {
  const itinaries = reitinaries.reitinaries;
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);
  // console.log(itinaries);
  return (
    <div className={styles.popularinfo}>
      {itinaries.map((i) => (
        <div data-aos="fade-up" key={i._id} className={styles.p_info_card}>
          <div className={styles.p_info_img}>
            <Image
              src={i.mainImg}
              width={1600}
              height={1600}
              priority={true}
              style={{ width: "100%", height: "100%" }}
              alt="contact_secondary"
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
  );
}
