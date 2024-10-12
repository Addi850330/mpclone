import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Homepopular from "./componets/Homepopular";
import Homenew from "./componets/Homenew";
import Homecarousel from "./componets/Homecarousel";

const apiUrl = process.env.API_URL;
const getItinerarie = async () => {
  const res = await fetch(`${apiUrl}/api/itinaries`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("failed to fetch data");
  }
  return res.json();
};
const getNewnews = async () => {
  const res = await fetch(`${apiUrl}/api/news`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("failed to fetch data");
  }
  return res.json();
};
export default async function Home() {
  // new and itinerarie homepagedata set
  const { itinaries } = await getItinerarie();
  const reitinaries = itinaries.slice(0, 6);

  const { newnews } = await getNewnews();
  const renewnews = newnews.reverse().slice(0, 6);

  return (
    <main className={styles.main}>
      <section className={styles.hometopback}>
        <Homecarousel />
        <div className={styles.carouseltitle}>
          <div className={styles.chtextleft}>輕鬆出遊</div>
          <div className={styles.chtextright}>享受旅行</div>
          <div className={styles.entext}>
            <p className={styles.enlt}>Travel easily</p>
            <p className={styles.enrb}>and enjoy your trip</p>
          </div>
        </div>
        <div className={styles.ccarrow}>
          <span className={styles.artext}>Scroll</span>
        </div>
      </section>
      <section className={styles.popular}>
        <div className={styles.container}>
          <div className={styles.poputag}>
            <div className={styles.poputitle}>POPULAR</div>
            <div className={styles.popusubtitle}>熱門行程</div>
            <div className={styles.popudescribe}>給你最高CP的旅遊體驗</div>
          </div>
          <Homepopular reitinaries={reitinaries} />
        </div>
      </section>
      <section className={styles.tourist}>
        <div className={styles.container}>
          <div className={styles.tourtag}>
            <div className={styles.tourtitle}>TOURIST SPOTS</div>
            <div className={styles.toursubtitle}>精選景點</div>
            <div className={styles.tourdescribe}>
              獨家精彩行程豐富你的旅遊視野
            </div>
          </div>
          <div className={styles.spots}>
            <Link href={"/itineraries/jp"} className={styles.spotcard}>
              <Image
                src="/spots/sp1.png"
                width={1600}
                height={1600}
                priority={true}
                style={{ width: "100%", height: "100%" }}
                alt="contact_secondary"
              />
              <div className={styles.location}>
                <div className={styles.locationname}>日本</div>
                <div className={styles.locationdesc}>京阪神奈暢遊</div>
              </div>
            </Link>
            <Link href={"/itineraries/korean"} className={styles.spotcard}>
              <Image
                src="/spots/sp2.png"
                width={1600}
                height={1600}
                priority={true}
                style={{ width: "100%", height: "100%" }}
                alt="contact_secondary"
              />
              <div className={styles.location}>
                <div className={styles.locationname}>韓國</div>
                <div className={styles.locationdesc}>購物天堂</div>
              </div>
            </Link>
            <Link
              href={"/itineraries/southeastasia"}
              className={styles.spotcard}
            >
              <Image
                src="/spots/sp3.png"
                width={1600}
                height={1600}
                priority={true}
                style={{ width: "100%", height: "100%" }}
                alt="contact_secondary"
              />
              <div className={styles.location}>
                <div className={styles.locationname}>東南亞</div>
                <div className={styles.locationdesc}>旅遊勝地</div>
              </div>
            </Link>
            <Link href="/itineraries/cruiseship" className={styles.spotcard}>
              <Image
                src="/spots/sp4.png"
                width={1600}
                height={1600}
                priority={true}
                style={{ width: "100%", height: "100%" }}
                alt="contact_secondary"
              />
              <div className={styles.location}>
                <div className={styles.locationname}>郵輪</div>
                <div className={styles.locationdesc}>度假首選</div>
              </div>
            </Link>
          </div>
        </div>
      </section>
      <section className={styles.news}>
        <div className={styles.container}>
          <div className={styles.newstag}>
            <div className={styles.newstitle}>NEWS</div>
            <div className={styles.desc}>來自 MAPLE TRAV 的通知</div>
            <div className={styles.descinfo}>
              我們更新 MAPLE TRAV 的最新資訊、 活動資訊等...
            </div>
            <Link className={styles.news_link} href="/news">
              看更多
            </Link>
          </div>
          <Homenew renewnews={renewnews} />
        </div>
      </section>
    </main>
  );
}
