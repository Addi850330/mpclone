import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.title}>
        <h1>ABOUT US</h1>
        <p>關於我們</p>
      </div>
      <div className={styles.company}>
        <div className={styles.companyimg}>
          <Image
            src="/about/ab1.svg"
            width={1600}
            height={1600}
            priority={true}
            style={{ width: "100%", height: "100%" }}
            alt="contact_secondary"
          />
        </div>
        <div className={styles.companyinfo}>
          <h3>楓葉旅遊國際旅行社股份有限公司</h3>
          <p className={styles.infotext}>
            本公司成立於民國85年，至今已有多年的專業保證，並於90年及92年加入「旅行業品保協會」（品保644）及「北市旅行商業同業工會」，提供顧客更完整的保障與服務。
          </p>
          <p className={styles.companylocation}>總公司｜台北</p>
        </div>
      </div>
      <div className={styles.serve}>
        <div className={styles.servetitle}>服務特色</div>
        <div className={styles.serveinfos}>
          <div className={styles.serveinfo}>
            <h3>高CP值</h3>
            <p>
              用最超值的價格，擁有最有趣的旅遊體驗．遍布全台專業旅遊規畫業務
            </p>
          </div>
          <div className={styles.serveinfo}>
            <h3>旅遊保險</h3>
            <p>
              團體旅遊都會為每位貴賓 投保新台幣 250 萬責任險暨新台幣 20
              萬意外醫療險（不含法定傳染疾病）
            </p>
          </div>
          <div className={styles.serveinfo}>
            <h3>全方位專業客戶服務團隊</h3>
            <p>
              快速、精準客戶服務中心，提供旅遊資訊及高度服務品質，帶給您最優質體驗
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
