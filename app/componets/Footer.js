import React from "react";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="right-info">
        <div className="footer-title">
          <div className="footer-img">
            <Image
              src="/footerlogo.svg"
              width={200}
              height={200}
              priority={true}
              alt="f-logo"
            />
          </div>
          <div>MAPLE TRAV</div>
        </div>
        <div className="contact-info">
          <div>106台北市大安區基隆路二段190號</div>
          <div>TEL : 02-27121234</div>
          <div>營業時間：9:00-18:00</div>
          <div>假日不定期休息：假日不定期</div>
        </div>
      </div>
      <div className="left-info">
        <div className="footer-nav">
          <Link href="/">HOME</Link>
          <Link href="/news">NEWS</Link>
          <Link href="/about">ABOUT</Link>
          <Link href="/reserve">CONTACT</Link>
        </div>
        <div className="copyright">
          Copyright © 2024 MAPLE TRAV. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
