"use client";
import styles from "./Footer.module.css";
import { FaFacebookF, FaInstagram, FaPhone, FaEnvelope } from "react-icons/fa";
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
            <Link href="#" aria-label="Facebook">
              <FaFacebookF />
            </Link>
            <Link href="#" aria-label="Instagram">
              <FaInstagram />
            </Link>
          </div>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <p>© 2025 Tuğsan Yangın Söndürme Sistemleri. Tüm hakları saklıdır.</p>
      </div>
    </footer>
  );
}
