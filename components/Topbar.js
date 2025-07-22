"use client";

import { useState, useEffect } from "react";
import styles from "./Topbar.module.css";
import { FaWhatsapp, FaEnvelope, FaClock } from "react-icons/fa";

export default function Topbar({ onVisibleChange }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    function handleScroll() {
      setVisible(window.scrollY === 0);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (onVisibleChange) onVisibleChange(visible);
  }, [visible, onVisibleChange]);

  return (
    <div className={`${styles.topbar} ${!visible ? styles.hiddenTopbar : ""}`}>
      <div className={styles.container}>
        <div className={styles.link}>
          <FaClock />
          <span>Hafta içi: 09:00 - 18:00</span>
        </div>
        <div className={styles.contactLinks}>
          <a
            href="https://wa.me/905324791358"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            <FaWhatsapp />
            <span>+90 532 479 13 58</span>
          </a>
          <a href="mailto:info@tugsanyangin.com.tr" className={styles.link}>
            <FaEnvelope />
            <span>info@tugsanyangin.com.tr</span>
          </a>
        </div>
      </div>
    </div>
  );
}
