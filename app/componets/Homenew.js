"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../page.module.css";

export default function Homenew(renewnews) {
  const [newp, setNewp] = useState(0);
  const newnews = renewnews.renewnews;
  // console.log(newnews[0].title);
  const [newFirst, setNewFirst] = useState(newnews[0]);
  const [newSecond, setNewSecond] = useState(newnews[1]);
  const [newThird, setNewThird] = useState(newnews[2]);
  const [newForth, setNewForth] = useState(newnews[3]);
  const [newFifth, setNewFifth] = useState(newnews[4]);
  const [newSixth, setNewSixth] = useState(newnews[5]);
  useEffect(() => {
    let np = newp;
    const newstime = setInterval(() => {
      if (np < 5) {
        np++;
        setNewp(np);
      } else {
        np = 0;
        setNewp(np);
      }
    }, 5000);
    return () => {
      clearInterval(newstime);
    };
  }, []);
  // news switch set ------------
  const nextnew = function () {
    let np = newp;
    if (np < 5) {
      np++;
      setNewp(np);
    } else {
      np = 0;
      setNewp(np);
    }
  };
  const prenew = function () {
    let np = newp;
    if (np > 0) {
      np--;
      setNewp(np);
    } else {
      np = 5;
      setNewp(np);
    }
  };

  return (
    <div className={styles.newsinfo}>
      <div className={styles.newsimgs}>
        <div
          className={
            `${styles.infoimg}` +
            " " +
            (newp === 0 ? `${styles.show}` : ``) +
            (newp === 1 ? `${styles.over}` : ``) +
            (newp === 2 ? `${styles.overoutside}` : ``) +
            (newp === 3 ? `${styles.outside}` : ``) +
            (newp === 4 ? `${styles.overnext}` : ``) +
            (newp === 5 ? `${styles.next}` : ``)
          }
        >
          <Image
            src={newFirst.mainimg}
            width={500}
            height={500}
            priority={true}
            style={{ width: "100%", height: "100%" }}
            alt={newFirst.title}
            blurDataURL="/imgload.png"
          />
        </div>
        <div
          className={
            `${styles.infoimg}` +
            " " +
            (newp === 1 ? `${styles.show}` : ``) +
            (newp === 2 ? `${styles.over}` : ``) +
            (newp === 3 ? `${styles.overoutside}` : ``) +
            (newp === 4 ? `${styles.outside}` : ``) +
            (newp === 5 ? `${styles.overnext}` : ``) +
            (newp === 0 ? `${styles.next}` : ``)
          }
        >
          <Image
            src={newSecond.mainimg}
            width={500}
            height={500}
            priority={true}
            style={{ width: "100%", height: "100%" }}
            alt={newSecond.title}
            blurDataURL="/imgload.png"
          />
        </div>
        <div
          className={
            `${styles.infoimg}` +
            " " +
            (newp === 2 ? `${styles.show}` : ``) +
            (newp === 3 ? `${styles.over}` : ``) +
            (newp === 4 ? `${styles.overoutside}` : ``) +
            (newp === 5 ? `${styles.outside}` : ``) +
            (newp === 0 ? `${styles.overnext}` : ``) +
            (newp === 1 ? `${styles.next}` : ``)
          }
        >
          <Image
            src={newThird.mainimg}
            width={500}
            height={500}
            priority={true}
            style={{ width: "100%", height: "100%" }}
            alt={newThird.title}
            blurDataURL="/imgload.png"
          />
        </div>
        <div
          className={
            `${styles.infoimg}` +
            " " +
            (newp === 3 ? `${styles.show}` : ``) +
            (newp === 4 ? `${styles.over}` : ``) +
            (newp === 5 ? `${styles.overoutside}` : ``) +
            (newp === 0 ? `${styles.outside}` : ``) +
            (newp === 1 ? `${styles.overnext}` : ``) +
            (newp === 2 ? `${styles.next}` : ``)
          }
        >
          <Image
            src={newForth.mainimg}
            width={500}
            height={500}
            priority={true}
            style={{ width: "100%", height: "100%" }}
            alt={newForth.title}
            blurDataURL="/imgload.png"
          />
        </div>
        <div
          className={
            `${styles.infoimg}` +
            " " +
            (newp === 4 ? `${styles.show}` : ``) +
            (newp === 5 ? `${styles.over}` : ``) +
            (newp === 0 ? `${styles.overoutside}` : ``) +
            (newp === 1 ? `${styles.outside}` : ``) +
            (newp === 2 ? `${styles.overnext}` : ``) +
            (newp === 3 ? `${styles.next}` : ``)
          }
        >
          <Image
            src={newFifth.mainimg}
            width={500}
            height={500}
            priority={true}
            style={{ width: "100%", height: "100%" }}
            alt={newFifth.title}
            blurDataURL="/imgload.png"
          />
        </div>
        <div
          className={
            `${styles.infoimg}` +
            " " +
            (newp === 5 ? `${styles.show}` : ``) +
            (newp === 0 ? `${styles.over}` : ``) +
            (newp === 1 ? `${styles.overoutside}` : ``) +
            (newp === 2 ? `${styles.outside}` : ``) +
            (newp === 3 ? `${styles.overnext}` : ``) +
            (newp === 4 ? `${styles.next}` : ``)
          }
        >
          <Image
            src={newSixth.mainimg}
            width={500}
            height={500}
            priority={true}
            style={{ width: "100%", height: "100%" }}
            alt={newSixth.title}
            blurDataURL="/imgload.png"
          />
        </div>
      </div>
      <div className={styles.newsswitch}>
        <button className={styles.pre} onClick={prenew}></button>
        <button className={styles.next} onClick={nextnew}></button>
      </div>
      <div className={styles.newscontact}>
        <Link
          className={newp === 0 ? `${styles.news_active}` : ``}
          href={`/news/${newFirst._id}`}
        >
          {newFirst.title}...
        </Link>
        <Link
          className={newp === 1 ? `${styles.news_active}` : ``}
          href={`/news/${newSecond._id}`}
        >
          {newSecond.title}...
        </Link>
        <Link
          className={newp === 2 ? `${styles.news_active}` : ``}
          href={`/news/${newThird._id}`}
        >
          {newThird.title}...
        </Link>
        <Link
          className={newp === 3 ? `${styles.news_active}` : ``}
          href={`/news/${newForth._id}`}
        >
          {newForth.title}...
        </Link>
        <Link
          className={newp === 4 ? `${styles.news_active}` : ``}
          href={`/news/${newFifth._id}`}
        >
          {newFifth.title}...
        </Link>
        <Link
          className={newp === 5 ? `${styles.news_active}` : ``}
          href={`/news/${newSixth._id}`}
        >
          {newSixth.title}...
        </Link>
      </div>
    </div>
  );
}
