"use client";
import styles from "./Footer.module.css";
import { FaWhatsapp, FaEnvelope, FaClock } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logoSection}>
          <img src="/logo.jpg" alt="Tuğsan Logo" className={styles.logo} />
          <p>Tuğsan Yangın Söndürme Sistemleri</p>
        </div>

        <div className={styles.linksSection}>
          <h4>Menü</h4>
          <ul>
            <li>
              <Link href="/">Ana Sayfa</Link>
            </li>
            <li>
              <Link href="/urunler">Ürünler</Link>
            </li>
            <li>
              <Link href="/hakkimizda">Hakkımızda</Link>
            </li>
            <li>
              <Link href="/iletisim">İletişim</Link>
            </li>
          </ul>
        </div>

        <div className={styles.contactSection}>
          <h4>İletişim</h4>
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

      <div className={styles.bottomBar}>
        <p>© 2025 Tuğsan Yangın Söndürme Sistemleri. Tüm hakları saklıdır.</p>
      </div>
    </footer>
  );
}
