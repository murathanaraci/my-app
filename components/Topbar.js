"use client";

import { useState, useEffect } from "react";
import styles from "./Topbar.module.css";
import { FaWhatsapp, FaEnvelope, FaClock } from "react-icons/fa";

export default function Topbar() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`${styles.topbar} ${!visible ? styles.hiddenTopbar : ""}`}>
      <div className={styles.container}>
        <div className={styles.link}>
          <FaClock />
          <span>Hafta içi: 09:00 - 18:00</span>
        </div>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <link
            href="https://wa.me/905551112233"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            <FaWhatsapp />
            <span>+90 555 111 22 33</span>
          </link>
          <link href="mailto:info@firma.com" className={styles.link}>
            <FaEnvelope />
            <span>info@firma.com</span>
          </link>
        </div>
      </div>
    </div>
  );
}
