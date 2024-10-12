"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Nav = () => {
  const [navswitch, setNavswitch] = useState("close");
  const navclick = function () {
    if (navswitch === "close") {
      setNavswitch("open");
    } else {
      setNavswitch("close");
    }
  };
  return (
    <>
      <div className="hide-logo">
        <Link href="/">
          <div className="hl-img">
            <Image
              src="/logo.png"
              width={200}
              height={200}
              priority={true}
              style={{ width: "100%", height: "auto" }}
              alt="logo"
            />
          </div>
          <div className="title">
            <div>MAPLE</div>
            <div>TRAV</div>
          </div>
        </Link>
      </div>
      <header>
        <div className="logo">
          <Link href="/">
            <div>
              <Image
                src="/logo.png"
                width={200}
                height={200}
                priority={true}
                style={{ width: "100%", height: "auto" }}
                alt="logo"
              />
            </div>
            <div className="title">
              <div>MAPLE</div>
              <div>TRAV</div>
            </div>
          </Link>
        </div>
        <div className="links">
          <Link href="/">
            首頁
            <div>HOME</div>
          </Link>
          <Link href="/news">
            最新消息
            <div>NEWS</div>
          </Link>
          <Link href="/itineraries">
            旅遊行程
            <div>ITINERARIES</div>
          </Link>
          <Link href="/about">
            關於我們
            <div>ABOUT</div>
          </Link>
        </div>
        <div className="others">
          <Link href="/reserve" className="info">
            <div className="infoimg">
              <Image
                src="/icon_order_secondary.png"
                width={100}
                height={100}
                priority={true}
                style={{ width: "100%", height: "auto" }}
                alt="order_secondary"
              />
            </div>
            <div className="infotext">預約諮詢</div>
          </Link>
          <Link href="/quest" className="info">
            <div className="infoimg">
              <Image
                src="/icon_contact_secondary.png"
                width={100}
                height={100}
                priority={true}
                style={{ width: "100%", height: "auto" }}
                alt="contact_secondary"
              />
            </div>
            <div className="infotext">常見問題</div>
          </Link>
        </div>
      </header>
      <div className="h-bgc"></div>
      <div
        onClick={navclick}
        className={navswitch === "close" ? "bottom" : "bottom bottomopen"}
      >
        <div
          className={navswitch === "close" ? "firs-d" : "firs-d firs-d-op"}
        ></div>
        <div
          className={navswitch === "close" ? "sec-d" : "sec-d sec-d-op"}
        ></div>
        <div
          className={navswitch === "close" ? "thir-d" : "thir-d thir-d-op"}
        ></div>
      </div>
      <div
        className={navswitch === "close" ? "hide-nav" : "hide-nav hide-nav-op"}
      >
        <div className="hn-links">
          <Link href="/" onClick={navclick}>
            首頁
            <div>HOME</div>
          </Link>
          <Link href="/news" onClick={navclick}>
            最新消息
            <div>NEWS</div>
          </Link>
          <Link href="/itineraries" onClick={navclick}>
            旅遊行程
            <div>ITINERARIES</div>
          </Link>
          <Link href="/about" onClick={navclick}>
            關於我們
            <div>ABOUT</div>
          </Link>
        </div>
        <div className="hn-others">
          <Link href="/reserve" className="info" onClick={navclick}>
            <div className="hn-infoimg">
              <Image
                src="/icon_order_secondary.png"
                width={100}
                height={100}
                priority={true}
                style={{ width: "100%", height: "auto" }}
                alt="order_secondary"
              />
            </div>
            <div className="hn-infotext">預約諮詢</div>
          </Link>
          <Link href="/quest" className="hn-info" onClick={navclick}>
            <div className="hn-infoimg">
              <Image
                src="/icon_contact_secondary.png"
                width={100}
                height={100}
                priority={true}
                style={{ width: "100%", height: "auto" }}
                alt="contact_secondary"
              />
            </div>
            <div className="hn-infotext">常見問題</div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Nav;
