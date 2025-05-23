"use client";
import Link from "next/link";
import { useState } from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [urunlerOpen, setUrunlerOpen] = useState(false);

  const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;

  return (
    <nav className={styles.navbar}>
      <Link href="/" className={styles.logo}>
        <div className={styles.logo}>Tuğsan Yangın</div>
      </Link>

      <button
        className={styles.menuToggle}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      <ul className={`${styles.navList} ${menuOpen ? styles.showMenu : ""}`}>
        <li>
          <Link href="/">Ana Sayfa</Link>
        </li>

        <li
          className={styles.dropdown}
          onMouseEnter={() => !isMobile && setUrunlerOpen(true)}
          onMouseLeave={() => !isMobile && setUrunlerOpen(false)}
        >
          <span
            onClick={() => isMobile && setUrunlerOpen(!urunlerOpen)}
            style={{ cursor: "pointer" }}
          >
            Ürünler ▾
          </span>

          <ul
            className={`${styles.dropdownMenu} ${
              urunlerOpen ? styles.showDropdown : ""
            }`}
          >
            <li>
              <Link href="../urunler/sogutma">Soğutma Sistemleri</Link>
            </li>
            <li>
              <Link href="/urunler/yangin">Yangın Söndürme</Link>
            </li>
            <li>
              <Link href="/urunler/diger">Diğer Ürünler</Link>
            </li>
          </ul>
        </li>

        <li>
          <Link href="/iletisim">İletişim</Link>
        </li>
      </ul>
    </nav>
  );
}
