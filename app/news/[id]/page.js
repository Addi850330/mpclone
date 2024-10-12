import React from "react";
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
const getNewnewsById = async (id) => {
  const apiUrl = process.env.API_URL;
  const res = await fetch(`${apiUrl}/api/news/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("fail to fetch.");
  }
  return res.json();
};
export default async function Newnew({ params }) {
  const { id } = params;
  console.log(id);
  const { newnew } = await getNewnewsById(id);
  // newnew 要跟對應 route 寫一樣
  const { mainimg, title, time, logtime, object, info, infoinner, connect } =
    newnew;
  return (
    <div className={styles.new}>
      <div className={styles.title}>
        <h1>NEW</h1>
        <p>最新消息</p>
      </div>
      <div className={styles.container}>
        <div className={styles.new_img}>
          <Image
            src={mainimg}
            width={1000}
            height={1000}
            priority={true}
            style={{ width: "100%", height: "100%" }}
            alt={title}
          />
        </div>
        <div className={styles.new_info}>
          <div className={styles.new_title}>{title}</div>
          <div className={styles.new_desc}>
            <div className={styles.new_date}>活動日期:{time}</div>
            <div className={styles.new_Applydate}>登入日期:{logtime}</div>
            <div className={styles.who}>{object}</div>
            <div className={styles.activeinfo}>{info}</div>
            <div className={styles.condition}>
              <p>{infoinner}</p>
            </div>
            <div className={styles.info_link}>
              <p>活動詳細資訊 :</p>
              <Link href={connect}>{connect}</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
