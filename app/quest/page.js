"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
const Quest = () => {
  const [answer, setAnswer] = useState("close");
  const questset = function (e) {
    let switchid = e.target.id;
    console.log(switchid);
    let btnindex = "quest" + switchid;
    if (answer === "close") {
      setAnswer(btnindex);
    } else if (btnindex === answer) {
      setAnswer("close");
    } else {
      setAnswer(btnindex);
    }
  };

  // ------------

  return (
    <div className={styles.quest}>
      <div className={styles.title}>
        <h1>Quest</h1>
        <p>常見問題</p>
      </div>
      <div className={styles.problems}>
        <div onClick={questset} id="1" className={styles.problem}>
          <span>Q</span>
          訂購產品後如何聯繫?
          <div
            className={
              answer === "quest1"
                ? `${styles.arrow} ${styles.active}`
                : `${styles.arrow}`
            }
          ></div>
        </div>
        <div
          className={
            answer === "quest1"
              ? `${styles.answer} ${styles.active}`
              : `${styles.answer}`
          }
        >
          <span>A</span>
          <div>
            在您送出產品訂單後，會收到您的專屬客服人員用電子郵件或Line來聯絡您，或是利用您留下的聯絡電話與您確認報名相關事宜。
          </div>
        </div>
        <div onClick={questset} id="2" className={styles.problem}>
          <span>Q</span>
          什麼是旅遊定型化契約?
          <div
            className={
              answer === "quest2"
                ? `${styles.arrow} ${styles.active}`
                : `${styles.arrow}`
            }
          ></div>
        </div>
        <div
          className={
            answer === "quest2"
              ? `${styles.answer} ${styles.active}`
              : `${styles.answer}`
          }
        >
          <span>A</span>
          <div>
            觀光局為提昇旅遊品質，保障消費者及旅遊業者雙方之權益及義務，而訂立的定型化契約。為了避免消費者及旅遊業者雙方對旅遊產品的認知不同，或對訂購的的內容有所爭議，因此制定定型化契約「國外旅遊契約書」作為旅行社與消費者簽約之依據。
          </div>
        </div>
        <div onClick={questset} id="3" className={styles.problem}>
          <span>Q</span>
          付款後有發票嗎?
          <div
            className={
              answer === "quest3"
                ? `${styles.arrow} ${styles.active}`
                : `${styles.arrow}`
            }
          ></div>
        </div>
        <div
          className={
            answer === "quest3"
              ? `${styles.answer} ${styles.active}`
              : `${styles.answer}`
          }
        >
          <span>A</span>
          <div>
            旅行社屬特許產業，依照政府規定可提供代收轉付，若您需要報帳，代收轉付收據，同樣可申請報帳，請於訂購後於該筆訂單的付款頁下方，填寫統一編號、公司抬頭等資料，我們確認後會將您的代收轉付收據寄出。
          </div>
        </div>
        <div onClick={questset} id="4" className={styles.problem}>
          <span>Q</span>
          我要再多久前預定行程?
          <div
            className={
              answer === "quest4"
                ? `${styles.arrow} ${styles.active}`
                : `${styles.arrow}`
            }
          ></div>
        </div>
        <div
          className={
            answer === "quest4"
              ? `${styles.answer} ${styles.active}`
              : `${styles.answer}`
          }
        >
          <span>A</span>
          <div>
            依照旅遊商品的屬性，可銷售的日期設定也不同。為協助您確認機位、火車位、訂房、以及相關票券的寄送，建議在預訂參加日期前三個月前預訂，最晚請於出發前七個工作天訂購；如遇假日或連續假期，請盡早訂購。
          </div>
        </div>
        <div onClick={questset} id="5" className={styles.problem}>
          <span>Q</span>
          護照未滿6個月效期可以出國嗎?
          <div
            className={
              answer === "quest5"
                ? `${styles.arrow} ${styles.active}`
                : `${styles.arrow}`
            }
          ></div>
        </div>
        <div
          className={
            answer === "quest5"
              ? `${styles.answer} ${styles.active}`
              : `${styles.answer}`
          }
        >
          <span>A</span>
          <div>
            依國際慣例，絕大部分國家或地區皆規定入境之外國旅客所持護照效期須在6個月以上，方可核准入境。如發現護照效期不足，請儘早辦理換發新護照。
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quest;
