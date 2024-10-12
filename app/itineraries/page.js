import styles from "./page.module.css";
import Link from "next/link";

import Itinerariesall from "./Itinerariesall";

const getItinerarie = async () => {
  const apiUrl = process.env.API_URL;
  const res = await fetch(`${apiUrl}/api/itinaries`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("failed to fetch data");
  }
  return res.json();
};
export default async function Itineraries() {
  const { itinaries } = await getItinerarie();

  const reitinaries = itinaries.reverse();
  return (
    <div className={styles.itineraries}>
      <div className={styles.title}>
        <h1>ITINERARIES</h1>
        <p>旅遊行程</p>
      </div>
      <div className={styles.travel}>
        <div className={styles.choice}>
          <p>選擇您想去的國家</p>
          <div className={styles.country}>
            <Link className={styles.active} href={"/itineraries"}>
              所有行程
            </Link>
            <Link href={"/itineraries/taiwan"}>國內</Link>
            <Link href={"/itineraries/jp"}>日本</Link>
            <Link href={"/itineraries/korean"}>韓國</Link>
            <Link href={"/itineraries/america"}>美洲</Link>
            <Link href={"/itineraries/europe"}>歐洲</Link>
            <Link href={"/itineraries/australia"}>奧洲</Link>
            <Link href={"/itineraries/hongkongmacao"}>港澳</Link>
            <Link href={"/itineraries/southeastasia"}>東南亞</Link>
            <Link href={"/itineraries/cruiseship"}>郵輪</Link>
          </div>
        </div>
        <Itinerariesall reitinaries={reitinaries} />

        <div className={styles.travelchoice}></div>
      </div>
    </div>
  );
}
