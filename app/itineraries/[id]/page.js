import styles from "./page.module.css";

import Itinerariestag from "@/app/componets/Itinerariestag";
import Itinerarieslocation from "./Itinerarieslocation";
const getItinerarie = async (id) => {
  const apiUrl = process.env.API_URL;
  const res = await fetch(`${apiUrl}/api/itinaries/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("failed to fetch data");
  }
  return res.json();
};
export default async function Itineraries({ params }) {
  const { id } = params;
  const { itinarie } = await getItinerarie(id);
  // console.log(itinarie);
  const reitinaries = itinarie.reverse();
  return (
    <div className={styles.itineraries}>
      <div className={styles.title}>
        <h1>ITINERARIES</h1>
        <p>旅遊行程</p>
      </div>
      <div className={styles.travel}>
        <div className={styles.choice}>
          <p>選擇您想去的國家</p>

          <Itinerariestag tag={id} />
        </div>
        <Itinerarieslocation reitinaries={reitinaries} />

        <div className={styles.travelchoice}></div>
      </div>
    </div>
  );
}
