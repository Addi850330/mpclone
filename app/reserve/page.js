"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";

const Reserve = () => {
  const [askinfo, setAskinfo] = useState("");
  const [clientname, setClientname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [business, setBusiness] = useState("New");

  const [numrange, setNumrange] = useState(0);
  const [rangelock, setRangelock] = useState("");
  const [btnlock, setBtnlock] = useState("disabled");
  const router = useRouter();

  const handle = async (e) => {
    e.preventDefault();
    if (!askinfo) {
      alert("諮詢不能空白");
      return;
    }
    if (!clientname) {
      alert("名字不能空白");
      return;
    }
    if (!email) {
      alert("電子郵件不能空白");
      return;
    }
    if (!phone) {
      alert("手機不能空白");
      return;
    }
    const res = await fetch("http://localhost:3000/api/message", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        askinfo,
        clientname,
        email,
        phone,
        business,
      }),
    });
    if (res.ok) {
      alert("訊息發送成功,我們會盡快跟您聯絡");
      router.push("/");
    }
  };
  useEffect(() => {
    if (numrange == 100) {
      setBtnlock("");
      setRangelock("disabled");
    }
  }, [numrange]);
  return (
    <div className={styles.contact}>
      <div className={styles.title}>
        <h1>CONTACT</h1>
        <p>聯絡我們</p>
      </div>
      <form onSubmit={handle} className={styles.quest_form}>
        <div className={styles.step}>
          <h3>STEP.01</h3>
          <p>輸入您的聯絡資訊</p>
        </div>
        <div className={styles.quest_info}>
          <p>詢問內容</p>
          <span>*必須</span>
          <textarea
            onChange={(e) => setAskinfo(e.target.value)}
            value={askinfo}
            className={styles.user_quest}
            rows="5"
            cols="20"
            type="text"
            name="quest"
          />
        </div>
        <div className={styles.step}>
          <h3>STEP.01</h3>
          <p>輸入您的聯絡資訊</p>
        </div>
        <div className={styles.quest_info}>
          <p>您的姓名</p>
          <span>*必須</span>
          <input
            onChange={(e) => {
              setClientname(e.target.value);
            }}
            value={clientname}
            className={styles.user_info}
            type="text"
            name="name"
          />
        </div>
        <div className={styles.quest_info}>
          <p>電子郵件</p>
          <span>*必須</span>
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
            className={styles.user_info}
            type="text"
            name="email"
          />
        </div>
        <div className={styles.quest_info}>
          <p>電話手機</p>
          <span>*必須</span>
          <input
            onChange={(e) => {
              setPhone(e.target.value);
            }}
            value={phone}
            className={styles.user_info}
            type="text"
            name="phone"
          />
        </div>
        <button
          className={btnlock === "disabled" ? `${styles.lock} ` : ``}
          disabled={btnlock}
          type="submit"
        >
          確認送出
        </button>
      </form>
      <div className={styles.lockset}>
        <input
          disabled={rangelock}
          onChange={(e) => {
            setNumrange(e.target.value);
          }}
          value={numrange}
          className={
            rangelock === "disabled"
              ? `${styles.reservelock} ${styles.numlock}`
              : `${styles.reservelock}`
          }
          type="range"
          min="0"
          max="100"
        />
      </div>
    </div>
  );
};

export default Reserve;
