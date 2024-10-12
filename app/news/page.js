import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import Newcards from "./Newcards";
const getNewnews = async () => {
  const apiUrl = process.env.API_URL;
  const res = await fetch(`${apiUrl}/api/news`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("failed to fetch data");
  }
  return res.json();
};

export default async function News() {
  const { newnews } = await getNewnews();
  const renewnews = await newnews.reverse();
  return (
    <div className={styles.news}>
      <div className={styles.title}>
        <h1>NEWS</h1>
        <p>最新消息</p>
      </div>

      <Newcards renewnews={renewnews} />
      {/* <div className={styles.pagebtn}>
        <button className={styles.leftbtn}></button>
        <div className={styles.page}>1/3</div>
        <button className={styles.rightbtn}></button>
      </div> */}
    </div>
  );
}
