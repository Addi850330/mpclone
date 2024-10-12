import Image from "next/image";
import styles from "./page.module.css";
const getItineraryById = async (id) => {
  const apiUrl = process.env.API_URL;
  const res = await fetch(`${apiUrl}/api/itinerary/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("fail to fetch.");
  }
  return res.json();
};

export default async function Itinerary({ params }) {
  const { id } = params;
  // console.log(id);
  const { itinerary } = await getItineraryById(id);
  const {
    tag,
    title,
    description,
    mainImg,
    contry,
    city,
    month,
    days,
    cost,
    airFirst,
    airSecond,
    airThird,
    spotFirst,
    spotFirstInfo,
    spotFirstImg,
    spotSecond,
    spotSecondInfo,
    spotSecondImg,
    spotThird,
    spotThirdInfo,
    spotThirdImg,
  } = itinerary;
  return (
    <div className={styles.travel}>
      <div className={styles.title}>
        <h1>ITINERARIES</h1>
        <p>旅遊行程</p>
      </div>
      <div className={styles.travel_info}>
        <div className={styles.main_img}>
          <Image
            src={mainImg}
            width={1000}
            height={1000}
            priority={true}
            style={{ width: "100%", height: "100%" }}
            alt={title}
            blurDataURL="/imgload.png"
          />
        </div>
        <div className={styles.main_info}>
          <div className={styles.main_title}>
            <div className={styles.mtinner}>{title}</div>
            <div className={styles.mdinner}>{description}</div>
          </div>
          <table>
            <tbody className={styles.info_desc}>
              <tr>
                <th scope="row">國家</th>
                <td>{contry}</td>
              </tr>
              <tr>
                <th scope="row">地區</th>
                <td>{city}</td>
              </tr>
              <tr>
                <th scope="row">月份</th>
                <td>{month}</td>
              </tr>
              <tr>
                <th scope="row">天數</th>
                <td>{days}</td>
              </tr>
              <tr>
                <th scope="row">價格</th>
                <td>{cost}</td>
              </tr>
              <tr>
                <th scope="row">航空</th>
                <td>
                  {airFirst} {airSecond} {airThird}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className={styles.sub_title}>景點規劃</div>
      <div className={styles.sub_info}>
        <div className={styles.spots}>
          <div className={styles.spotinfo}>
            <div className={styles.spot_title}>{spotFirst}</div>
            <div className={styles.spot_desc}>{spotFirstInfo}</div>
          </div>
          <div className={styles.spotimg}>
            <Image
              src={spotFirstImg}
              width={1600}
              height={1600}
              priority={true}
              style={{ width: "100%", height: "100%" }}
              alt={spotFirst}
              blurDataURL="/imgload.png"
            />
          </div>
        </div>

        <div className={styles.spots}>
          <div className={styles.spotinfo}>
            <div className={styles.spot_title}>{spotSecond}</div>
            <div className={styles.spot_desc}>{spotSecondInfo}</div>
          </div>
          <div className={styles.spotimg}>
            <Image
              src={spotSecondImg}
              width={1600}
              height={1600}
              priority={true}
              style={{ width: "100%", height: "100%" }}
              alt={spotSecond}
              blurDataURL="/imgload.png"
            />
          </div>
        </div>
        <div className={styles.spots}>
          <div className={styles.spotinfo}>
            <div className={styles.spot_title}>{spotThird}</div>
            <div className={styles.spot_desc}>{spotThirdInfo}</div>
          </div>
          <div className={styles.spotimg}>
            <Image
              src={spotThirdImg}
              width={1600}
              height={1600}
              priority={true}
              style={{ width: "100%", height: "100%" }}
              alt={spotThird}
              blurDataURL="/imgload.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
