"use client";
import styles from "./Footer.module.css";
import { FaFacebookF, FaInstagram, FaPhone, FaEnvelope } from "react-icons/fa";

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
              <a href="/">Ana Sayfa</a>
            </li>
            <li>
              <a href="/urunler">Ürünler</a>
            </li>
            <li>
              <a href="/hakkimizda">Hakkımızda</a>
            </li>
            <li>
              <a href="/iletisim">İletişim</a>
            </li>
          </ul>
        </div>

        <div className={styles.contactSection}>
          <h4>İletişim</h4>
          <p>
            <FaPhone /> 0 (312) 000 00 00
          </p>
          <p>
            <FaEnvelope /> info@tugsan.com
          </p>
        </div>

        <div className={styles.socialSection}>
          <h4>Bizi Takip Edin</h4>
          <div className={styles.icons}>
            <a href="#">
              <FaFacebookF />
            </a>
            <a href="#">
              <FaInstagram />
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
