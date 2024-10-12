"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
const Itinerariestag = (tag) => {
  const tagset = tag.tag;
  const [contry, setContry] = useState(tagset);
  const [tagpage, setTagpage] = useState("all");

  useEffect(() => {
    if (contry == "taiwan") {
      setTagpage("taiwan");
    }
    if (contry == "jp") {
      setTagpage("jp");
    }
    if (contry == "korean") {
      setTagpage("korean");
    }
    if (contry == "america") {
      setTagpage("america");
    }
    if (contry == "europe") {
      setTagpage("europe");
    }
    if (contry == "hongkongmacao") {
      setTagpage("hongkongmacao");
    }
    if (contry == "southeastasia") {
      setTagpage("southeastasia");
    }
    if (contry == "cruiseship") {
      setTagpage("cruiseship");
    }
    if (contry == "australia") {
      setTagpage("australia");
    }
  }, [contry]);

  return (
    <div className="country">
      <Link href={"/itineraries"}>所有行程</Link>
      <Link
        className={tagpage == "taiwan" ? "active" : ""}
        href={"/itineraries/taiwan"}
      >
        國內
      </Link>
      <Link
        className={tagpage == "jp" ? "active" : ""}
        href={"/itineraries/jp"}
      >
        日本
      </Link>
      <Link
        className={tagpage == "korean" ? "active" : ""}
        href={"/itineraries/korean"}
      >
        韓國
      </Link>
      <Link
        className={tagpage == "america" ? "active" : ""}
        href={"/itineraries/america"}
      >
        美洲
      </Link>
      <Link
        className={tagpage == "europe" ? "active" : ""}
        href={"/itineraries/europe"}
      >
        歐洲
      </Link>
      <Link
        className={tagpage == "australia" ? "active" : ""}
        href={"/itineraries/australia"}
      >
        奧洲
      </Link>
      <Link
        className={tagpage == "hongkongmacao" ? "active" : ""}
        href={"/itineraries/hongkongmacao"}
      >
        港澳
      </Link>
      <Link
        className={tagpage == "southeastasia" ? "active" : ""}
        href={"/itineraries/southeastasia"}
      >
        東南亞
      </Link>
      <Link
        className={tagpage == "cruiseship" ? "active" : ""}
        href={"/itineraries/cruiseship"}
      >
        郵輪
      </Link>
    </div>
  );
};

export default Itinerariestag;
